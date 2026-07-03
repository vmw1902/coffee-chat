import json
import os
import requests
from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel


OLLAMA_URL = os.environ.get("OLLAMA_URL", "http://localhost:11434")
MODEL = "llama3.2:3b"

SYSTEM_PROMPT = (
    'Classify coffee-mahine requests. Reply ONLY with JSON: '
    '{"wants_more": bool, "asking_amount": bool, '
    '"machine_should_be": "on"|"off"|"unchenged"}'
)

@asynccontextmanager
async def lifespan(_: FastAPI):
    try:
        requests.post(
            f"{OLLAMA_URL}/api/generate",
            json={"model": MODEL},
            timeout=120
        )
        print(f"[warmup] {MODEL} loaded into memory")
    except Exception as error:
        print(f"[warmup] failed: {error}")
    yield

app = FastAPI(lifespan=lifespan)
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class CoffeeRequest(BaseModel):
    message: str

@app.post("/chat")
def coffee(req: CoffeeRequest):
    response = requests.post(
        f"{OLLAMA_URL}/api/chat",
        json={
            "model": MODEL,
            "messages": [
                {"role": "system", "content": SYSTEM_PROMPT},
                {"role": "user", "content": req.message}
            ],
            "format": "json",
            "stream": False,
            "options": {
                "temperature": 0,
                "num_predict": 60,
                "num_ctx": 512
            }
        },
        timeout=60
    )
    response.raise_for_status()
    return json.loads(response.json()["message"]["content"])
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
    '{"wants_coffee": bool, "asking_amount": bool, '
    '"machine_should_be": "on"|"off", '
    'The default values for the json should be that wants_coffee is false, asking_amount is false, and machine_should_be off'
    'If someone asks for a cup of coffee or for one to be made, this does not mean for machine_should_be to be on, keep it off unless explicitly mentioned.'
    'If someone asks for a cup of coffee or to make a cup of coffee, regardless of the machine being on or off, wants_coffee should be true'
    'Only change the machine_should_be value if explicitly told to turn the machine on or off.'
    'If they do not ask for a cup of coffee to be produced, wants_coffee should be false'
    'If they ask to only turn the machine on or off, that does not mean that they want another cup of coffee'
    'If they ask for how much coffee is left, asking_amount should be true'
    'If you get a message that will not produce a valid output from you, asking_amount should be false, machine_should_be will stay the same, and wants_coffee will be false'
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

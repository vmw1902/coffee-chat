import type { AxiosResponse } from 'axios'
import chatbotApiClient from './chatbot-api-client'

interface ChatbotBotReponse {
  wants_more: boolean
  asking_amount: boolean
  machine_should_be: 'on' | 'off' | 'unchanged'
}

export class ChatbotAPI {
  static chatbotControllerSendMessage(message: string): Promise<AxiosResponse<ChatbotBotReponse>> {
    return chatbotApiClient.post('/chat', { message })
  }
}

import type { AxiosResponse } from 'axios'
import type { MachineStatus } from './CoffeeAPI'
import chatbotApiClient from './chatbot-api-client'

export interface ChatbotResponse {
  wants_coffee: boolean
  asking_amount: boolean
  machine_should_be: MachineStatus
}

export class ChatbotAPI {
  static sendMessage(message: string): Promise<AxiosResponse<ChatbotResponse>> {
    return chatbotApiClient.post('/chat', { message })
  }
}

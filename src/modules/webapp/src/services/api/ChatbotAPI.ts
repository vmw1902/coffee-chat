import type { AxiosResponse } from 'axios'
import coffeeApiClient from './coffee-api-client'

interface ChatbotBotReponse {
  wants_more: boolean
  asking_amount: boolean
  machine_should_be: 'on' | 'off' | 'unchenged'
}

export class ChatbotAPI {
  chatbotControllerSendMessage(message: string): Promise<AxiosResponse<ChatbotBotReponse>> {
    return coffeeApiClient.post('/chat', message)
  }
}

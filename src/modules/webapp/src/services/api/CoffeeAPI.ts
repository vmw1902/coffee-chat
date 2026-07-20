import type { AxiosResponse } from 'axios'
import coffeeApiClient from './coffee-api-client'

interface CoffeeAPIReponse {
  status: boolean
}

export class CoffeeAPI {
  static chatbotControllerSendMessage(message: string): Promise<AxiosResponse<CoffeeAPIReponse>> {
    return coffeeApiClient.post('/chat', { message })
  }
}

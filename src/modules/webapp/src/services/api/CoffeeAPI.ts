import type { AxiosResponse } from 'axios'
import coffeeApiClient from './coffee-api-client'

export type MachineStatus = 'on' | 'off'
export type CoffeeDrink = 'Latte' | 'Espresso' | 'Cappuccino' | 'Americano'

export interface CoffeeMachine {
  status: MachineStatus
  temperature: number
  currentDrink: CoffeeDrink
  cupsToday: number
  coffeeLevel: number
}

export interface UpdateCoffeeStatusRequest {
  wants_more: boolean
  asking_amount: boolean
  machine_should_be: MachineStatus
  message: string
}

export interface CoffeeStatusResponse {
  coffeeMachine: CoffeeMachine
  history: string[]
}

export type UpdateCoffeeStatusResponse = CoffeeStatusResponse

export class CoffeeAPI {
  static getCoffeeStatus(): Promise<AxiosResponse<CoffeeStatusResponse>> {
    return coffeeApiClient.get('/coffee')
  }

  static updateCoffeeStatus(
    status: UpdateCoffeeStatusRequest,
  ): Promise<AxiosResponse<UpdateCoffeeStatusResponse>> {
    return coffeeApiClient.put('/coffee/status', status)
  }
}

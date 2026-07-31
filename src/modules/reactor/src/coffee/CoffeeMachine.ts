export type MachineStatus = 'on' | 'off';

export class CoffeeMachine {
  status: MachineStatus = 'off';
  temperature = 0;
  cupsToday = 0;
  coffeeLevel = 0.8;
}

export interface UpdateCoffeeStatusRequest {
  wants_coffee: boolean;
  asking_amount: boolean;
  machine_should_be: MachineStatus;
  message: string;
}

export interface CoffeeStatusResponse {
  coffeeMachine: CoffeeMachine;
  history: string[];
}

export type UpdateCoffeeStatusResponse = CoffeeStatusResponse;

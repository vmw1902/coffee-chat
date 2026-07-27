export type MachineStatus = 'on' | 'off' | 'unchanged';
export type CoffeeDrink = 'Latte' | 'Espresso' | 'Cappuccino' | 'Americano';

export class CoffeeMachine {
  status: MachineStatus = 'off';
  temperature = 0;
  currentDrink: CoffeeDrink = 'Latte';
  cupsToday = 0;
  coffeeLevel = 0.75;
}

export interface UpdateCoffeeStatusRequest {
  wants_more: boolean;
  asking_amount: boolean;
  machine_should_be: MachineStatus;
  message: string;
}

export interface UpdateCoffeeStatusResponse {
  coffeeMachine: CoffeeMachine;
  history: string[];
}

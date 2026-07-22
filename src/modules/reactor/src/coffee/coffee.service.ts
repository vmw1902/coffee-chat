import { Injectable } from '@nestjs/common';
import {
  BrewCoffeeRequest,
  BrewCoffeeResponse,
  CoffeeMachine,
  CoffeeStatus,
  UpdateCoffeeStatusRequest,
} from './CoffeeMachine';

@Injectable()
export class CoffeeService {
  private readonly coffeeMachine = new CoffeeMachine();

  getCoffeeStatus(): CoffeeStatus {
    return { ...this.coffeeMachine };
  }

  brewCoffee({ drink }: BrewCoffeeRequest): BrewCoffeeResponse {
    this.coffeeMachine.status = 'Brewing';
    this.coffeeMachine.currentDrink = drink;
    this.coffeeMachine.cupsToday += 1;
    this.coffeeMachine.status = 'Idle';

    return { success: true };
  }

  updateStatus({ status, temperature }: UpdateCoffeeStatusRequest): CoffeeStatus {
    if (status !== undefined) {
      this.coffeeMachine.status = status;
    }

    if (temperature !== undefined) {
      this.coffeeMachine.temperature = temperature;
    }

    return this.getCoffeeStatus();
  }
}

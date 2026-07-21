import { Injectable } from '@nestjs/common';
import {
  BrewCoffeeRequest,
  BrewCoffeeResponse,
  CoffeeStatus,
  UpdateCoffeeStatusRequest,
} from './coffee.interfaces';
import { CoffeeMachine } from './coffee-machine';

@Injectable()
export class CoffeeService {
  private readonly machine = new CoffeeMachine();

  getCoffeeStatus(): CoffeeStatus {
    return { ...this.machine };
  }

  brewCoffee({ drink }: BrewCoffeeRequest): BrewCoffeeResponse {
    this.machine.status = 'Brewing';
    this.machine.currentDrink = drink;
    this.machine.cupsToday += 1;
    this.machine.status = 'Idle';

    return { success: true };
  }

  updateStatus({ status, temperature }: UpdateCoffeeStatusRequest): CoffeeStatus {
    if (status !== undefined) {
      this.machine.status = status;
    }

    if (temperature !== undefined) {
      this.machine.temperature = temperature;
    }

    return this.getCoffeeStatus();
  }
}

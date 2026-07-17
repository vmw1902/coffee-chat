import { Injectable } from '@nestjs/common';
import { CoffeeMachine } from './CoffeeMachine';

@Injectable()
export class CoffeeService {
  private coffeeMachine = new CoffeeMachine();

  getStatus(): boolean {
    return this.coffeeMachine.status;
  }
}

import { Injectable } from '@nestjs/common';
import {
  CoffeeMachine,
  UpdateCoffeeStatusRequest,
  UpdateCoffeeStatusResponse,
} from './CoffeeMachine';

@Injectable()
export class CoffeeService {
  private coffeeMachine = new CoffeeMachine();
  private history: string[] = [];

  getCoffeeStatus(): CoffeeMachine {
    return this.coffeeMachine;
  }

  updateStatus({
    wants_more,
    machine_should_be,
    message,
  }: UpdateCoffeeStatusRequest): UpdateCoffeeStatusResponse {
    const changes: string[] = [];

    if (wants_more) {
      this.coffeeMachine.coffeeLevel = Math.max(
        0,
        this.coffeeMachine.coffeeLevel - 0.1,
      );
      this.coffeeMachine.cupsToday += 1;
      changes.push('Made another coffee.');
    }

    if (machine_should_be !== 'unchanged') {
      this.coffeeMachine.status = machine_should_be;
      this.coffeeMachine.temperature = machine_should_be === 'on' ? 205 : 0;
      changes.push(`Turned the machine ${machine_should_be}.`);
    }

    this.history.push(`User: ${message}`, this.createMachineMessage(changes));

    return {
      coffeeMachine: this.coffeeMachine,
      history: this.history,
    };
  }

  private createMachineMessage(changes: string[]): string {
    return changes.length > 0
      ? `CoffeeBot: ${changes.join(' ')}`
      : 'CoffeeBot: No changes were needed.';
  }
}

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

  updateStatus(status: UpdateCoffeeStatusRequest): UpdateCoffeeStatusResponse {
    const changes: string[] = [];

    if (status.wants_more && this.coffeeMachine.coffeeLevel >= 0.1) {
      this.coffeeMachine.coffeeLevel = Math.max(
        0,
        this.coffeeMachine.coffeeLevel - 0.1,
      );
      this.coffeeMachine.cupsToday += 1;
      changes.push('made another coffee');
    } else if (status.wants_more) {
      changes.push('not enough coffee to make another cup');
    }

    if (status.machine_should_be) {
      this.coffeeMachine.status = status.machine_should_be;
      this.coffeeMachine.temperature =
        status.machine_should_be === 'on' ? 205 : 0;

      if (status.machine_should_be === 'on') {
        this.coffeeMachine.coffeeLevel = 1;
      }

      changes.push(`turned the machine ${status.machine_should_be}`);
    }

    this.history.push(
      `User: ${status.message}`,
      this.createMachineMessage(changes),
    );

    return {
      coffeeMachine: this.coffeeMachine,
      history: this.history,
    };
  }

  private createMachineMessage(changes: string[]): string {
    return changes.length > 0
      ? `CoffeeBot: ${changes.join(', ')}`
      : 'CoffeeBot: No changes were needed.';
  }
}

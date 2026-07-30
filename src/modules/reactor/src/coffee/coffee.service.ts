import { Injectable } from '@nestjs/common';
import {
  CoffeeMachine,
  CoffeeStatusResponse,
  UpdateCoffeeStatusRequest,
  UpdateCoffeeStatusResponse,
} from './CoffeeMachine';

@Injectable()
export class CoffeeService {
  private coffeeMachine = new CoffeeMachine();
  private history: string[] = [];

  getCoffeeStatus(): CoffeeStatusResponse {
    return {
      coffeeMachine: this.coffeeMachine,
      history: this.history,
    };
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

    if (this.coffeeMachine.status !== status.machine_should_be) {
      this.coffeeMachine.status = status.machine_should_be;
      this.coffeeMachine.temperature =
        status.machine_should_be === 'on' ? 205 : 0;
      changes.push(`turned the machine ${status.machine_should_be}`);
    }
    if (this.coffeeMachine.status === 'on') {
      this.coffeeMachine.coffeeLevel = 1;
    }

    if (status.asking_amount) {
      changes.push(
        `there is ${Math.round(this.coffeeMachine.coffeeLevel * 100)}% coffee left`,
      );
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

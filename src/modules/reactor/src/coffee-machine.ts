import { CoffeeStatus } from './coffee.interfaces';

export class CoffeeMachine implements CoffeeStatus {
  status = 'Idle';
  temperature = 92;
  currentDrink = 'Latte';
  cupsToday = 17;
}

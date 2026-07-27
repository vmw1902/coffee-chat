import { Body, Controller, Get, Put } from '@nestjs/common';
import { CoffeeMachine } from './CoffeeMachine';
import type {
  UpdateCoffeeStatusRequest,
  UpdateCoffeeStatusResponse,
} from './CoffeeMachine';
import { CoffeeService } from './coffee.service';

@Controller('coffee')
export class CoffeeController {
  constructor(private readonly coffeeService: CoffeeService) {}

  @Get()
  getCoffeeStatus(): CoffeeMachine {
    return this.coffeeService.getCoffeeStatus();
  }

  @Put('status')
  updateStatus(
    @Body() body: UpdateCoffeeStatusRequest,
  ): UpdateCoffeeStatusResponse {
    return this.coffeeService.updateStatus(body);
  }
}

import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import {
  BrewCoffeeRequest,
  BrewCoffeeResponse,
  CoffeeStatus,
  UpdateCoffeeStatusRequest,
} from './CoffeeMachine';
import { CoffeeService } from './coffee.service';

@Controller('coffee')
export class CoffeeController {
  constructor(private readonly coffeeService: CoffeeService) {}

  @Get()
  getCoffeeStatus(): CoffeeStatus {
    retun this.coffeeService.getCoffeeStatus();
  }

  @Post('brew')
  brewCoffee(@Body() body: BrewCoffeeRequest): BrewCoffeeResponse {
    retun this.coffeeService.brewCoffee(body);
  }

  @Put('status')
  updateStatus(@Body() body: UpdateCoffeeStatusRequest): CoffeeStatus {
    retun this.coffeeService.updateStatus(body);
  }
}

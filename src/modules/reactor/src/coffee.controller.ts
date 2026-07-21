import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import {
  BrewCoffeeRequest,
  BrewCoffeeResponse,
  CoffeeStatus,
  UpdateCoffeeStatusRequest,
} from './coffee.interfaces';
import { CoffeeService } from './coffee.service';

@Controller('coffee')
export class CoffeeController {
  constructor(private readonly coffeeService: CoffeeService) {}

  @Get()
  getCoffeeStatus(): CoffeeStatus {
    return this.coffeeService.getCoffeeStatus();
  }

  @Post('brew')
  brewCoffee(@Body() body: BrewCoffeeRequest): BrewCoffeeResponse {
    return this.coffeeService.brewCoffee(body);
  }

  @Put('status')
  updateStatus(@Body() body: UpdateCoffeeStatusRequest): CoffeeStatus {
    return this.coffeeService.updateStatus(body);
  }
}

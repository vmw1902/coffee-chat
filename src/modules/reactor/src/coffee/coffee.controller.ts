import { Controller, Get } from '@nestjs/common';
import { CoffeeService } from './coffee.service';

@Controller('/coffee')
export class CoffeeController {
  constructor(private readonly coffeeService: CoffeeService) {}

  @Get()
  getHello(): boolean {
    return this.coffeeService.getStatus();
  }
}

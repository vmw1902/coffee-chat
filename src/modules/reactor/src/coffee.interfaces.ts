export interface BrewCoffeeRequest {
  drink: string;
}

export interface UpdateCoffeeStatusRequest {
  status?: string;
  temperature?: number;
}

export interface CoffeeStatus {
  status: string;
  temperature: number;
  currentDrink: string;
  cupsToday: number;
}

export interface BrewCoffeeResponse {
  success: boolean;
}

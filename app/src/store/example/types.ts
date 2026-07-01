import { Example } from '@/models/Example';

export interface IExampleState {
  examples: Example[] | null;
  example: Example | null;
}

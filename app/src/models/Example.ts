import { API } from '@/api';

interface IExample {
  name: string;
  id?: number;
  description?: string;
  active?: boolean;
}

interface ExampleDTO {
  name: string;
  description?: string;
}

class Example {
  public name: string;
  public id: number;
  public description: string;
  public active: boolean;

  constructor(options: IExample) {
    this.name = options.name;
    this.id = options.id || 0;
    this.description = options.description || '';
    this.active = options.active || false;
  }

  public static async fetchAll(): Promise<Example[]> {
    // const items = await API.get('example')
    const items = [];
    for (let i = 0; i < 2; i++) {
      items.push(new Example({ name: `item ${i}`, id: i }));
    }
    return items;
  }
  public static async fetch(id: number): Promise<Example> {
    return await API.get(`example/${id}`);
  }
  public static async create(example: ExampleDTO) {
    return await API.post('example', example);
  }
  public static async update(example: Example) {
    return await API.patch(`example/${example.id}`, example);
  }
  public static async delete(id: number) {
    return await API.delete(`example/${id}`);
  }
}

export { IExample, Example, ExampleDTO };

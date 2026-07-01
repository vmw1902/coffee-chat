import axios, { AxiosInstance } from 'axios';

interface IApi {
  get(url: string): Promise<any>;
  delete(url: string): Promise<any>;
  patch(url: string, payload: any): Promise<any>;
  post(url: string, payload: any): Promise<any>;
}

class Api implements IApi {
  public instance: AxiosInstance;

  constructor(url: string) {
    this.instance = axios.create({
      baseURL: url,
      timeout: 5000
    });
  }
  public async get(url: string) {
    const { data } = await this.instance.get(url);
    return data;
  }
  public async delete(url: string) {
    const { data } = await this.instance.delete(url);
    return data;
  }
  public async post(url: string, payload: any) {
    const { data } = await this.instance.post(url, payload);
    return data;
  }
  public async patch(url: string, payload: any) {
    const { data } = await this.instance.patch(url, payload);
    return data;
  }
}

const API = new Api('URL_FROM_ENV_HERE');

export { API };

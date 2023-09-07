import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Cache, MemoryCache } from './cache';

const BASE_URL = 'http://localhost:4000';

class Http {
  axiosInstance: AxiosInstance;
  constructor(
    baseURL: string,
    private cache: Cache = new MemoryCache(),
  ) {
    this.axiosInstance = axios.create({ baseURL });
  }

  async request<T>(config: RequestConfig): Promise<T> {
    const cacheKey = this.generateCacheKey(config);

    if (config.method === 'GET' && this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey)!;
    }

    try {
      const axiosConfig: AxiosRequestConfig = {
        method: config.method,
        url: config.url,
        params: config.query,
        data: config.body,
      };
      console.info('calling api');
      const res: AxiosResponse<T> = await this.axiosInstance(axiosConfig);

      if (config.method === 'GET') {
        this.cache.set(cacheKey, res.data);
      }

      return res.data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  private generateCacheKey(config: RequestConfig): string {
    return `${config.method}_${config.url}_${JSON.stringify(config.query || {})}`;
  }
}

const http = new Http(BASE_URL);

export default http;

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

type RequestConfig = {
  method: HttpMethod;
  url: string;
  query?: any;
  body?: any;
};

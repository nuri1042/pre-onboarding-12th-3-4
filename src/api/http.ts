import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import CacheApiServer from '../storage/cacheStorage';

const BASE_URL =
  process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_API_URL : process.env.REACT_APP_DEV_API_URL;
class Http {
  axiosInstance: AxiosInstance;

  constructor(
    baseURL: string,
    private cache: Cache = new CacheApiServer('sick'),
  ) {
    this.axiosInstance = axios.create({ baseURL });
  }

  async request(config: RequestConfig) {
    const cacheKey = this.generateCacheKey(config);

    try {
      const cachedResponse = await this.cache.get(cacheKey);
      if (config.method === 'GET' && cachedResponse) {
        console.info('in cach data');
        return cachedResponse;
      }

      const axiosConfig: AxiosRequestConfig = {
        method: config.method,
        url: config.url,
        params: config.query,
        data: config.body,
      };
      const res: AxiosResponse = await this.axiosInstance(axiosConfig);
      if (config.method === 'GET') {
        console.info('calling api');
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

const http = new Http(BASE_URL || '');

export default http;

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

type RequestConfig = {
  method: HttpMethod;
  url: string;
  query?: any;
  body?: any;
};

export interface Cache {
  get<T>(key: string): Promise<T | undefined>;
  set<T>(key: string, value: T): void;
}

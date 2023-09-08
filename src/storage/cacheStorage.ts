import { Cache } from '../api/http';

const EXPIRE_TIME = 24 * 60 * 60 * 1000; // 24시간

class CacheApiServer implements Cache {
  cacheName: string;

  constructor(cacheName: string) {
    this.cacheName = cacheName;
  }
  async get<T>(key: string): Promise<T | undefined> {
    const cache = await caches.open(this.cacheName);
    const response = await cache.match(key);

    if (response) {
      if (this.isExpired(response)) {
        const request = new Request(key);
        await cache.delete(request);
        return;
      } else {
        return await response.json();
      }
    }
  }

  async set<T>(key: string, value: T): Promise<void> {
    const cache = await caches.open(this.cacheName);
    const header = new Headers();
    header.append('FETCH_DATE', new Date().toISOString());

    const response = new Response(JSON.stringify(value), { headers: header });
    cache.put(key, response);
  }

  private isExpired(response: Response) {
    const fetchDate = new Date(response.headers.get('FETCH_DATE')!).getTime();
    const today = new Date().getTime();

    return today - fetchDate > EXPIRE_TIME;
  }
}

export default CacheApiServer;

export class MemoryCache implements Cache {
  private storage: Map<string, any> = new Map();

  async get<T>(key: string): Promise<T | undefined> {
    return this.storage.get(key);
  }

  set<T>(key: string, value: T): void {
    this.storage.set(key, value);
  }
}

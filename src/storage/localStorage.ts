export const RECENT_SEARCH = 'recent';

export default class LocalStorage {
  private EXP = 10; // MIN

  save(keyword: string, searchText: string) {
    const data = localStorage.getItem(keyword);
    const newData = !data ? [searchText] : [searchText, ...JSON.parse(data)];
    localStorage.setItem(keyword, JSON.stringify(newData));
  }

  get(keyword: string) {
    const item = JSON.parse(localStorage.getItem(keyword) || '{}');
    return item;
  }

  remove(keyword: string) {
    localStorage.removeItem(keyword);
  }
}

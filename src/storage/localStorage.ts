export const RECENT_SEARCH = 'recent';

export default class LocalStorage {
  save(keyword: string, searchText: string) {
    const data = localStorage.getItem(keyword);
    if (!data) {
      localStorage.setItem(keyword, JSON.stringify([searchText]));
    } else {
      const newData = JSON.parse(data).filter((item: string) => item !== searchText);
      newData.unshift(searchText);
      localStorage.setItem(keyword, JSON.stringify(newData.slice(0, 5)));
    }
  }

  get(keyword: string) {
    const item = JSON.parse(localStorage.getItem(keyword) || '{}');
    return item;
  }

  remove(keyword: string) {
    localStorage.removeItem(keyword);
  }
}

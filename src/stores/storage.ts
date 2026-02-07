export const storage = {
  get: (key: string) => localStorage.getItem(key),
  set: (key: string, value: string) => localStorage.setItem(key, value),
  remove: (key: string) => localStorage.removeItem(key),
  getJSON: <T>(key: string): T | null => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  },
  setJSON: (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
};

// Session-only data → sessionStorage (rarely used)
export const session = {
  get: (key: string) => sessionStorage.getItem(key),
  set: (key: string, value: string) => sessionStorage.setItem(key, value),
  remove: (key: string) => sessionStorage.removeItem(key),
};

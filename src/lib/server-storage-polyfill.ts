// Polyfill for Node.js 25+ where globalThis.localStorage is defined as an unconfigured object on the server
if (typeof globalThis !== "undefined") {
  const g = globalThis as unknown as { localStorage?: unknown };
  if (
    g.localStorage !== undefined &&
    (typeof g.localStorage !== "object" ||
      g.localStorage === null ||
      typeof (g.localStorage as { getItem?: unknown }).getItem !== "function")
  ) {
    const memoryStore = new Map<string, string>();
    g.localStorage = {
      getItem: (key: string) => memoryStore.get(String(key)) ?? null,
      setItem: (key: string, value: string) =>
        memoryStore.set(String(key), String(value)),
      removeItem: (key: string) => memoryStore.delete(String(key)),
      clear: () => memoryStore.clear(),
      key: (index: number) => Array.from(memoryStore.keys())[index] ?? null,
      get length() {
        return memoryStore.size;
      },
    };
  }
}

export {};

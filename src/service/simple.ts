export async function fetchPosts(): Promise<Post[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) throw new Error('Failed to fetch posts');
  return response.json();
}

export async function fetchTodo(id: number): Promise<Todo> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  if (!response.ok) throw new Error('Failed to fetch todo');
  return response.json();
}

export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

class PromiseCache {
  private cache = new Map<string, Promise<any>>();

  get<T>(key: string, promiseFn: () => Promise<T>): Promise<T> {
    if (!this.cache.has(key)) {
      this.cache.set(key, promiseFn());
    }
    return this.cache.get(key)!;
  }

  clear(key?: string) {
    if (key) {
      this.cache.delete(key);
    } else {
      this.cache.clear();
    }
  }
}

export const apiCache = new PromiseCache();
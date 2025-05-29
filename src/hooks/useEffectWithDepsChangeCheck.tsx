import { useEffect, useRef } from 'react';

type Deps = Record<string, any>;

/**
 * Кастомный useEffect c вомзможностью проверки изменившихся зависимостей
 * @param callback - функция, которая получает объект с флагами изменений
 * @param deps - зависимости, которые отслеживаем
 */

export function useEffectWithDepsChangeCheck<T extends Deps>(
  callback: (changes: { [K in keyof T]: boolean }) => void,
  deps: T
): void {
  const prevDeps = useRef<T | null>(null);
  const initialCall = useRef(true);

  useEffect(() => {
    const currentDeps = deps;

    if (initialCall.current) {
      initialCall.current = false;
      prevDeps.current = currentDeps;
      return;
    }

    const changes = {} as { [K in keyof T]: boolean };
    let hasChanges = false;

    (Object.keys(currentDeps) as Array<keyof T>).forEach((key) => {
      const prev = prevDeps.current?.[key];
      const curr = currentDeps[key];
      const isChanged = !Object.is(prev, curr);
      changes[key] = isChanged;
      if (isChanged) hasChanges = true;
    });

    if (hasChanges) {
      callback(changes);
    }

    prevDeps.current = currentDeps;
  }, [deps, callback]);
}
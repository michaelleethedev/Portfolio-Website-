import { useEffect, useState } from 'react';

export default function useDemoState(key, initial, isValid) {
  const [state, setState] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(key));
      return isValid(saved) ? saved : initial;
    } catch {
      return initial;
    }
  });
  const [storageUnavailable, setStorageUnavailable] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
      setStorageUnavailable(false);
    } catch {
      setStorageUnavailable(true);
    }
  }, [key, state]);

  return [state, setState, storageUnavailable];
}

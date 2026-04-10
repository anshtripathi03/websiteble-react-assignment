import { useEffect, useState } from 'react';
import { LOADING_DELAY_MS } from '../utils/constants';

export function useLoading(delay: number = LOADING_DELAY_MS): boolean {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return isLoading;
}

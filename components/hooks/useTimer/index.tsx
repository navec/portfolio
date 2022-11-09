import { useEffect, useState } from 'react';

const useTimer = (init: number) => {
  const [timer, setTimer] = useState(init);
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const isZeroOrless = timer <= 0;
    const interval = setInterval(() => setTimer(timer - 1), 1000);

    setIsExpired(isZeroOrless);
    if (isZeroOrless) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timer, isExpired]);

  return { timer, isExpired };
};

export { useTimer };

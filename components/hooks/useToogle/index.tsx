import { useState } from 'react';

export const useToogle = (value: boolean = false) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const active = () => setIsActive(true);

  const disabled = () => setIsActive(false);

  const toogle = () => setIsActive((previous) => !previous);

  return { isActive, active, disabled, toogle };
};

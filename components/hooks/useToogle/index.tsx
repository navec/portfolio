import { useState } from 'react';

export const useToggle = (value: boolean = false) => {
  const [isActive, setIsActive] = useState<boolean>(value);

  const active = () => setIsActive(true);

  const disabled = () => setIsActive(false);

  const toogle = () => setIsActive((previous) => !previous);

  return { isActive, active, disabled, toogle };
};

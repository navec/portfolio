import { breakpoints } from './Breakpoints';
import { space } from './Spaces';
import { typography } from './Typography';
import { zIndices } from './Zindices';

import '@emotion/react';

export const theme = {
  ...typography,
  ...zIndices,
  breakpoints: { ...breakpoints },
  space: { ...space },
} as const;

type DefaultTheme = typeof theme;

declare module '@emotion/react' {
  export interface Theme extends DefaultTheme {}
}

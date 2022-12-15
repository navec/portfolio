import { theme } from '@/components/theme/index-bis';
import { ThemeProvider } from '@emotion/react';
import { render } from '@testing-library/react';
import { NextRouter, useRouter } from 'next/router';

jest.mock('next/router');
const mockUseNextRouter = useRouter as jest.MockedFunction<typeof useRouter>;

export function createMockRouter(routerProps: Partial<NextRouter>) {
  return {
    basePath: '',
    pathname: '/',
    route: '/',
    query: {},
    asPath: '/',
    back: jest.fn(),
    beforePopState: jest.fn(),
    prefetch: jest.fn(),
    push: jest.fn(),
    reload: jest.fn(),
    replace: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
    isFallback: false,
    isLocaleDomain: false,
    isReady: true,
    defaultLocale: 'en',
    isPreview: false,
    ...routerProps,
  };
}

/**
 * Mock the `useRouter()` hook and return the mocked router instance.
 */
export default function mockNextRouter(overrides: Partial<NextRouter> = {}) {
  const mockRouter = createMockRouter(overrides);
  mockUseNextRouter.mockReturnValue(mockRouter);
  return mockRouter;
}

export const renderTestingWrapper = (wrappedComponent: any) =>
  render(<ThemeProvider theme={theme}>{wrappedComponent}</ThemeProvider>);

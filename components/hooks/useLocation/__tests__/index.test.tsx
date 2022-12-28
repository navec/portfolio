import { useLocation } from '@/components/hooks/useLocation';
import { mockNextRouter } from '@/test/test-utils';
import { renderHook } from '@testing-library/react';

describe.skip(`${useLocation.name} Hook`, () => {
  test('Should', () => {
    mockNextRouter({ pathname: '/' });
    renderHook(() => useLocation());
  });
});

import { act, renderHook } from '@testing-library/react';
import { useToggle } from '..';

describe(`${useToggle.name} HOOK`, () => {
  test('Should be inactive by default when hook is created', () => {
    const { result } = renderHook(() => useToggle());
    expect(result.current.isActive).toBeFalsy();
  });

  test('Should be active when hook prop value equal to true', () => {
    const { result } = renderHook(() => useToggle(true));
    expect(result.current.isActive).toBeTruthy();
  });

  test('Should change toggle false to true', () => {
    const { result } = renderHook(() => useToggle());
    expect(result.current.isActive).toBeFalsy();

    act(() => result.current.active());
    expect(result.current.isActive).toBeTruthy();
  });

  test('Should change toggle true to false', () => {
    const { result } = renderHook(() => useToggle(true));
    expect(result.current.isActive).toBeTruthy();

    act(() => result.current.disabled());
    expect(result.current.isActive).toBeFalsy();
  });

  test('Should change toggle value each time the toogle is called', () => {
    const { result } = renderHook(() => useToggle(true));
    expect(result.current.isActive).toBeTruthy();

    act(() => result.current.disabled());
    expect(result.current.isActive).toBeFalsy();
  });
});

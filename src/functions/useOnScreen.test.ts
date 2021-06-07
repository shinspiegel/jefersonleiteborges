import useOnScreen from './useOnScreen';
import { renderHook } from '@testing-library/react-hooks';

describe('functions/useOnScreen', () => {
  test('Should return a null reference to be used on component and a false flag for not visible', () => {
    const { result } = renderHook(() => useOnScreen());
    const [ref, flag] = result.all[0];

    expect(ref.current).toBe(null);
    expect(flag).toBe(false);
  });
});

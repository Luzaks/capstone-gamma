import { renderHook } from '@testing-library/react-hooks';
import Main from '../containers/Main';
import '@testing-library/jest-dom';

const { result } = renderHook(() => Main);

test('the prescense of attributes of the Main compoment with hooks.', () => {
  expect(typeof result.current).toBe('function');
  expect(typeof result).toBe('object');
});

test('the visibility of Main component with hooks.', () => {
  const rendered = expect(result).toBeVisible;
  expect(rendered).not.toThrow('Error');
  expect(typeof rendered).toBe('function');
});

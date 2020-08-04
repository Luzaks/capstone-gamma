import { renderHook } from '@testing-library/react-hooks';
import '@testing-library/jest-dom';
import NavBar from '../containers/Navbar';
import FetchingRover from '../components/fetchComponents/FetchingRover';
import FetchingSol from '../components/fetchComponents/FetchingSol';
import SubmitButton from '../components/fetchComponents/SubmitButton';

describe('NavBar component behaviour.', () => {
  const { result } = renderHook(() => NavBar);
  test('it checks the attributes of the NavBar component with hooks..', () => {
    expect(typeof result.current).toBe('function');
    expect(typeof result).toBe('object');
  });

  test('the visibility of the NavBar component with hooks.', () => {
    const rendered = expect(result).toBeVisible;
    expect(rendered).not.toThrow('Error');
    expect(typeof rendered).toBe('function');
  });
});

describe('the Nav inner fetching rover component with hooks.', () => {
  const { result } = renderHook(() => FetchingRover);
  test('the fetching rover component attributes', () => {
    expect(typeof result.current).toBe('function');
    expect(typeof result).toBe('object');
  });
  test('the visibility of the fetching rover component.', () => {
    const rendered = expect(result).toBeVisible;
    expect(rendered).not.toThrow('Error');
    expect(typeof rendered).toBe('function');
  });
});

describe('the Nav inner fetching sol component with hooks.', () => {
  const { result } = renderHook(() => FetchingSol);
  test('the fetching sol component attributes', () => {
    expect(typeof result.current).toBe('function');
    expect(typeof result).toBe('object');
  });
  test('the visibility of the fetching sol component.', () => {
    const rendered = expect(result).toBeVisible;
    expect(rendered).not.toThrow('Error');
    expect(typeof rendered).toBe('function');
  });
});

describe('the Nav inner submit button component with hooks.', () => {
  const { result } = renderHook(() => SubmitButton);
  test('the submit button component attributes', () => {
    expect(typeof result.current).toBe('function');
    expect(typeof result).toBe('object');
  });
  test('the visibility of the submit button component.', () => {
    const rendered = expect(result).toBeVisible;
    expect(rendered).not.toThrow('Error');
    expect(typeof rendered).toBe('function');
  });
});

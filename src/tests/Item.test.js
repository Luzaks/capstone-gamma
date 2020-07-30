import { renderHook } from '@testing-library/react-hooks';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Item from '../containers/Item';
import itemHelperMock from './mocks/helperMocks/itemHelperMock';

describe('the Item component with hooks.', () => {
  const { result } = renderHook(() => Item);
  test('the Item components attributes', () => {
    expect(typeof result.current).toBe('object');
    expect(typeof result).toBe('object');
  });
  test('the visibility of Item component.', () => {
    const rendered = expect(result).toBeVisible;
    expect(rendered).not.toThrow('Error');
    expect(typeof rendered).toBe('function');
  });
});

describe('the logic of the Item component', () => {
  const photo = {
    id: 123,
    img_src: 'something',
    camera: {
      full_name: 'RHAZ',
      name: 'RHAZ',
    },
    sol: 12,
    earth_date: '12346',
    rover: 'Curiosity',
  };
  test('the item helper method logic with no undefined error.', () => {
    const returnedItem = itemHelperMock(123, photo);
    const { getAllByText } = render(returnedItem);
    const [node] = getAllByText(
      (_, { textContent }) => textContent === '12 12346 RHAZ RHAZ Curiosity 123 something',
    );
    expect(node.textContent).toBe('12 12346 RHAZ RHAZ Curiosity 123 something');
  });
});

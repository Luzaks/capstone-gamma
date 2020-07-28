import React from 'react';
import { render } from '@testing-library/react';
import AppMock from './mocks/AppMock';
import fetchApi from '../Redux/actions/actions';

const fetched = fetchApi('Curiosity', '1');

test('the App title element.', () => {
  const { getByText } = render(<AppMock />);
  const titleElement = getByText(/GAMMA/i);
  expect(titleElement).toBeInTheDocument();
});

test('the App See element.', () => {
  const { getByText } = render(<AppMock />);
  const welcomeElement = getByText(/Choose a rover, pick/i);
  expect(welcomeElement).toBeInTheDocument();
});

test('the fetched Api function of the entire App.', () => {
  expect(typeof fetched).toBe('function');
});

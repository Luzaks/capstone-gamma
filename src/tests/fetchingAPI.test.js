import fetchApi from '../Redux/actions/actions';

test('the API fetched.', () => {
  const call = fetchApi('spirit', 45);
  expect(typeof call).toBe('function');
  expect(call.length).toBe(1);
});

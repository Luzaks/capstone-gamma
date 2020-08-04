import React from 'react';
import '@testing-library/react';
import UiHelper from '../components/helpers/uiHelper';

test('the rendering helper.', () => {
  const notSelected = <option key="Curiosity" value="Curiosity">Curiosity</option>;
  const uiHelper = UiHelper('Curiosity', '');
  expect(uiHelper).toStrictEqual(notSelected);
});

test('the rendering helper.', () => {
  const selected = <option key="Curiosity" value="Curiosity" selected>Curiosity</option>;
  const uiHelper = UiHelper('Curiosity', 'Curiosity');
  expect(uiHelper).toStrictEqual(selected);
});

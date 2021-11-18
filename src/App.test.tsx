import React from 'react';

import App from './App';

import testUtils from './utils/testUtils';

test('Should render App', () => {
  const app = testUtils.renderWithProvider(<App />);
  expect(app).toBeTruthy();
});

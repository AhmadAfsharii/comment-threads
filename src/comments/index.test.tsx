import React from 'react';

import Comments from '.';

import testUtils from '../utils/testUtils';

test('Should render Comments', () => {
  const comments = testUtils.renderWithProvider(<Comments />);
  expect(comments).toBeTruthy();

  expect(comments.getByTestId('title'))
    .toHaveTextContent('Comments');
});

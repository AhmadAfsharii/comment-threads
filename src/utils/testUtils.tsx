import React, { ReactElement } from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';

import store from '../store';

function renderWithProvider(ui: ReactElement): RenderResult {
  return render(<Provider store={store}>{ui}</Provider>);
}

export default {
  renderWithProvider,
};

import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import theme from '../theme/index';
import { makeStore } from '../redux/store';

function setupComponent<T>(Component: React.FC, defaultProps?: T) {
  return async function (testProps?: T) {
    const store = makeStore();
    return await render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Component {...defaultProps} {...testProps} />
        </Provider>
      </ThemeProvider>,
    );
  };
}

export default setupComponent;

import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';
import {
  fireEvent
} from '@testing-library/dom'


test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});

test('counter tests work', () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const counterValue = queryByTestId('counter-value');
  const incrementButton = queryByTestId('counter-increment-button');

  if (!counterValue || !incrementButton) {
    throw Error();
  }

  expect(counterValue.textContent).toBe("0");
  fireEvent.click(incrementButton);
  expect(counterValue.textContent).toBe("1");
});

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRoutes from './router.jsx';
import { store } from './configureStore.jsx';
import 'bootstrap';
const rootElement = document.getElementById('kts-app');

ReactDOM.render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>,
  rootElement
);

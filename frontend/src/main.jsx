import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import commentApp from './reducers/index.jsx';
import App from './components/App.jsx';
import DevTools from './components/DevTools.jsx';

const enhancer = compose(DevTools.instrument());

let store = createStore(commentApp, {}, enhancer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import commentApp from './reducers/reducerRegistry.jsx';
import App from './components/App.jsx';
import DevTools from './components/DevTools.jsx';

const enhancer = compose(DevTools.instrument());

// createStore (rootReducer, initial state)
let store = createStore(commentApp, {}, enhancer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

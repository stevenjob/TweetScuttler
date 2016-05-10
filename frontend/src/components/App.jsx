import React from 'react';
import ChatWindow from './ChatWindow.jsx';
import HeaderBar from './HeaderBar.jsx';
import DevTools from './DevTools.jsx';

const App = () => (
  <div id="app">
    <HeaderBar />
    <ChatWindow />
    <DevTools />
  </div>
);

export default App;

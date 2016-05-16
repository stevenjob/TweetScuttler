import React from 'react';
import ReactDOM from 'react-dom';
import ChatWindow from './ChatWindow.jsx';
import HeaderBar from './HeaderBar.jsx';

ReactDOM.render(
    <div>
        <HeaderBar />
        <ChatWindow />
    </div>, document.getElementById('root'));

import React from 'react';
import AccountSwitcher from './AccountSwitcher.jsx';
const logo = require('../../assets/ts.png');

const HeaderBar = () => (
  <div className="header">
    <img role="presentation" className="logo" src={logo} />
    <h1>Tweet Scuttler</h1>
    <AccountSwitcher />
  </div>
);

export default HeaderBar;

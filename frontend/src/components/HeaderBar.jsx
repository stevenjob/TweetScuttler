import React from 'react';

const HeaderBar = () => (
  <div className="header">
    <img className="logo" src={require('../../assets/ts.png')}/>
    <h1>Tweet Scuttler</h1>
    <hr />
  </div>
);

export default HeaderBar;

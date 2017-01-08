/* styles (loaded first to allow overrides) */
import './App.css';

/* libraries */
import React from 'react';

/* project components */
import Header from './components/Header';
import Menu from './components/Menu';

export default ({children}) => (
  <div className='app-wrapper'>
    {children}
    <Header>
      <Menu />
    </Header>
  </div>
);

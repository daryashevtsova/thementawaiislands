import React from 'react';

import './styles/header.css';

import logo from '../../assets/images/square-logo.svg';

export default ({children}) => (
  <div className='header-wrapper'>
    <div className='header-dark' />
    <div className='header'>
      <div className='header-container'>
        <span className='header-logo'>
          <a href='/'>
            <object data={logo} type="image/svg+xml" role='presentation' />
          </a>
        </span>
        <div>
          {children}
        </div>
      </div>
    </div>
  </div>
);

import React from 'react';

import './styles/header.css';

import logo from '../../assets/images/logo.svg';

export default ({children}) => (
  <div>
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

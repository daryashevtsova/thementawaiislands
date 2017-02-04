import React from 'react';

import { Link } from 'react-router';

import './styles/header.css';

import logo from '../../assets/images/square-logo.svg';

export default ({children}) => (
  <div className='header-wrapper'>
    <div className='header'>
      <div className='header-container'>
        <span className='header-logo'>
          <Link to='/'>
            <object data={logo} type="image/svg+xml" role='presentation' />
          </Link>
        </span>
        <div>
          {children}
        </div>
      </div>
    </div>
  </div>
);

import React from 'react';

import { Header } from 'react-mdl';

import './styles/header.css';

import logo from '../../assets/images/logo.png';

export default ({children}) => (
  <Header
    title={
      <span>
        <a href='/'>
          <img src={logo} role='presentation' />
        </a>
      </span>
    }
    >
    {children}
  </Header>
);

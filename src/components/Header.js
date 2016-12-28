import React from 'react';

import { Header } from 'react-mdl';

import './styles/header.css';

import logo from '../../assets/images/logo.png';

export default ({children}) => (
  <Header
    title={
      <span>
        <a href='/'>
          <img src={logo} style={{width: '100%'}} role='presentation' />
        </a>
      </span>
    }
    >
    {children}
  </Header>
);

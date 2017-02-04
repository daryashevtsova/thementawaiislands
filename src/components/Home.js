import React from 'react';

import Banner from './Banner';

import './styles/home.css';

export default (props) => (
  <div className='home-wrapper'>
    <Banner
      handleScroll={props.handleScroll}
    />
    <div className='content'>
      CONTENT 1
    </div>
    <div className='content dark'>
      CONTENT 2
    </div>
    <div className='content'>
      CONTENT 3
    </div>
    <div className='content dark'>
      CONTENT 4
    </div>
  </div>
);
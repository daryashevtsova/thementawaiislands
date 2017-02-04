import React from 'react';

import Banner from './Banner';

import './styles/home.css';

export default ({setTransparent}) => (
  <div className='home-wrapper'>
    <Banner
      setTransparent={setTransparent}
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
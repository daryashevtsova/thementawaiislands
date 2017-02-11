import React from 'react';

import Banner from './Banner';

import wave from '../../assets/images/home/wave_collage.jpg';

import './styles/home.css';

export default ({setTransparent}) => (
  <div className='home-wrapper'>
    <Banner
      setTransparent={setTransparent}
    />
    <div className='content'>
      <div
        className='wave'
        style={{ backgroundImage: `url(${wave})` }}
      />
      <div className='wave-text'>
        <h1>
          AFFORDABLE ACCOMMODATION,
        </h1>
        <h1>
          IN TROPICAL ISLAND SURF PARADISE
        </h1>
        <h2>
          - MATUNGOU, THE MENTAWAI ISLANDS
        </h2>
      </div>
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
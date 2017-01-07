import React from 'react';

import landingImage from '../../assets/images/landing-images/5.jpg';

import './styles/banner.css';

export default () => (
  <div
    className='banner'
    style={{backgroundImage: `url(${landingImage})`}}
  >
    <div className='statement'>
      <div className='statement-text'>
        Surf.
        <br />
        Mentawai Islands.
        <br />
        Perfection.
      </div>
      <div className='statement-text' />
      <div className='statement-text' />
    </div>
  </div>
);

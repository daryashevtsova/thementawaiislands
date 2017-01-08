import React from 'react';
import TypeWriter from './utility/TypeWriter';

import landingImage from '../../assets/images/landing-images/5.jpg';

import './styles/banner.css';

export default () => (
  <div
    className='banner'
    style={{backgroundImage: `url(${landingImage})`}}
  >
    <div className='banner-statement'>
      Mentawai Islands.
      <br />
      <TypeWriter>
        <span>#surf</span>
        <span>#perfection</span>
        <span>#stoked</span>
      </TypeWriter>
    </div>
  </div>
);

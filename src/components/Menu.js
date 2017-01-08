import React from 'react';

import './styles/menu.css';
import MENU_TEXT from '../constants/menu.json';

import calIcon from '../../assets/images/icons/cal.png';

export default () => (
  <div className='header-menu-wrapper'>
    {
      MENU_TEXT
      .en
      .map((menu, index) => (
        <a
          className='header-menu-item'
          href="#"
          id={menu.heading}
          key={index}
        >
          {menu.heading.toUpperCase()}
        </a>
      ))
    }
    <a
      className='header-menu-button'
      href="#"
    >
      <img src={calIcon} role='presentation'></img>
      CHECK AVAILABILITY
    </a>
  </div>
);

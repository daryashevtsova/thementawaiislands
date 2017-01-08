import React from 'react';

import { Link } from 'react-router';

import MENU_TEXT from '../constants/menu.json';

import calIcon from '../../assets/images/icons/cal.png';
import './styles/menu.css';

export default () => (
  <div className='header-menu-wrapper'>
    {
      MENU_TEXT
      .en
      .map((menu, index) => (
        <Link
          id={menu.heading}
          key={index}
          className='header-menu-item'
          to={`/${menu.heading.toLowerCase().replace(/\s/, '')}`}
        >
          {menu.heading.toUpperCase()}
        </Link>
      ))
    }
    <Link
      className='header-booking-button'
      to="/booking"
    >
      <img src={calIcon} role='presentation'></img>
      CHECK AVAILABILITY
    </Link>
  </div>
);

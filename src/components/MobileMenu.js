/* libraries */
import React from 'react';
import BurgerMenu from 'react-burger-menu';
import { Link } from 'react-router';

/* styles */
import './styles/mobileMenu.css';

/* constants */
import headings from '../constants/menu.json';
const Menu = BurgerMenu.slide;

const buildMenu = (handleStateChange) => (
  headings
    .en
    .map((item, index) => (
      <Link
        key={index}
        className='menu-item'
        to={'/' + item.heading.toLowerCase().replace(/ /g, '')}
        onClick={() => handleStateChange({ isOpen: false })}
      >
        {item.heading.toUpperCase()}
      </Link>
    ))
);

export default ({ isOpen, handleStateChange }) => (
  <Menu
    isOpen={isOpen}
    onStateChange={handleStateChange}
    noOverlay
    right
  >
    {buildMenu(handleStateChange)}
  </Menu>
);

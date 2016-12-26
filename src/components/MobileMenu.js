/* libraries */
import React from 'react';

/* community componentes */
import BurgerMenu from 'react-burger-menu';

/* styles */
import './styles/mobileMenu.css';

/* constants */
import headings from '../constants/menu.json';
const Menu = BurgerMenu.bubble;

const buildMenu = () => (
  headings
    .en
    .map((item) => (
      <a className='menu-item' href={'/' + item.heading.toLowerCase().replace(/ /g,'')}>
        { item.heading }
      </a>
    ))
);

export default () => (
  <Menu right>
    { buildMenu() }
  </Menu>
);

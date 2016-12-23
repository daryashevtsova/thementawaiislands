import React from 'react';
import { Menu, MenuItem, Navigation } from 'react-mdl';

import MENU_TEXT from '../constants/menu.json';

export default () => (
  <Navigation>
    {
      MENU_TEXT
        .en
        .map((menu, index) => (
          <div key={index}>
            <a
              href="#"
              id={menu.heading}
              key={menu.heading}>
            {menu.heading}
            </a>
            <Menu
              target={menu.heading}
              key={index}
              >
              {menu.items.map(item => (
                <MenuItem key={item}>
                  {item}
                </MenuItem>
              ))}
            </Menu>
          </div>
        ))
    }
  </Navigation>
);

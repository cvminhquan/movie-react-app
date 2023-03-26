/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react';
import styles from './SideBar.module.scss';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

export interface SideBarProps {}

export interface SideBarDataType {}

const SideBar: React.FC<SideBarProps> = (props) => {
  return (
    <Menu>
      <Link className="menu-item" to="/">
        Home
      </Link>
      <Link className="menu-item" to="/salads">
        Salads
      </Link>
      <Link className="menu-item" to="/pizzas">
        Pizzas
      </Link>
      <Link className="menu-item" to="/desserts">
        Desserts
      </Link>
    </Menu>
  );
};

export default SideBar;
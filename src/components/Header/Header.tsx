import React from 'react';
import styles from './Header.module.scss';

export interface HeaderProps {}

export interface HeaderDataType {}

const Header: React.FC<HeaderProps> = (props) => {
  return(
    <div className={styles['root']}>Header component</div>
  )
};

export default Header;
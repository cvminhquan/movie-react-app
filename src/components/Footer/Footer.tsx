import React from 'react';
import styles from './Footer.module.scss';

export interface FooterProps {}

export interface FooterDataType {}

const Footer: React.FC<FooterProps> = (props) => {
  return(
    <div className={styles['root']}>Footer component</div>
  )
};

export default Footer;
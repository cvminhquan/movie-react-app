import React from 'react';
import styles from './Login.module.scss';

export interface LoginProps {}

export interface LoginDataType {}

const Login: React.FC<LoginProps> = (props) => {
  return(
    <div className={styles['root']}>Login component</div>
  )
};

export default Login;
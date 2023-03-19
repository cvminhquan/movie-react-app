/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import logo from '../../assets/images/logo.png'
import classNames from 'classnames'
import { scrypt } from 'crypto'
import SearchBar from '../SearchBar/SearchBar'
import { Container, Dropdown, Nav, Navbar } from 'react-bootstrap'
import ButtonDropdown from '../ButtonDropdown/ButtonDropdown'
import LinkDropdown from '../LinkDropdown/LinkDropdown'

export interface HeaderProps {}

export interface HeaderDataType {}

const Header: React.FC<HeaderProps> = (props) => {
  function onSearch(query: string): void {
    throw new Error('Function not implemented.')
  }
  return (
    <div className={styles['site-header']}>
      <div className='container-fluid'>
        <div className={styles['header']}>
          <div className={styles['header__left']}>
            <h1 className={styles['logo']}>
              <Link to='/'>
                <img src={logo} alt='' />
                <span>Film</span>
                <span className={styles['text-primary']}>hot</span>
              </Link>
            </h1>
            <ul className={styles['main-menu']}>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/'>About</Link>
              </li>
              <li>
                <Link to='/'>Contact</Link>
              </li>
            </ul>
          </div>
          <div className={styles['header__right']}>
            <div className='header__search'>
              <SearchBar onSearch={onSearch} />
            </div>
            <div className={classNames(styles['user-account'], 'dropdown')}>
              <LinkDropdown
                items={[
                  { name: 'Home', path: '/' },
                  { name: 'About', path: '/about' },
                  { name: 'Contact', path: '/contact' }
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header

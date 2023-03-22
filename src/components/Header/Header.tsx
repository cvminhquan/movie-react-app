/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import logo from '../../assets/images/logo.png'
import classNames from 'classnames'
import SearchBar from '../SearchBar/SearchBar'
import LinkDropdown from '../LinkDropdown/LinkDropdown'
import { Dropdown } from 'react-bootstrap'

export interface HeaderProps {}

export interface HeaderDataType {}

const Header: React.FC<HeaderProps> = (props) => {
  function onSearch(query: string): void {
    throw new Error('Function not implemented.')
  }
  const [open, setOpen] = useState(false)

  const handleToggle = () => setOpen(!open)
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
              <Dropdown
                show={open}
                // className={styles['dropdown']}
                onMouseEnter={handleToggle}
                onMouseLeave={handleToggle}
              >
                <Dropdown.Toggle className={styles['dropdown-link']} as={Link} to='/' variant='primary'>
                  <div className={styles['user-account-link']}>
                    <svg width='32px' height='32px'>
                      <image
                        x='0px'
                        y='0px'
                        width='32px'
                        height='32px'
                        xlinkHref='data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACB1BMVEW7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu3t7eys7KztLO4uLi6u7q0tbSxsrG2t7awsrC7vLu8vLy1trW8vby1tbWysrK6urq3uLe5urm9vr24ubitrq2wsbCsrazV1dXs7Oz29vb39/fw8PDe3t6vsK/v7+/////5+vnLy8urrKuxsbHGx8aur67k5OT4+Pizs7P9/f3R0tGurq7Oz87j4+OsrqzU1NTo6OiusK7+/v7k5eT4+fjGyMa7u7v6+vrMzMyrq6u+vr7Ky8ri4uLt7e3u7u7m5+bT1NOwsLC+v77Q0NDe397f39/T09O/v7/FxsX5+fn09PS9vb37+/v09fTNzs3g4ODh4uHX2Nf8/PzY2djIyMjIycjU1dTl5uXx8fHm5ubV1tVi3+TsAAAAUnRSTlMADleWxOHwxphZESftmiuDiBvN0iAq8TAW9xzX340dI5ymCPj9VV+lydDl5/P05srRnqdjCvr+EKCqipTd5Pb7IfI31NmLkAQvojIVn+PLoWIYYNJBTgAAAAFiS0dEca8HXOIAAAAHdElNRQfjBQECDwMxTbKCAAACG0lEQVQ4y21T90PTQBQ+RKpY3FisExcuEHEvFPdeXLikJLnakjbVgjESSEutqIiKIo66R90L/SNtbzTp+H66e9/37r17A4ACqqZUT63xeGqmTa+dAcrhra7rhEIXQl2iFPDMnFXKz0bdoqzIBIosdqM5RfTceYKKZRdwUJhf7/AL6iD35lAU6Gvg/ELfJe4eCgd62FGT/IuYYDGkPI5E9RASYiK9anAJyw8yFx1evhLv7buKYwoJqMCleX4ZUskVG+iaSXC936ICFS3PCRoHyItKUOw1OQZtYsMDKwBYuUqgEaxEgTeTQxFiE1dXgTWdlFdxyhGYN9LM2gQaJVoB46aLN4ctWg19LVjH/nDrtltwJ42IFa4HG8JUMFLpBTm8ETSHeA53K+SAmkELE8jWqMPfY7/ICzYFWHfcdbhv40KIVok3Z+RBH6XHHj7ivYWbQZvOL+N6+vHEk6fPnoejCh8dfQuo5SHkjB158fLV6zdvg3aGj4e6FWzbTkqtida74SQN8T4xGBM0UuodOwHYlW+WZosT7jok1HROgfXduW7WI1HRoviDWYT4eEzLtdubH4g98GOmZ8wsQVY2NLiXjtQ+Q/pkliE+ZLTzod/fb1bA5wMdfKwbDn4p57/6DzmL0XH42/diOvXjiLdot47+TLgkqdFfx46XLOeJtpbffyaT2Wxy8u8//8lTFfb7dNOZ1rMeX/u58xcuOtb/keQ/CDzeyUsAAAAASUVORK5CYII='
                      ></image>
                    </svg>
                  </div>
                </Dropdown.Toggle>
                <LinkDropdown
                  title='Menu'
                  items={[
                    { name: 'Home', path: '/' },
                    { name: 'About', path: '/about' },
                    { name: 'Contact', path: '/contact' }
                  ]}
                />
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header

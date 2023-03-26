/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './HomePage.module.scss'
import classNames from 'classnames'

export interface HomePageProps {}

export interface HomePageDataType {}

const HomePage: React.FC<HomePageProps> = (props) => {
  return (
    <div className='root'>
      <div className={styles['page-content']}>
        <div className='movie-slider'>
          <div className='movie-single-content'>
            <div className='movie-single-inner'>
              <div className={styles['movie-slider']}>
                <div className={classNames(styles['wrapper-infor-movie'], 'container')}>
                  <div className={styles['single-feature-movie']}>
                    <Link className={styles['movie-title']} to=''>
                      <h3>Fantastic Beasts and Where to Find Them</h3>
                    </Link>
                    <div className={styles['movie-meta']}>
                      <span className={styles['movie-meta--release-year']}>2016</span>
                      <span className={classNames(styles['movie-meta--genre'])}>
                        <Link to='/'>Action, </Link>
                        <Link to='/'>Animation, </Link>
                        <Link to='/'>Family</Link>
                      </span>
                      <span className={classNames(styles['movie-meta--duration'])}>2hr 13 mins</span>
                    </div>
                    <div className={classNames(styles['movie-action'])}>
                      <Link className={styles['action-watch']} to=''>
                        Watch now
                      </Link>
                      <div className={styles['add-playlist']}>
                        <Link to="/">Playlist</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='slider-video'></div>
        </div>
      </div>
    </div>
  )
}

export default HomePage

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
            <div className="movie-single-inner">
              <div className={styles["movie-slider"]}>
                <div className={classNames(styles["wrapper-infor-movie"], "container")}>
                  <div className={styles["single-feature-movie"]}>
                  <Link to="" >
                      <h3 className={styles["movie-title"]}>
                      Fantastic Beasts and Where to Find Them
                      </h3>
                    </Link>
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

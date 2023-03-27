/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './HomePage.module.scss'
import classNames from 'classnames'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper'

import 'swiper/css'
export interface HomePageProps {}

export interface HomePageDataType {}

const HomePage: React.FC<HomePageProps> = (props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  return (
    <div className='root'>
      <div className={styles['page-content']}>
        <Swiper
          // spaceBetween={50}
          slidesPerView={1}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className='mySwiper2'
        >
          <SwiperSlide>
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
                          <div className={styles['action-add-playlist']}>
                            <Link to='/'>+ Playlist</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='slider-video'></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
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
                          <div className={styles['action-add-playlist']}>
                            <Link to='/'>+ Playlist</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='slider-video'></div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={classNames(styles['trending-movie'])}>
        <div className='container'>
          <div className='wrapper-trending'>
            <div className={classNames(styles['heading-trending'])}>
              <h2 className={styles['trending-title']}>Treding</h2>
              <ul className={classNames(styles['nav'], styles['nav-tabs'])}>
                <li>Today</li>
                <li>This week</li>
                <li>This month</li>
                <li>Last 3 month</li>
              </ul>
            </div>

            <div className='trending-block row'>
              <div className="col-5">
                <img className="w-100" src="https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/46-point-of-view.jpg" alt="" />
              </div>
              <div className="col-7 row">
                <div className="col-4"><img className='w-100' src="https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/46-point-of-view.jpg" alt="" /></div>
                <div className="col-4"><img className='w-100' src="https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/46-point-of-view.jpg" alt="" /></div>
                <div className="col-4"><img className='w-100' src="https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/46-point-of-view.jpg" alt="" /></div>
                <div className="col-4"><img className='w-100' src="https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/46-point-of-view.jpg" alt="" /></div>
                <div className="col-4"><img className='w-100' src="https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/46-point-of-view.jpg" alt="" /></div>
                <div className="col-4"><img className='w-100' src="https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/46-point-of-view.jpg" alt="" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage

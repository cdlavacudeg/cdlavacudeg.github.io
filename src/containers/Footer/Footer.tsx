import React from 'react'
import { AppWrap, MotionWrap } from '../../wrapper'
import { images } from '../../constants'
import './Footer.scss'
const Footer: React.FC = () => {
  return (
    <div id='contact' className='app__footer app__flex'>
      <h2 className='head-text'>Take a coffe & chat with me</h2>
      <div className='app__footer-cards'>
        <div className='app__footer-card '>
          <img src={images.email} alt='email' />
          <a href='mailto:cristianlav10@gmail.com' className='p-text'>
            cristianlav10@gmail.com
          </a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt='phone' />
          <a href='tel:+57 3138630136' className='p-text'>
            +57 3138630136
          </a>
        </div>
      </div>
    </div>
  )
}

export default AppWrap(MotionWrap(Footer), 'contact', 'app__primaribg')

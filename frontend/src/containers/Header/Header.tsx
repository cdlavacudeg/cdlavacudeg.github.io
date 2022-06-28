import React from 'react'
import { motion } from 'framer-motion'
import { images } from '../../constants'
import './Header.tsx'

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
}

const skillsBubles = [images.typescript, images.api, images.node]

export const Header: React.FC = () => {
  return (
    <div className='app_header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className='p-text'>Hello, I am</p>
              <h1 className='head-text'>Cristian</h1>
            </div>
          </div>
        </div>

        <div className='tag-cmp app__flex'>
          <p className='p-text'>Engineer</p>
          <p className='p-text'>Web Developer</p>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__header-img'
      >
        <img src={images.avatar} alt='profile_bg' />

        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt='profile_circle'
          className='overlay_circle'
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >
        {skillsBubles.map((circle, index) => {
          return (
            <div className='circle-cmp app__flex' key={index}>
              <img src={circle} alt='skill-circle' />
            </div>
          )
        })}
      </motion.div>
    </div>
  )
}

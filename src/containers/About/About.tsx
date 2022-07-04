import React from 'react'
import { motion } from 'framer-motion'
import { images } from '../../constants'
import './About.scss'
import { AppWrap, MotionWrap } from '../../wrapper'

const About: React.FC = () => {
  interface AboutItem {
    title: string
    description: string
    imgUrl: string
  }
  const abouts: AboutItem[] = [
    {
      title: 'Frontend Web Developer',
      description:
        'Client-side development of custom, responsive and modern websites using React, Sass and Redux',
      imgUrl: images.about02,
    },
    {
      title: 'Backend Web Developer',
      description: 'Server-side development of REST API using nodejs, passport, jwt, mongodb.',
      imgUrl: images.aboutBack,
    },
    {
      title: 'Python Developer',
      description: 'Development of web applications in Django and Dash',
      imgUrl: images.aboutPython,
    },
    {
      title: 'Engineer',
      description:
        'As an engineer I developed skills in problem solving, autonomous learning and \
      interdisciplinary work.',
      imgUrl: images.aboutEngi,
    },
  ]

  return (
    <div id='about' className='app__about app__flex'>
      <h2 className='head-text'>
        Quality means doing it <span>right</span>
        <br />
        when no one is <span>Looking</span> - Henry Ford
      </h2>

      <div className='app__profiles'>
        {abouts.map((about, index) => {
          return (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: 'tween' }}
              className='app__profile-item'
              key={index}
            >
              <img src={about.imgUrl} alt={about.title} />
              <h2 className='bold-text' style={{ marginTop: '20px' }}>
                {about.title}
              </h2>
              <h2 className='p-text' style={{ marginTop: '10px' }}>
                {about.description}
              </h2>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default AppWrap(MotionWrap(About), 'about', 'app__whitebg')

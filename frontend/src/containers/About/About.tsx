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
    { title: 'Web Development', description: 'Iam a Web developer', imgUrl: images.about01 },
    { title: 'Backend Development', description: 'Iam a Web developer', imgUrl: images.about02 },
    { title: 'Python Development', description: 'Iam a Web developer', imgUrl: images.about03 },
    { title: 'Node Development', description: 'Iam a Web developer', imgUrl: images.about04 },
  ]

  return (
    <div id='about' className='app__about app__flex'>
      <h2 className='head-text'>
        I Know That <span>Good Development</span>
        <br />
        means <span>Good Business</span>
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

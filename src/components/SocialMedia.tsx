import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

export const SocialMedia: React.FC = () => {
  return (
    <div className='app__social'>
      <a href='https://www.linkedin.com/in/cdlavacudeg/' target='_blank' rel='noopener noreferrer'>
        <BsLinkedin />
      </a>
      <a href='https://github.com/cdlavacudeg' target='_blank' rel='noopener noreferrer'>
        <BsGithub />
      </a>
    </div>
  )
}

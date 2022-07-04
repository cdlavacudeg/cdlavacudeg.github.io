import React, { useState } from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'

import './Navbar.scss'

export const Navbar: React.FC = () => {
  const navbarList: string[] = ['home', 'about', 'work', 'skills', 'contact']
  const [toggle, setToggle] = useState<boolean>(false)

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>&lt; cdlavacudeg / &gt;</div>
      <ul className='app__navbar-links'>
        {navbarList.map((item, index) => {
          return (
            <li className='app__flex p-text' key={index}>
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          )
        })}
      </ul>
      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [100, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {navbarList.map((item, index) => (
                <li key={index}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

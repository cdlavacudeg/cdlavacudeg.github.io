import React from 'react'
import './Navbar.scss'

export const Navbar: React.FC = () => {
  const navbarList = ['Home', 'About', 'Work', 'Skills', 'Contact']
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
    </nav>
  )
}

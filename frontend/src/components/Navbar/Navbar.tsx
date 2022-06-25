import React from 'react'
import './Navbar.scss'

export const Navbar: React.FC = () => {
  return (
    <nav>
      <div className='nav-logo' id='navlogo'>
        &lt; cdlavacudeg / &gt;
      </div>
      <div className='nav-menu' id='navMenu'>
        <button className='nav-toggle'>
          <i className='fa fa-bars'></i>
        </button>
        <ul className='nav--list'>
          <li>
            {' '}
            <a href='#home'>Home</a>
          </li>
          <li>
            {' '}
            <a href='#services'>My Services</a>
          </li>
          <li>
            {' '}
            <a href='#about'>About me</a>
          </li>
          <li>
            {' '}
            <a href='#work'>My Work</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

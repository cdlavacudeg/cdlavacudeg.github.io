import React from 'react'
import { NavigationDots, SocialMedia } from '../components/'

// HOC -> Higher order component
export const AppWrap = (Component: React.FC, idName: string, classNames: string | null = '') =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className='app__wrapper app__flex'>
          <Component />
          <div className='copyright'>
            <p className='p-text'>@2020 cdlavacudeg</p>
            <p className='p-text'>All rights reserved</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    )
  }

import React from 'react'
interface Props {
  active: string
}

export const NavigationDots: React.FC<Props> = ({ active }) => {
  const navbarList: string[] = ['home', 'about', 'work', 'skills', 'contact']
  return (
    <div className='app__navigation'>
      {navbarList.map((item, index) => {
        return (
          <a
            href={`#${item}`}
            key={index}
            className='app__navigation-dot'
            style={active == item ? { background: '#313BAC' } : {}}
          />
        )
      })}
    </div>
  )
}

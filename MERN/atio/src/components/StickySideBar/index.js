import React from 'react'

import { Link } from 'react-scroll'
import { SidebarData } from './StickySideBar'
import './StickySideBar.css'
import { IconContext } from 'react-icons'

function StickySideBar() {
  return (
    <>
      <IconContext.Provider value={{ color: 'white' }}>
        <nav className='nav-menu '>
          <ul className='nav-menu-items'>
            {SidebarData.map((item, index) => {
              console.log(item.path)
              return (
                <li key={index} className={item.cName}>
                  <Link
                    to={item.path}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                  >
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  )
}

export default StickySideBar

import React, { useState } from 'react'
import './Navbar.css'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { NavLink } from './Navbar'

const Navbar = () => {
  const [show, setShow] = useState(true)

  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-white text-property'>
        <div className='container active'>
          <NavLink to='/'>Yutong Zhang</NavLink>
          <button
            className='navbar-toggler border border-info text-info'
            onClick={() => {
              setShow(!show)
            }}
          >
            {show ? <MenuIcon /> : <CloseIcon />}
          </button>
          <div
            className={
              show
                ? 'collapse navbar-collapse'
                : 'collapse navbar-collapse active'
            }
          >
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item'>
                <NavLink exact={true} to='/'>
                  Work
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/about'>About</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/resume'>Resume</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar

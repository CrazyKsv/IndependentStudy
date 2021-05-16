import React, { useState } from 'react'
import './Navbar.css'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'

const Navbar = () => {
  const [show, setShow] = useState(true)

  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-white text-property'>
        <div className='container active'>
          <a className='navbar-brand' href='/'>
            Yutong Zhang
          </a>
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
                <a className='nav-link' href='/'>
                  Work
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='./about'>
                  About
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='./resume'>
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar

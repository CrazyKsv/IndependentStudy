import React from 'react'
import { Nav, NavLink, Bars, NavMenu } from './Navbar'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>YuTong Zhang</NavLink>

        <NavMenu>
          <NavLink to='/'>Work</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/resume'>Resume</NavLink>
        </NavMenu>
        <Bars />
      </Nav>
    </>
  )
}

export default Navbar

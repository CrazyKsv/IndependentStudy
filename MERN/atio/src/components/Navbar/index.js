import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
  ALinks,
} from './NavbarElements'

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <>
      <IconContext.Provider value={{ color: '#000' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo onClick={toggleHome} to='/'>
              Yutong Zhang
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks onClick={toggleHome} to='/' exact={true}>
                  Work
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks onClick={toggleHome} to='/about'>
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <ALinks
                  href='https://drive.google.com/file/d/1GXndEZz-2bvaiFEy0b5M6kO8bc4TE5rp/view'
                  target='_blank'
                >
                  Resume
                </ALinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar

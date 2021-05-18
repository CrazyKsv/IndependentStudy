import React from 'react'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to='/'
            onClick={toggle}
            smooth='true'
            duration={500}
            spy='true'
            exact={true}
            offset={-80}
          >
            Work
          </SidebarLink>
          <SidebarLink
            to='./about'
            onClick={toggle}
            smooth='true'
            duration={500}
            spy='true'
            exact={true}
            offset={-80}
          >
            About
          </SidebarLink>
          <SidebarLink
            to='./resume'
            onClick={toggle}
            smooth='true'
            duration={500}
            spy='true'
            exact={true}
            offset={-80}
          >
            Resume
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar

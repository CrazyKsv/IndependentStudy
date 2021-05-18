import React from 'react'

import { animateScroll as scroll } from 'react-scroll'
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
} from './Footer'

import ImageBubble from '../../images/bubbleTea.svg'

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop()
  }
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              Made with
              <img src={ImageBubble} alt='logo' />
              by Yutong
            </SocialLogo>

            <SocialIcons>
              <SocialIconLink
                href='https://www.linkedin.com/in/yzhang0530/'
                target='_blank'
                aria-label='LinkedIn'
              >
                LinkedIn
              </SocialIconLink>
              <SocialIconLink
                href='mailto:yutongz@cca.edu'
                target='_blank'
                aria-label='Email'
              >
                Email
              </SocialIconLink>
              <SocialIconLink
                href='https://medium.com/@erldyb'
                target='_blank'
                aria-label='Medium'
              >
                Medium
              </SocialIconLink>
              <SocialIconLink
                target='_blank'
                aria-label='Youtube'
                href='https://www.youtube.com/watch?v=SIWbjgPYcJY'
              >
                I feel lucky
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer

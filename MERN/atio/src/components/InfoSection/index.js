import React from 'react'

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  Heading,
  Subtitle,
  SubDesWrap,
  ImgWorld,
  Img,
  WorkFooter,
} from './InfoElements'

import ImageBubble from '../../images/bubbleTea.svg'
import ImageWorldMap from '../../images/worldMap.svg'

const InfoSection = ({
  lightBg,
  imgStart,
  footerDescription,
  lightText,
  headline,
  description,
  subdescription,
  id,
  primary,
  darkText,
}) => {
  console.log(primary)
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <Heading lightText={lightText}>
                  {headline}
                  <Img src={ImageBubble} alt='log' />
                </Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <SubDesWrap>{subdescription}</SubDesWrap>
              </TextWrapper>
              <WorkFooter lightText={lightText}>
                {footerDescription}
                <ImgWorld src={ImageWorldMap} alt='log' />
              </WorkFooter>
            </Column1>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection

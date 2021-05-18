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
  ImgSmall,
  ImgWrap,
  WorkFooter,
  WorkWrapper,
  WorkRow,
  SpecialImgWrap,
  InnerImg,
} from './InfoElements'

import ImageBubble from '../../images/bubbleTea.svg'
import ImageWorldMap from '../../images/worldMap.svg'
import ImageFaceBook from '../../images/facebook.svg'
import ImageArchive from '../../images/archive.svg'
import ImageMS1 from '../../images/ms1.svg'
import ImageMS from '../../images/ms.svg'
import ImageMS2 from '../../images/ms2.svg'

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
                  <ImgSmall src={ImageBubble} alt='log' />
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

        {/* Work details */}
        <WorkWrapper>
          <WorkRow imgStart={true}>
            <Column2>
              <ImgWrap>
                <Img src={ImageFaceBook} alt='fb' />
              </ImgWrap>
            </Column2>
            <Column1>test</Column1>
          </WorkRow>

          <WorkRow imgStart={true}>
            <Column2>
              <SpecialImgWrap>
                <InnerImg src={ImageMS} alt='ms' />
                <InnerImg src={ImageMS1} alt='ms' />
              </SpecialImgWrap>
            </Column2>
            <Column1>sdfs</Column1>
          </WorkRow>

          <WorkRow imgStart={true}>
            <Column2>
              <SpecialImgWrap>
                <InnerImg src={ImageMS} alt='ms-sec' />
                <InnerImg src={ImageMS2} alt='ms' />
              </SpecialImgWrap>
            </Column2>
            <Column1>test</Column1>
          </WorkRow>

          <WorkRow imgStart={true}>
            <Column2>
              <ImgWrap>
                <Img src={ImageArchive} alt='archive' />
              </ImgWrap>
            </Column2>
            <Column1>test</Column1>
          </WorkRow>
        </WorkWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection

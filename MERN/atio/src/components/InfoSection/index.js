import React from 'react'

import LinkIcon from '@material-ui/icons/Link'
import { animateScroll as scroll } from 'react-scroll'
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
  JobPos,
  JobTag,
  JobDes,
  JobCom,
  ImgWork,
  JobRes,
  DirectProject,
} from './InfoElements'

import ImageBubble from '../../images/bubbleTea.svg'
import ImageWorldMap from '../../images/worldMap.svg'
import ImageFaceBook from '../../images/facebook.svg'
import ImageArchive from '../../images/archive.svg'
import ImageMS1 from '../../images/ms1.svg'
import ImageMS from '../../images/ms.svg'
import ImageMS2 from '../../images/ms2.svg'
import ImageGoggles from '../../images/Goggles.svg'
import ImageScience from '../../images/science.svg'
import ImageCard from '../../images/card.svg'
import ImageArm from '../../images/arm.svg'

const InfoSection = ({
  lightBg,
  imgStart,
  footerDescription,
  lightText,
  headline,
  description,
  subdescription,
  id,

  darkText,
}) => {
  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <Heading>
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
            <Column1>
              <TextWrapper>
                <JobPos>
                  <JobTag>Internship</JobTag>
                  <JobTag>AR Product Design</JobTag>
                </JobPos>

                <JobDes>
                  <JobCom>
                    Facebook reality lab
                    <ImgWork src={ImageGoggles} alt='goggles' />
                  </JobCom>
                  <JobRes>
                    Designing for augmented reality experience (NDA)
                  </JobRes>
                  <div
                    style={{
                      fontSize: '16px',
                      marginTop: '100px',
                    }}
                  >
                    View Summer Internship 2021
                  </div>
                </JobDes>
              </TextWrapper>
            </Column1>
          </WorkRow>

          <WorkRow imgStart={true}>
            <Column2>
              <SpecialImgWrap>
                <InnerImg src={ImageMS} alt='ms' />
                <InnerImg src={ImageMS1} alt='ms' />
              </SpecialImgWrap>
            </Column2>
            <Column1>
              <TextWrapper>
                <JobPos>
                  <JobTag>Internship</JobTag>
                  <JobTag>Sole UX Designer</JobTag>
                </JobPos>

                <JobDes>
                  <JobCom>
                    Microsoft garage
                    <ImgWork src={ImageScience} alt='science' />
                  </JobCom>
                  <JobRes>
                    Adding extendability to the Microsoft Teams app (NDA)
                  </JobRes>
                  <div
                    style={{
                      fontSize: '16px',
                      marginTop: '100px',
                    }}
                  >
                    View Summer Internship 2020
                  </div>
                </JobDes>
              </TextWrapper>
            </Column1>
          </WorkRow>

          <WorkRow imgStart={true}>
            <Column2>
              <SpecialImgWrap>
                <InnerImg src={ImageMS} alt='ms-sec' />
                <InnerImg src={ImageMS2} alt='ms' />
              </SpecialImgWrap>
            </Column2>
            <Column1>
              <TextWrapper>
                <JobPos>
                  <JobTag>Internship</JobTag>
                  <JobTag>UX Designer</JobTag>
                </JobPos>

                <JobDes>
                  <JobCom>
                    <DirectProject to='/studio' onClick={toggleHome}>
                      Microsoft studio 8
                    </DirectProject>
                    <ImgWork src={ImageArm} alt='arm' />
                  </JobCom>
                  <JobRes>
                    Exploring how might we empower people with Xiaoice AI
                  </JobRes>
                  <div
                    style={{
                      fontSize: '16px',
                      marginTop: '100px',
                    }}
                  >
                    View 6-month Internship 2019
                  </div>
                </JobDes>
              </TextWrapper>
            </Column1>
          </WorkRow>

          <WorkRow imgStart={true}>
            <Column2>
              <ImgWrap>
                <Img src={ImageArchive} alt='archive' />
              </ImgWrap>
            </Column2>
            <Column1>
              <TextWrapper>
                <JobPos>
                  <JobTag>Side Projects</JobTag>
                  <JobTag>Cool Stuff</JobTag>
                </JobPos>

                <JobDes>
                  <JobCom>
                    Archive
                    <ImgWork src={ImageCard} alt='archive' />
                  </JobCom>
                  <JobRes>
                    Collection of previous school projects, side projects, and
                    activities
                  </JobRes>
                  <div
                    style={{
                      fontSize: '16px',
                      marginTop: '100px',
                    }}
                  >
                    View project
                  </div>
                </JobDes>
              </TextWrapper>
            </Column1>
          </WorkRow>
        </WorkWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection

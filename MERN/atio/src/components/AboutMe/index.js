import React from 'react'

import {
  InfoContainer,
  InfoWrapper,
  JobCom,
  Column1,
  Column2,
  TextWrapper,
  Img,
  ImgWrap,
  WorkWrapper,
  WorkRow,
  ImageMessage,
  JobTag,
  JobDes,
  IntroUl,
  IntroLi,
  TinyWin,
} from './aboutMe'

import ImageSelfie from '../../images/selfie.svg'
import ImageStar from '../../images/star.svg'
import ImageOtter from '../../images/otter.svg'
import ImageSparkles from '../../images/sparkles.svg'

const InfoSection = ({ lightBg, id }) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper />
        <WorkWrapper>
          <WorkRow imgStart={true}>
            <Column2>
              <ImgWrap>
                <Img src={ImageSelfie} alt='selfie' />
              </ImgWrap>
            </Column2>
            <Column1>
              <TextWrapper>
                <JobDes>
                  <JobTag>In short, I am a developer-turned ux designer</JobTag>
                </JobDes>

                <JobDes>
                  <IntroUl>
                    <IntroLi>born & raised @china_shenzhen</IntroLi>
                    <IntroLi>math, computer science @uc_sandiego</IntroLi>
                    <IntroLi>interaction design @cca</IntroLi>
                  </IntroUl>
                </JobDes>

                <ImageMessage>
                  <JobCom>
                    <Img
                      style={{
                        width: '24px',
                        marginRight: '8px',
                      }}
                      src={ImageStar}
                      alt='star'
                    />
                    <p>inclusive design</p>
                  </JobCom>
                  <JobCom>
                    <Img
                      style={{
                        width: '24px',
                        marginRight: '8px',
                      }}
                      src={ImageOtter}
                      alt='otter'
                    />
                    <p>infp</p>
                  </JobCom>
                </ImageMessage>
              </TextWrapper>
            </Column1>
          </WorkRow>
          {/* <JobDes
            style={{
              marginTop: '100px',
            }}
          >
            <JobCom>
              <JobTag
                style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                }}
              >
                tiny wins
              </JobTag>
              <Img
                style={{
                  width: '36px',
                  marginLeft: '5px',
                }}
                src={ImageSparkles}
                alt='sparkles'
              />
            </JobCom>
            <JobCom>
              <JobTag>
                Figma workshop host{' '}
                <span style={{ fontWeight: 'bold' }}>@Merge_hackathon</span>
              </JobTag>
            </JobCom>
            <JobCom>
              <JobTag>
                Illustrator for a guest speaker{' '}
                <span style={{ fontWeight: 'bold' }}>@Tsinghua_AeX</span>
              </JobTag>
            </JobCom>
          </JobDes> */}
        </WorkWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection

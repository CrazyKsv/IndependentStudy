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
  GoTo,
  InstagramDiv,
} from './aboutMe'

import ImageSelfie from '../../images/selfie.png'
import ImageStar from '../../images/star.svg'
import ImageOtter from '../../images/otter.svg'
import ImageSparkles from '../../images/sparkles.svg'
import ImagePen from '../../images/pen.svg'
import ImageLedger from '../../images/ledger.svg'
import ImageCactus from '../../images/Cactus.svg'
import ImageIns from '../../images/ins.svg'

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
          <JobDes
            style={{
              marginTop: '100px',
            }}
          >
            <JobCom
              style={{
                marginBottom: '15px',
              }}
            >
              <JobTag
                style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  paddingTop: '10px',
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
            <JobCom
              style={{
                marginBottom: '15px',
              }}
            >
              <JobTag>
                Figma workshop host{' '}
                <span style={{ fontWeight: 'bold' }}>@Merge_hackathon</span>
              </JobTag>
            </JobCom>
            <JobCom
              style={{
                marginBottom: '15px',
              }}
            >
              <JobTag>
                Illustrator for a guest speaker{' '}
                <span style={{ fontWeight: 'bold' }}>@Tsinghua_AeX</span>
              </JobTag>
            </JobCom>
          </JobDes>

          <JobDes
            style={{
              marginTop: '100px',
              width: '418px',
            }}
          >
            <JobCom
              style={{
                marginBottom: '12px',
              }}
            >
              <JobTag
                style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  paddingTop: '10px',
                }}
              >
                blogs
              </JobTag>
              <Img
                style={{
                  width: '36px',
                  marginLeft: '5px',
                }}
                src={ImagePen}
                alt='pen'
              />
            </JobCom>
            <JobCom>
              <GoTo href='https://uxdesign.cc/how-to-host-a-figma-workshop-for-non-designers-da61250a236e?gi=c870b2f76962'>
                How to host a Figma workshop for non-designers?
              </GoTo>
            </JobCom>
            <JobCom
              style={{
                marginBottom: '15px',
              }}
            >
              <JobTag style={{}}>
                My experience hosting a Figma workshop for project managers and
                engineers.
              </JobTag>
            </JobCom>
            <JobCom
              style={{
                marginBottom: '15px',
              }}
            >
              <GoTo href='https://uxdesign.cc/what-i-learned-from-my-design-interviews-2a61212bf8a7'>
                My answers in design interviews that got me job offers
              </GoTo>
            </JobCom>

            <JobCom>
              <GoTo href='https://blog.prototypr.io/inspirations-for-ux-process-book-77b13da3302c'>
                Inspirations for UX Process Book
              </GoTo>
            </JobCom>

            <JobCom
              style={{
                marginBottom: '15px',
                width: '418px',
              }}
            >
              <JobTag style={{}}>
                A few curated examples that I enjoyed reading about.
              </JobTag>
            </JobCom>
          </JobDes>

          <JobDes
            style={{
              marginTop: '100px',
              width: '418px',
            }}
          >
            <JobCom
              style={{
                marginBottom: '12px',
              }}
            >
              <JobTag
                style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  paddingTop: '10px',
                }}
              >
                readings
              </JobTag>
              <Img
                style={{
                  width: '36px',
                  marginLeft: '5px',
                }}
                src={ImageLedger}
                alt='ledger'
              />
            </JobCom>
            <JobCom>
              <JobTag style={{ fontWeight: 'bold' }}>
                The courage to be disliked
              </JobTag>
            </JobCom>
            <JobCom
              style={{
                marginBottom: '15px',
              }}
            >
              <JobTag>Ichiro Kishimi & Fumitake Koga</JobTag>
            </JobCom>
            <JobCom>
              <JobTag style={{ fontWeight: 'bold' }}>Grapefruit</JobTag>
            </JobCom>

            <JobCom
              style={{
                marginBottom: '15px',
              }}
            >
              <JobTag>Yoko Ono</JobTag>
            </JobCom>

            <JobCom>
              <JobTag style={{ fontWeight: 'bold' }}>
                Articulating Design Decisions
              </JobTag>
            </JobCom>

            <JobCom
              style={{
                marginBottom: '15px',
              }}
            >
              <JobTag>Tom Greever</JobTag>
            </JobCom>
          </JobDes>

          <JobDes
            style={{
              marginTop: '100px',
              width: '418px',
            }}
          >
            <JobCom
              style={{
                marginBottom: '12px',
              }}
            >
              <JobTag
                style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  paddingTop: '10px',
                }}
              >
                moments
              </JobTag>
              <Img
                style={{
                  width: '36px',
                  marginLeft: '5px',
                }}
                src={ImageCactus}
                alt='cactus'
              />
            </JobCom>
            <JobCom>
              <JobTag style={{ fontWeight: 'bold' }}>
                Shenzhen -&gt; San Diego -&gt; Tokyo -&gt; San Francisco -&gt; ?
              </JobTag>
            </JobCom>
          </JobDes>
          <InstagramDiv>
            <Img src={ImageIns} alt='selfie' />
          </InstagramDiv>
        </WorkWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection

import React, { useState } from 'react'
import Modal from './Modal'

import {
  InfoContainer,
  InfoWrapper,
  ImgWrap,
  Img,
  JobDes,
  JobCom,
  JobWrapper,
  JobRes,
  JobTag,
  FrameWrapper,
  IntroUl,
  IntroLi,
  ImageFrame,
} from './ProjectStudio'

import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Grid from '@material-ui/core/Grid'

import ImageGroup from '../../images/group.png'
import ImageArm from '../../images/arm.svg'
import ImageBox from '../../images/studiobox.png'
import ImageChick from '../../images/chick.png'
import ImageRadio from '../../images/Radio.png'
import ImageLarge from '../../images/longpress.png'
import ImageDiscuss from '../../images/discuss.png'
import ImageComment from '../../images/comment.png'
import ImageTakeAway from '../../images/takeaway.png'
import ImageMoment from '../../images/moment.png'
import Image1Large from '../../images/group/1large.png'
import Image1 from '../../images/group/1.png'
import Image2 from '../../images/group/2.png'
import Image3 from '../../images/group/3.png'
import Image4 from '../../images/group/4.png'

const FontImage = () => {
  return (
    <>
      <InfoWrapper>
        <ImgWrap>
          <Img src={ImageGroup} alt='group' />
        </ImgWrap>
      </InfoWrapper>
    </>
  )
}

const TeamRole = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <ListItem
            style={{
              fontSize: '14px',
              paddingLeft: '0',
              width: '153px',
              justifyContent: 'space-between',
            }}
          >
            <ListItemText primary='team' secondary='Xiaoice' />
          </ListItem>
        </Grid>

        <Grid item xs={3}>
          <ListItem
            style={{
              fontSize: '14px',
              paddingLeft: '0',
              width: '90px',
              justifyContent: 'space-between',
            }}
          >
            <ListItemText primary='mentors' secondary='Li Qiao Shu Zhang' />
          </ListItem>
        </Grid>
        <Grid item xs={9}>
          <ListItem
            style={{
              fontSize: '14px',
              paddingLeft: '0',
              width: '153px',
              justifyContent: 'space-between',
            }}
          >
            <ListItemText
              primary='tools'
              secondary='Sketch, Trello, Adobe Suite, Post-its'
            />
          </ListItem>
        </Grid>
        <Grid item xs={3}>
          <ListItem
            style={{
              fontSize: '14px',
              paddingLeft: '0',
              width: '120px',
              justifyContent: 'space-between',
            }}
          >
            <ListItemText
              primary='duration'
              secondary='Jan - Jun 2019 5 months'
            />
          </ListItem>
        </Grid>
      </Grid>
    </>
  )
}

const TeamInfo = () => {
  return (
    <>
      <InfoWrapper>
        <JobWrapper>
          <JobDes style={{ justifyContent: 'start' }}>
            <JobCom>
              Microsoft studio 8
              <Img
                src={ImageArm}
                alt='arm'
                style={{
                  width: '36px',
                }}
              />
            </JobCom>
          </JobDes>
          <TeamRole />
        </JobWrapper>
      </InfoWrapper>
    </>
  )
}

const Brief = () => {
  const briefIntro1 = `
    Xiaoice is the AI system developed by Microsoft STCA in 2014 based on emotional computing framework. Through the comprehensive application of algorithms, cloud computing and big data, Xiaoice adopts emotional intelligence. `
  const briefIntro2 = `
    I worked on multiple projects during my 5-month internship. Unfortunately, due to NDA I am unable to present all of my work. If you would like to know more, please send me an email!
    `
  return (
    <>
      <InfoWrapper id='brief'>
        <JobWrapper>
          <JobDes
            style={{
              justifyContent: 'start',
              fontSize: '24px',
              width: '520px',
            }}
          >
            <JobCom>
              Brief
              <Img
                src={ImageBox}
                alt='box'
                style={{
                  width: '32px',
                }}
              />
            </JobCom>
            <JobRes>{briefIntro1}</JobRes>
            <JobRes>{briefIntro2}</JobRes>
          </JobDes>
        </JobWrapper>
      </InfoWrapper>
    </>
  )
}

const MyRole = () => {
  const msg1 = `The goal was to improve listening time as well as user retention rate. I designed and shipped onboarding process, night theme and comment board for Xiaoice Radio Mini App.`
  const msg2 = `We needed to add in new features and adopt latest design guidelines for previous landing page. I conducted competitor analysis, generated moodboard and hosted group brainstorming section. Then we delivered several proposal and refined them into final state as a team. The final version has not released yet.`

  const msg3 = `I designed and shipped mini app that applied Xiaoice AI technology. The mini app has not released yet, I am not able to share much information at this time.`

  const msg4 = `Other than UX design, I worked on html page design, illustration and banner page related to Xiaoice. I also participated AI School Logo design and Microsoft Inclusion Conference Swags Design.`
  return (
    <>
      <InfoWrapper id='myRole'>
        <JobWrapper>
          <JobDes
            style={{
              justifyContent: 'start',
              fontSize: '24px',
              width: '520px',
            }}
          >
            <JobCom>
              My Role
              <Img
                src={ImageChick}
                alt='chick'
                style={{
                  width: '32px',
                }}
              />
            </JobCom>
            <JobCom>
              <JobTag
                style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                }}
              >
                Designed & shipped features for Xiaoice Radio Mini App
              </JobTag>
            </JobCom>
            <JobRes>{msg1}</JobRes>

            <JobCom>
              <JobTag
                style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                }}
              >
                Redesigned landing page for Xiaoice to-business Platform
              </JobTag>
            </JobCom>
            <JobRes>{msg2}</JobRes>

            <JobCom>
              <JobTag
                style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                }}
              >
                Designed & Shipped AI Radio Mini App from scratch
              </JobTag>
            </JobCom>
            <JobRes>{msg3}</JobRes>

            <JobCom>
              <JobTag
                style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                }}
              >
                Others
              </JobTag>
            </JobCom>
            <JobRes>{msg4}</JobRes>
          </JobDes>
        </JobWrapper>
      </InfoWrapper>
    </>
  )
}

const Radio = () => {
  const msg1 = `Xiaoice Radio is a radio mini-app based on WeChat. People can interact with radio host Xiaoice by inputting voice message. We use this mini-app to explore how might we empower people via Xiaoice AI technologies.`
  const msg2 = `As to increase listening time as well as get to know user preference better, we launched a small feature to get data. Based on previous data, our users tended to listen to Xiaoice Radio during night time. Therefore the pilot feature we shipped can only be accessed after 10:30 p.m.`
  const msg3 = `We kept the feature for one week and applied A/B testing. We got 50.1 seconds increase in overall listening time. Most of the users chose the theme that helped with sleeping. This short-term experiment gave us meaningful data for next steps.`

  return (
    <>
      <InfoWrapper id='xiaoice'>
        <JobWrapper>
          <JobDes
            style={{
              justifyContent: 'start',
              fontSize: '24px',
              width: '520px',
            }}
          >
            <JobCom>
              Radio
              <Img
                src={ImageRadio}
                alt='radio'
                style={{
                  width: '32px',
                }}
              />
            </JobCom>
            <JobRes>{msg1}</JobRes>
            <JobCom>
              <JobTag
                style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                }}
              >
                Night Theme Exploration
              </JobTag>
            </JobCom>
            <JobRes>{msg2}</JobRes>
            <JobRes />
            <JobRes>{msg3}</JobRes>
          </JobDes>
        </JobWrapper>
      </InfoWrapper>
    </>
  )
}

const LargeImage = ({ image, underMsg }) => {
  const [openPopup, setOpenPopup] = useState(false)

  return (
    <>
      <InfoWrapper>
        <FrameWrapper>
          <ImgWrap>
            {openPopup ? (
              <Modal
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
                title='Large Image'
              >
                <Img src={image} alt='enlarge' />
              </Modal>
            ) : (
              <Img
                src={image}
                alt='large'
                onClick={() => setOpenPopup(!openPopup)}
              />
            )}
          </ImgWrap>
        </FrameWrapper>
      </InfoWrapper>
      <InfoWrapper>
        <JobTag style={{ fontSize: '14px' }}>{underMsg}</JobTag>
      </InfoWrapper>
    </>
  )
}

const Onboarding = () => {
  const msg1 = `We need to increase overall listening time as well user retention rate. There are plenty of potential solutions to achieve that. We choose to design an onboarding process due to our special goals behind.`
  const msg2 = `The first question asked about users' favorite music genres while the second one asked about music genres that they didn't like about. Users were allowed to choose three of them. The last question asked about what would they like to listen to right now and offered six different listen scenarios. It was time sensitive so that we were able to push shows that fitted users' needs better. I used conversational UI during the process as to increase user involvement.`

  const msg3 = `We achieved 64.6% increase in listening time while 45.08% increase for next-day user retention rate. About 79% users finished entire onboarding process. We drew the conclusion that this feature achieved the goals and shipped it officially.`

  return (
    <>
      <InfoWrapper>
        <JobWrapper>
          <JobDes
            style={{
              justifyContent: 'start',
              fontSize: '24px',
              width: '520px',
            }}
          >
            <JobCom>
              <JobTag
                style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                }}
              >
                Onboarding Process
              </JobTag>
            </JobCom>
            <JobRes>{msg1}</JobRes>
            <IntroUl>
              <IntroLi>
                Increase listening time for the first show based on users'
                choices
              </IntroLi>
              <IntroLi>
                Let user feel more involved when using the mini app
              </IntroLi>
              <IntroLi>Get to know user preference directly</IntroLi>
              <IntroLi>Gather data for personalization(next step)</IntroLi>
            </IntroUl>

            <JobRes style={{ marginBottom: '15px', marginTop: '5px' }}>
              {msg2}
            </JobRes>

            <JobRes style={{ marginBottom: '15px', marginTop: '5px' }}>
              {msg3}
            </JobRes>
          </JobDes>
        </JobWrapper>
      </InfoWrapper>
    </>
  )
}

const Comment = () => {
  return (
    <>
      <InfoWrapper>
        <JobWrapper>
          <JobDes
            style={{
              justifyContent: 'start',
              fontSize: '24px',
              width: '520px',
            }}
          >
            <JobCom>
              <JobTag
                style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                }}
              >
                Comment section
              </JobTag>
            </JobCom>
            <JobRes>
              We would like to use this section to get user feedback. Also, we
              are able to hold small activities on this section. Based on data
              from popular domestic music apps, we expected only one comment per
              day for this section. However, we are getting more than{' '}
              <span style={{ fontWeight: 'bold' }}>800 comments</span> over two
              weeks.
            </JobRes>
          </JobDes>
        </JobWrapper>
      </InfoWrapper>
    </>
  )
}

const CommentImage = ({ image, underMsg }) => {
  return (
    <>
      <InfoWrapper>
        <FrameWrapper>
          <Img src={image} alt='dis' style={{ height: '590px' }} />
        </FrameWrapper>
      </InfoWrapper>
      <InfoWrapper>
        <JobTag style={{ fontSize: '14px' }}>{underMsg}</JobTag>
      </InfoWrapper>
    </>
  )
}

const TakeAway = () => {
  const msg1 = `Data is always important and guide our design. During my experience back in the college, we were not able to gather enough data to help us make decision. Instead, we used user interview to get qualitative data to complement our user research. We tended to make assumption based on our previous experience or others' advices. Since there was no business goal or data tracking for our work, as students, we were not able to learn much from our design.
`
  const msg2 = `
When I saw the data for user preference, I was surprised. Three most disliked music genres were Rap, Rock and K-Pop. Since there are many shows about these kinds of music in China, it is hard to imagine that our users did not really appreciate them. One thing I learned is that do not make assumptions of our users and always use data to backup my design decisions.`
  const msg3 = `I had chance to attend group brainstorming and design sections where I could learn from the best. I really enjoyed the time working with my team! They were extremely supportive. I was also humbled to host a workshop about different mindsets between developers and designers.`
  return (
    <>
      <InfoWrapper id='takeaways'>
        <JobWrapper>
          <JobDes
            style={{
              justifyContent: 'start',
              fontSize: '24px',
              width: '520px',
            }}
          >
            <JobCom>
              Take aways
              <Img
                src={ImageTakeAway}
                alt='takeAway'
                style={{
                  width: '32px',
                }}
              />
            </JobCom>
            <JobCom>
              <JobTag
                style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                }}
              >
                Data-driven v.s. Data-informed
              </JobTag>
            </JobCom>
            <JobRes>{msg1}</JobRes>
            <JobRes />
            <JobRes>{msg2}</JobRes>

            <JobCom>
              <JobTag
                style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                }}
              >
                Learn & give
              </JobTag>
            </JobCom>
            <JobRes>{msg3}</JobRes>
          </JobDes>
        </JobWrapper>
      </InfoWrapper>
    </>
  )
}

const Moment = () => {
  return (
    <>
      <InfoWrapper id='moments'>
        <JobWrapper>
          <JobDes
            style={{
              justifyContent: 'start',
              fontSize: '24px',
              width: '520px',
            }}
          >
            <JobCom>
              Sparkling Moments
              <Img
                src={ImageMoment}
                alt='moment'
                style={{
                  width: '32px',
                }}
              />
            </JobCom>

            <JobRes>Here are some pictures of my 6-month adventure! :D</JobRes>
            <JobRes />
          </JobDes>
        </JobWrapper>
      </InfoWrapper>
    </>
  )
}

const Gallery = () => {
  return (
    <>
      <InfoWrapper>
        <JobWrapper>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Img src={Image1Large} alt='temp' />
            </Grid>
          </Grid>
          <Grid
            container
            direction='row'
            justify='space-evenly'
            alignItems='center'
            style={{ marginTop: '15px' }}
          >
            <ImageFrame>
              <Img
                src={Image1}
                style={{
                  marginLeft: '0px',
                  paddingTop: '12px',
                }}
              ></Img>
            </ImageFrame>
            <ImageFrame>
              <Img
                src={Image2}
                style={{
                  marginLeft: '0px',
                  paddingTop: '12px',
                }}
              ></Img>
            </ImageFrame>
            <ImageFrame>
              <Img
                src={Image3}
                style={{
                  marginLeft: '0px',
                  paddingTop: '12px',
                }}
              ></Img>
            </ImageFrame>
            <ImageFrame>
              <Img
                src={Image4}
                style={{
                  marginLeft: '0px',
                  paddingTop: '15px',
                }}
              ></Img>
            </ImageFrame>
          </Grid>
        </JobWrapper>
      </InfoWrapper>
    </>
  )
}

const ProjectStudio = () => {
  return (
    <>
      <InfoContainer>
        <FontImage />
        <TeamInfo />
        <Brief />
        <MyRole />
        <Radio />

        <LargeImage
          image={ImageLarge}
          underMsg='(Have-fun State, Sleeping State, Default State)'
        />
        <Onboarding />
        <LargeImage
          image={ImageDiscuss}
          underMsg='(Question 1, Question 2, Question 3)'
        />
        <Comment />
        <CommentImage image={ImageComment} underMsg='(Comment Section)' />
        <TakeAway />
        <Moment />
        <Gallery />
      </InfoContainer>
    </>
  )
}

export default ProjectStudio

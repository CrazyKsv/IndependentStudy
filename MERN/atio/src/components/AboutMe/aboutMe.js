import styled, { keyframes } from 'styled-components'
import { slideInUp } from 'react-animations'

const slideInAnimation = keyframes`${slideInUp}`
export const InfoContainer = styled.div`
  background: white;
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 120px;
`

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? "'col2 col1'" : "'col1 col2'"};
  /* Must use '\' css class \'' */

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`

export const Column2 = styled.div`
  margin-top: 0;
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-left: 30px;
`

export const TopLine = styled.div`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`

export const Heading = styled.h1`
  margin-bottom: 12px;
  font-size: 36px;
  line-height: 44px;
  font-weight: 700;
  vertical-align: middle;
  color: black;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`

export const Subtitle = styled.h2`
  max-width: 500px;
  margin-bottom: 35px;
  font-size: 24px;
  font-weight: 400;
  line-height: 24px;
  color: #212121;
`

export const SubDesWrap = styled.div`
  max-width: 388px;
  height: 60px;
  font-size: 16px;
  font-weight: 100;
  background: #f8f8f8;
  border-radius: 5px;
  padding-top: 8px;
  padding-left: 8px;
`

export const ImgWrap = styled.div`
  width: 250px;
  heigth: 350px;
  height: 100%;
`

export const Img = styled.img`
  width: 100%;

  align-item: center;
`

export const ImgSmall = styled.img`
  width: 42px;
  margin-bottom: 0;
  margin-right: 0;
  margin-left: 5px;
  padding-right: 0;
`

export const WorkFooter = styled.h1`
  max-width: 300px;
  max-height: 22px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  margin-top: 300px;
  color: #212121;
`

export const ImgWorld = styled.img`
  width: 24px;
  margin-bottom: 0;
  margin-right: 0;
  margin-left: 5px;
  padding-right: 0;
`

export const ImgWork = styled.img`
  width: 36px;
  margin-bottom: 0;
  margin-right: 0;
  margin-left: 5px;
  padding-right: 0;
`

export const WorkWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: auto;
  width: 960px;
  margin-right: auto;
  margin-left: auto;
  justify-content: start;
  animation-name: ${slideInAnimation};
  animation-duration: 1s;
  animation-iteration-count: 1;
`

export const WorkRow = styled.div`
  display: grid;
  grid-auto-columns: 1fr 1fr;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? "'col2 col1'" : "'col1 col2'"};
  /* Must use '\' css class \'' */

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`

export const InnerImg = styled.img`
  height: 249px;
  width: 87px;
  left: 100px;
  top: 446px;
  border-radius: 0px;
  margin: 30px;
`

export const JobPos = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: start;
  align-items: center;
`
export const JobTag = styled.p`
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  justify-content: center;
`

export const JobDes = styled.div`
  display: flex;
  flex-direction: column;

  align-items: start;
  margin-top: 20px;
  margin-left: 15px;
`

export const JobCom = styled.div`
  display: flex;
  flex-driection: row;
  font-size: 16px;
  font-weight: 400;
  line-height: 29px;
  margin-top: 8px;
  margin-bottom: 8px:
  letter-spacing: 0em;
`

export const JobRes = styled.div`
  font-size: 20px;
  font-weight: 400;
  line-height: 26px;
  margin-top: 10px;
  color: #424242;
`

export const IntroUl = styled.ul`
  margin-left: 20px;
  font-size: 16px;
  font-color: #424242;
`
export const IntroLi = styled.li`
  margin-bottom: 20px;
  margin-top: 20px;
  padding-left: 20px;
`
export const ImageMessage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: start;
  margin-top: 20px;
  padding-left: 20px;
`

export const TinyWin = styled.div`
  display: flex;
  flex-driection: column;
  margin-top: 50px;
`
export const GoTo = styled.a`
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;

  color: black;
`

export const InstagramDiv = styled.div`
  height: auto;
  width: auto;
  margin-top: 50px;
  border-radius: 0px;
`

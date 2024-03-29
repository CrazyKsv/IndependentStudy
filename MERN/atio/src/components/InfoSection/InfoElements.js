import { Link } from 'react-router-dom'
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
  height: 860px;
  width: 100%;

  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
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
  animation-name: ${slideInAnimation};
  animation-duration: 1s;
  animation-iteration-count: 1;
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
  width: 400px;
  heigth: 300px;
  height: 100%;
`

export const SpecialImgWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
  height: 300px;
  width: 400px;
  left: 0px;
  top: 421px;
  border-radius: 0px;
`

export const Img = styled.img`
  width: 100%;
  margin-bottom: 0;
  margin-right: 0;

  padding-right: 0;
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
  animation-name: ${slideInAnimation};
  animation-duration: 5s;
  animation-iteration-count: 1;
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
`

export const WorkRow = styled.div`
  display: grid;
  grid-auto-columns: 1fr 1fr;
  margin-bottom: 25px;
  animation-name: ${slideInAnimation};
  animation-duration: 1s;
  animation-iteration-count: 1;
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
  flex-direction: row;

  justify-content: start;
  align-items: center;
`
export const JobTag = styled.div`
  height: 40px;
  max-width: 160px;
  background-color: #f8f8f8;
  border-radius: 5px;
  font-size: 16px;
  color: #848484;
  margin-left: 15px;
  padding-top: 8px;
  padding-left: 8px;
  padding-right: 8px;
`

export const JobDes = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: start;
  align-items: start;
  margin-top: 20px;
  margin-left: 15px;
`

export const JobCom = styled.div`
  font-size: 24px;
  margin-top: 20px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0em;
`

export const JobRes = styled.div`
  font-size: 20px;
  font-weight: 400;
  line-height: 26px;
  margin-top: 10px;
  color: #424242;
`

export const DirectProject = styled(Link)`
  width: 36px;
  margin-bottom: 0;
  margin-right: 0;
  margin-left: 5px;
  padding-right: 0;
  text-decoration: none;
`

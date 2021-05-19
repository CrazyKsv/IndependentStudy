import styled from 'styled-components'

export const InfoContainer = styled.div`
  background: white;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`

export const InfoWrapper = styled.div`
  display: flex;
  z-index: 1;
  height: auto;
  width: 100%;
  margin-top: 20px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`

export const ImgWrap = styled.div`
  height: auto;
  width: 864px;
  left: 288px;
  top: 159px;
  border-radius: 0px;
  justify-content: center;
`

export const Img = styled.img`
  width: auto;
  margin-bottom: 0;
  margin-right: 0;
  margin-left: 10px;
  padding-right: 0;
`

export const JobDes = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: start;
  align-items: start;
  margin-top: 20px;
  margin-left: 0;
`

export const JobCom = styled.div`
  font-size: 24px;
  margin-top: 20px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0em;
`
export const JobWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  height: auto;
  width: 620px;
  margin-right: 0;
  margin-left: 0;
  padding: 0 24px;
  justify-content: flex-start;
`

export const FrameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  z-index: 1;
  height: auto;
  width: 100%;
  margin-top: 10px;
  margin-right: 0;
  margin-left: 0;
  padding: 0 24px;
  justify-content: center;
`

export const JobRes = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  margin-top: 10px;
  color: #424242;
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

export const ExitBtn = styled.button`
  border: none;
  background: none;
  position: fixed;
  top: 20px;
  right: 0;
  padding: 20px;
  -webkit-appearance: none;
  cursor: pointer;
  z-index: 10;
`

export const FullScreenImg = styled.div`
  position: inherit;
  top: inherit;
  left: inherit;
  right: inherit;
  bottom: inherit;
`

export const IntroUl = styled.ul`
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 20px;
  font-size: 16px;
  font-color: #424242;
`
export const IntroLi = styled.li`
  margin-bottom: 10px;
  margin-top: 10px;
`

export const ImageFrame = styled.div`
  width: 80px;
  height: 80px;
  background: #f8f8f8;
  justify-content: center;
`
export const FullScreenDialog = styled.dialog`
  position: static;
  left: 20%;
  top: 10%;
`

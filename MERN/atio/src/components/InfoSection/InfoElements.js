import styled from 'styled-components'

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
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
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
  max-width: 555px;
  height: 100%;
`

export const Img = styled.img`
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

import React from 'react'
import BubbleTea from '../../asset/bubbleTea.svg'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-msg'>
        Made with
        <img className='footer-msg' src={BubbleTea} alt='log' />
        by Yutong
      </div>
      <div className='footer-right'>
        <a href='https://www.linkedin.com/in/yzhang0530/'>LinkedIn</a>
        <a href='yutongz@cca.edu'>email</a>
        <a href='https://medium.com/@erldyb'>medium</a>
        <a href='https://www.youtube.com/watch?v=SIWbjgPYcJY'>I feel lucky</a>
      </div>
      {/* <div>sdf</div> */}
    </div>
  )
}

export default Footer

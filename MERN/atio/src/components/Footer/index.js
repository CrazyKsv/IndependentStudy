import React from 'react'
import BubbleTea from '../../asset/bubbleTea.svg'
import './Footer.css'

function Footer() {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-white footer'>
        <div className='container'>
          <div className='navbar-brand footer'>
            Made with
            <img src={BubbleTea} alt='log' />
            by Yutong
          </div>
          <div className='collapse navbar-collapse'>
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item active'>
                <a
                  className='nav-link'
                  href='https://www.linkedin.com/in/yzhang0530/'
                >
                  LinkedIn
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='mailto:yutongz@cca.edu'>
                  Email
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='https://medium.com/@erldyb'>
                  Medium
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='nav-link'
                  href='https://www.youtube.com/watch?v=SIWbjgPYcJY'
                >
                  I feel lucky
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
  // <div className='footer'>
  //   <div className='footer-msg'>
  //     Made with
  //     <img className='footer-msg' src={BubbleTea} alt='log' />
  //     by Yutong
  //   </div>
  //   <div className='footer-right'>
  //     <a href='https://www.linkedin.com/in/yzhang0530/'>LinkedIn</a>
  //     <a href='yutongz@cca.edu'>email</a>
  //     <a href='https://medium.com/@erldyb'>medium</a>
  //     <a href='https://www.youtube.com/watch?v=SIWbjgPYcJY'>I feel lucky</a>
  //   </div>
  //   {/* <div>sdf</div> */}
  // </div>
}

export default Footer

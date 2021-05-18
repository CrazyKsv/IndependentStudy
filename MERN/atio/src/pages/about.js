import React from 'react'

import AboutMe from '../components/AboutMe'
import { homeObjOne } from '../components/InfoSection/Data'
function About() {
  return (
    <>
      <AboutMe {...homeObjOne} />
    </>
  )
}

export default About

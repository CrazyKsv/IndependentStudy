import React from 'react'

import InfoSection from '../components/InfoSection'
import { homeObjOne } from '../components/InfoSection/Data'

function Home() {
  return (
    <>
      <InfoSection {...homeObjOne} />
    </>
  )
}

export default Home

import React from 'react'
import { motion } from 'framer-motion'
import InfoSection from '../components/InfoSection'
import { homeObjOne } from '../components/InfoSection/Data'
const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }
function Home() {
  return (
    <>
      <motion.div
        exit={{ opacity: 0 }}
        transition={transition}
        className='information'
      >
        <InfoSection {...homeObjOne} />
      </motion.div>
    </>
  )
}

export default Home

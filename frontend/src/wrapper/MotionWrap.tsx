import React from 'react'
import { motion } from 'framer-motion'


export const MotionWrap = (Component:React.FC) => function HOC() {
  return (
    <motion.div
      whileInView={{y:[100,50,0],opacity:[0,0,1]}}
      transition={{duration:1}}
    >
      <Component/>
    </motion.div>
  )
}
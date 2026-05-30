'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
  once?: boolean
}

export default function Reveal({ children, delay = 0, className, once = true }: RevealProps) {
  const prefersReduced = useReducedMotion()

  const variants = {
    hidden: prefersReduced
      ? { opacity: 0 }
      : { opacity: 0, y: 24, filter: 'blur(6px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
    },
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-60px' }}
      transition={{
        duration: prefersReduced ? 0.3 : 0.7,
        delay,
        ease: [0.4, 0, 0.2, 1],
      }}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}

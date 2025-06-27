'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface RevealTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  once?: boolean
  trigger?: boolean
}

export const RevealText: React.FC<RevealTextProps> = ({
  text,
  className = '',
  delay = 0,
  duration = 0.8,
  direction = 'up',
  once = true,
  trigger = true
}) => {
  const getClipPath = (direction: string, isVisible: boolean) => {
    if (isVisible) {
      return 'inset(0 0 0 0)'
    }

    switch (direction) {
      case 'up':
        return 'inset(100% 0 0 0)'
      case 'down':
        return 'inset(0 0 100% 0)'
      case 'left':
        return 'inset(0 100% 0 0)'
      case 'right':
        return 'inset(0 0 0 100%)'
      default:
        return 'inset(100% 0 0 0)'
    }
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{
          clipPath: getClipPath(direction, false)
        }}
        animate={trigger ? {
          clipPath: getClipPath(direction, true)
        } : {}}
        transition={{
          duration,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
        viewport={{ once }}
      >
        {text}
      </motion.div>
    </div>
  )
} 
'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  variant?: 'fadeIn' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'typewriter' | 'bounce' | 'elastic' | 'blur'
  once?: boolean
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  delay = 0,
  duration = 0.6,
  variant = 'fadeIn',
  once = true
}) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (variant === 'typewriter') {
      const timer = setTimeout(() => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1))
          setCurrentIndex(currentIndex + 1)
        }
      }, 50)
      return () => clearTimeout(timer)
    }
  }, [currentIndex, text, variant])

  const variants = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    },
    slideUp: {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 }
    },
    slideDown: {
      hidden: { opacity: 0, y: -30 },
      visible: { opacity: 1, y: 0 }
    },
    slideLeft: {
      hidden: { opacity: 0, x: 30 },
      visible: { opacity: 1, x: 0 }
    },
    slideRight: {
      hidden: { opacity: 0, x: -30 },
      visible: { opacity: 1, x: 0 }
    },
    bounce: {
      hidden: { opacity: 0, scale: 0.3 },
      visible: { 
        opacity: 1, 
        scale: 1
      }
    },
    elastic: {
      hidden: { opacity: 0, scale: 0, rotate: -180 },
      visible: { 
        opacity: 1, 
        scale: 1, 
        rotate: 0
      }
    },
    blur: {
      hidden: { opacity: 0, filter: 'blur(10px)' },
      visible: { opacity: 1, filter: 'blur(0px)' }
    },
    typewriter: {
      hidden: { opacity: 1 },
      visible: { opacity: 1 }
    }
  }

  const getTransition = () => {
    if (variant === 'bounce' || variant === 'elastic') {
      return { delay }
    }
    return { 
      delay, 
      duration
    }
  }

  if (variant === 'typewriter') {
    return (
      <motion.div
        className={className}
        initial="hidden"
        animate="visible"
        variants={variants[variant]}
        transition={getTransition()}
        viewport={{ once }}
      >
        {displayText}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
          className="inline-block w-0.5 h-6 bg-primary-600 ml-1"
        />
      </motion.div>
    )
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={variants[variant]}
      transition={getTransition()}
      viewport={{ once }}
    >
      {text}
    </motion.div>
  )
} 
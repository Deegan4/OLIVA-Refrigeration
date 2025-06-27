'use client'

import React, { useMemo } from 'react'
import { motion } from 'framer-motion'

interface SplitTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  variant?: 'chars' | 'words' | 'lines'
  animation?: 'fadeUp' | 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale' | 'rotate' | 'blur' | 'wave' | 'bounce'
  stagger?: number
  once?: boolean
}

export const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 0,
  duration = 0.6,
  variant = 'chars',
  animation = 'fadeUp',
  stagger = 0.05,
  once = true
}) => {
  const elements = useMemo(() => {
    switch (variant) {
      case 'words':
        return text.split(' ').map((word, index) => ({ content: word, index, isSpace: false }))
      case 'lines':
        return text.split('\n').map((line, index) => ({ content: line, index, isSpace: false }))
      case 'chars':
      default:
        return text.split('').map((char, index) => ({ 
          content: char, 
          index, 
          isSpace: char === ' ' 
        }))
    }
  }, [text, variant])

  const getVariants = () => {
    const baseVariants = {
      hidden: {},
      visible: {}
    }

    switch (animation) {
      case 'fadeUp':
        baseVariants.hidden = { opacity: 0, y: 20 }
        baseVariants.visible = { opacity: 1, y: 0 }
        break
      case 'fadeIn':
        baseVariants.hidden = { opacity: 0 }
        baseVariants.visible = { opacity: 1 }
        break
      case 'slideUp':
        baseVariants.hidden = { opacity: 0, y: 50 }
        baseVariants.visible = { opacity: 1, y: 0 }
        break
      case 'slideLeft':
        baseVariants.hidden = { opacity: 0, x: 50 }
        baseVariants.visible = { opacity: 1, x: 0 }
        break
      case 'slideRight':
        baseVariants.hidden = { opacity: 0, x: -50 }
        baseVariants.visible = { opacity: 1, x: 0 }
        break
      case 'scale':
        baseVariants.hidden = { opacity: 0, scale: 0.5 }
        baseVariants.visible = { opacity: 1, scale: 1 }
        break
      case 'rotate':
        baseVariants.hidden = { opacity: 0, rotate: -180 }
        baseVariants.visible = { opacity: 1, rotate: 0 }
        break
      case 'blur':
        baseVariants.hidden = { opacity: 0, filter: 'blur(10px)' }
        baseVariants.visible = { opacity: 1, filter: 'blur(0px)' }
        break
      case 'wave':
        baseVariants.hidden = { opacity: 0, y: 20, rotate: -10 }
        baseVariants.visible = { opacity: 1, y: 0, rotate: 0 }
        break
      case 'bounce':
        baseVariants.hidden = { opacity: 0, scale: 0.3 }
        baseVariants.visible = { opacity: 1, scale: 1 }
        break
    }

    return baseVariants
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay
      }
    }
  }

  const itemVariants = getVariants()

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      viewport={{ once }}
    >
      {elements.map((element, index) => (
        <motion.span
          key={index}
          variants={itemVariants}
          transition={{ 
            duration,
            ease: animation === 'bounce' ? 'easeOut' : [0.25, 0.46, 0.45, 0.94],
            ...(animation === 'bounce' && {
              type: 'spring',
              damping: 10,
              stiffness: 100
            }),
            ...(animation === 'wave' && {
              delay: index * 0.1,
              repeat: Infinity,
              repeatType: 'reverse' as const,
              repeatDelay: 2
            })
          }}
          className={`inline-block ${element.isSpace ? 'w-2' : ''}`}
          style={{
            ...(variant === 'words' && element.index < elements.length - 1 && { marginRight: '0.25rem' })
          }}
        >
          {element.content === ' ' ? '\u00A0' : element.content}
        </motion.span>
      ))}
    </motion.div>
  )
} 
'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface GradientTextProps {
  text: string
  className?: string
  gradient?: 'primary' | 'frost' | 'rainbow' | 'fire' | 'ocean' | 'sunset'
  animated?: boolean
  animationType?: 'slide' | 'pulse' | 'wave' | 'shimmer'
  delay?: number
}

export const GradientText: React.FC<GradientTextProps> = ({
  text,
  className = '',
  gradient = 'primary',
  animated = true,
  animationType = 'shimmer',
  delay = 0
}) => {
  const gradients = {
    primary: 'from-primary-600 via-primary-500 to-frost-500',
    frost: 'from-frost-400 via-frost-500 to-primary-600',
    rainbow: 'from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500',
    fire: 'from-orange-500 via-red-500 to-pink-500',
    ocean: 'from-blue-600 via-cyan-500 to-teal-400',
    sunset: 'from-orange-400 via-pink-500 to-purple-600'
  }

  const getAnimationProps = () => {
    if (!animated) return {}

    switch (animationType) {
      case 'slide':
        return {
          animate: {
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
          },
          transition: {
            duration: 3,
            repeat: Infinity,
            ease: 'linear'
          }
        }
      case 'pulse':
        return {
          animate: {
            scale: [1, 1.05, 1]
          },
          transition: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }
        }
      case 'wave':
        return {
          animate: {
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
          },
          transition: {
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut'
          }
        }
      case 'shimmer':
      default:
        return {
          animate: {
            backgroundPosition: ['-200% 0%', '200% 0%']
          },
          transition: {
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
            delay
          }
        }
    }
  }

  return (
    <motion.span
      className={`
        bg-gradient-to-r ${gradients[gradient]} 
        bg-clip-text text-transparent
        ${animated && animationType === 'shimmer' ? 'bg-[length:200%_100%]' : ''}
        ${className}
      `}
      {...getAnimationProps()}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay }}
    >
      {text}
    </motion.span>
  )
} 
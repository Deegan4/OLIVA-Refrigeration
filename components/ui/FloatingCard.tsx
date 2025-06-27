'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface FloatingCardProps {
  children: React.ReactNode
  className?: string
  delay?: number
  hoverScale?: number
  floatAnimation?: boolean
  onClick?: () => void
}

export const FloatingCard: React.FC<FloatingCardProps> = ({
  children,
  className = '',
  delay = 0,
  hoverScale = 1.05,
  floatAnimation = true,
  onClick
}) => {
  return (
    <motion.div
      className={`bg-white rounded-xl shadow-lg border border-ice-200 p-6 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        ...(floatAnimation && {
          y: [0, -5, 0]
        })
      }}
      transition={{ 
        delay,
        duration: 0.6,
        ...(floatAnimation && {
          y: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }
        })
      }}
      whileHover={{ 
        scale: hoverScale,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      {children}
    </motion.div>
  )
} 
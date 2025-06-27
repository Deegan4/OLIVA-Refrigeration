'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface GlowButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  disabled?: boolean
  glowColor?: string
}

export const GlowButton: React.FC<GlowButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  glowColor
}) => {
  const baseClasses = 'relative font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variantClasses = {
    primary: 'bg-primary-600 hover:bg-primary-700 text-white focus:ring-primary-500',
    secondary: 'bg-frost-500 hover:bg-frost-600 text-white focus:ring-frost-400',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white focus:ring-primary-500'
  }
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }
  
  const glowColorMap = {
    primary: 'rgba(2, 132, 199, 0.4)',
    secondary: 'rgba(0, 188, 212, 0.4)',
    outline: 'rgba(2, 132, 199, 0.4)'
  }

  return (
    <motion.button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { 
        scale: 1.05,
        boxShadow: `0 0 20px ${glowColor || glowColorMap[variant]}`
      } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="relative z-10"
        whileHover={!disabled ? { 
          textShadow: "0 0 8px rgba(255, 255, 255, 0.8)" 
        } : {}}
      >
        {children}
      </motion.div>
      
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-lg opacity-0"
        style={{
          background: `radial-gradient(circle, ${glowColor || glowColorMap[variant]} 0%, transparent 70%)`
        }}
        whileHover={!disabled ? { opacity: 0.6 } : {}}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  )
} 
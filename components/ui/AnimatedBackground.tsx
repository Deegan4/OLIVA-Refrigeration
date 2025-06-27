'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface AnimatedBackgroundProps {
  variant?: 'mesh' | 'dots' | 'waves' | 'geometric' | 'particles' | 'grid'
  intensity?: 'subtle' | 'medium' | 'strong'
  className?: string
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  variant = 'mesh',
  intensity = 'medium',
  className = ''
}) => {
  const getOpacity = () => {
    switch (intensity) {
      case 'subtle': return 'opacity-10'
      case 'medium': return 'opacity-20'
      case 'strong': return 'opacity-30'
      default: return 'opacity-20'
    }
  }

  const renderMeshBackground = () => (
    <div className={`absolute inset-0 ${getOpacity()}`}>
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 50% 80%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)',
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  )

  const renderDotsBackground = () => (
    <div className={`absolute inset-0 ${getOpacity()}`}>
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(59, 130, 246, 0.4) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}
        animate={{
          backgroundPosition: ['0px 0px', '30px 30px', '0px 0px'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(6, 182, 212, 0.3) 1px, transparent 1px)`,
          backgroundSize: '45px 45px'
        }}
        animate={{
          backgroundPosition: ['0px 0px', '-45px -45px', '0px 0px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  )

  const renderWavesBackground = () => (
    <div className={`absolute inset-0 ${getOpacity()}`}>
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`wave-${i}`}
          className="absolute inset-0"
          style={{
            background: `linear-gradient(${45 + i * 45}deg, transparent 40%, rgba(${i % 2 === 0 ? '59, 130, 246' : '6, 182, 212'}, 0.1) 50%, transparent 60%)`
          }}
          animate={{
            transform: [
              'translateX(-100%) translateY(-100%)',
              'translateX(100%) translateY(100%)',
              'translateX(-100%) translateY(-100%)'
            ]
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            delay: i * 2,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )

  const renderGeometricBackground = () => (
    <div className={`absolute inset-0 ${getOpacity()}`}>
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`geo-${i}`}
          className="absolute"
          style={{
            left: `${5 + (i * 8)}%`,
            top: `${10 + ((i * 7) % 80)}%`,
            width: `${20 + (i % 4) * 10}px`,
            height: `${20 + (i % 4) * 10}px`,
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 8 + (i % 3) * 2,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
        >
          <div 
            className={`w-full h-full ${
              i % 4 === 0 ? 'bg-primary-300/40 rounded-full' :
              i % 4 === 1 ? 'bg-frost-300/40 rotate-45' :
              i % 4 === 2 ? 'bg-primary-400/30 rounded-lg' :
              'bg-frost-400/30 rounded-full border-2 border-primary-200/30'
            }`}
          />
        </motion.div>
      ))}
    </div>
  )

  const renderParticlesBackground = () => (
    <div className={`absolute inset-0 ${getOpacity()}`}>
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
            background: i % 2 === 0 
              ? 'radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(6, 182, 212, 0.6) 0%, transparent 70%)'
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, 20, -20, 0],
            opacity: [0, 1, 0],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )

  const renderGridBackground = () => (
    <div className={`absolute inset-0 ${getOpacity()}`}>
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px),
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px, 60px 60px, 20px 20px, 20px 20px'
        }}
        animate={{
          backgroundPosition: [
            '0px 0px, 0px 0px, 0px 0px, 0px 0px',
            '60px 60px, 60px 60px, 20px 20px, 20px 20px',
            '0px 0px, 0px 0px, 0px 0px, 0px 0px'
          ],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  )

  const renderBackground = () => {
    switch (variant) {
      case 'dots': return renderDotsBackground()
      case 'waves': return renderWavesBackground()
      case 'geometric': return renderGeometricBackground()
      case 'particles': return renderParticlesBackground()
      case 'grid': return renderGridBackground()
      case 'mesh':
      default: return renderMeshBackground()
    }
  }

  return (
    <div className={`absolute inset-0 ${className}`}>
      {renderBackground()}
    </div>
  )
} 
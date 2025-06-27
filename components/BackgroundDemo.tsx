'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { AnimatedBackground } from './ui/AnimatedBackground'
import { SplitText } from './ui/SplitText'

type BackgroundVariant = 'enhanced' | 'mesh' | 'dots' | 'waves' | 'geometric' | 'particles' | 'grid'

export const BackgroundDemo: React.FC = () => {
  const [currentBackground, setCurrentBackground] = useState<BackgroundVariant>('enhanced')

  const backgroundOptions: { value: BackgroundVariant; label: string; description: string }[] = [
    { value: 'enhanced', label: 'Enhanced', description: 'Multi-layered with particles, grid, and gradient mesh' },
    { value: 'mesh', label: 'Gradient Mesh', description: 'Animated radial gradients that shift position' },
    { value: 'dots', label: 'Dot Matrix', description: 'Animated dot patterns with dual layers' },
    { value: 'waves', label: 'Wave Patterns', description: 'Flowing diagonal wave animations' },
    { value: 'geometric', label: 'Geometric Shapes', description: 'Rotating and scaling geometric elements' },
    { value: 'particles', label: 'Particle System', description: 'Dynamic floating particle animations' },
    { value: 'grid', label: 'Animated Grid', description: 'Multi-layered moving grid patterns' },
  ]

  const renderBackground = () => {
    if (currentBackground === 'enhanced') {
      return (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-ice-50 via-primary-50 to-frost-50">
            {/* Simplified enhanced background for demo */}
            <div className="absolute inset-0 opacity-20">
              <motion.div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px'
                }}
                animate={{
                  backgroundPosition: ['0px 0px', '40px 40px'],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary-300 rounded-full opacity-40"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </>
      )
    } else {
      return (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-ice-50 via-primary-50 to-frost-50" />
          <AnimatedBackground variant={currentBackground} intensity="medium" />
        </>
      )
    }
  }

  return (
    <div className="min-h-screen bg-ice-50">
      {/* Background Preview Section */}
      <div className="relative h-96 overflow-hidden">
        {renderBackground()}
        <div className="relative z-10 flex items-center justify-center h-full">
          <SplitText
            text="Background Demo"
            className="text-4xl font-bold text-ice-900"
            variant="words"
            animation="fadeUp"
            stagger={0.1}
          />
        </div>
      </div>

      {/* Controls Section */}
      <div className="bg-white p-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-ice-900 mb-6">Choose Background Style</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {backgroundOptions.map((option) => (
              <motion.button
                key={option.value}
                onClick={() => setCurrentBackground(option.value)}
                className={`p-4 rounded-lg border-2 text-left transition-all ${
                  currentBackground === option.value
                    ? 'border-primary-500 bg-primary-50'
                    : 'border-ice-200 bg-white hover:border-primary-300'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="font-semibold text-ice-900 mb-1">{option.label}</h3>
                <p className="text-sm text-ice-600">{option.description}</p>
              </motion.button>
            ))}
          </div>

          <div className="mt-8 p-4 bg-ice-50 rounded-lg">
            <h3 className="font-semibold text-ice-900 mb-2">How to Use in Your Hero Component:</h3>
            <code className="text-sm text-ice-700 bg-white p-2 rounded block">
              {`// In components/Hero.tsx, change this line:
const backgroundStyle = '${currentBackground}'`}
            </code>
          </div>
        </div>
      </div>
    </div>
  )
} 
'use client'

import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import { Star, Shield, Clock, Thermometer } from 'lucide-react'
import { AnimatedText } from './ui/AnimatedText'
import { SplitText } from './ui/SplitText'
import { GradientText } from './ui/GradientText'
import { TypewriterText } from './ui/TypewriterText'
import { RevealText } from './ui/RevealText'
import { GlowButton } from './ui/GlowButton'
import { FloatingCard } from './ui/FloatingCard'
import { AnimatedBackground } from './ui/AnimatedBackground'

export const Hero: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Licensed & Insured',
      subtitle: 'CAC1820421'
    },
    {
      icon: Clock,
      title: '24/7 Service',
      subtitle: 'Emergency Ready'
    },
    {
      icon: Star,
      title: '4.9 Stars',
      subtitle: 'Google Reviews'
    }
  ]

  const serviceTypes = [
    'Commercial Refrigeration',
    'HVAC Systems',
    'Ice Machine Repair',
    'Walk-in Coolers',
    'Emergency Service'
  ]

  // Generate deterministic positions for background elements
  const backgroundElements = useMemo(() => {
    const elements = []
    for (let i = 0; i < 20; i++) {
      // Use a simple seeded random function for consistent positions
      const seed = i * 12345
      const x = ((seed * 9301 + 49297) % 233280) / 2332.8
      const y = ((seed * 9301 + 49297 + 1000) % 233280) / 2332.8
      const duration = 3 + ((seed % 1000) / 500)
      const delay = (seed % 2000) / 1000
      
      elements.push({
        id: i,
        left: x,
        top: y,
        duration,
        delay
      })
    }
    return elements
  }, [])

  // You can change this to switch background styles:
  // Options: 'enhanced' (current), 'mesh', 'dots', 'waves', 'geometric', 'particles', 'grid'
  const backgroundStyle = 'enhanced'

  const renderBackground = () => {
    if (backgroundStyle === 'enhanced') {
      return (
        <>
          {/* Dynamic Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-ice-50 via-primary-50 to-frost-50">
            {/* Animated Gradient Mesh */}
            <div className="absolute inset-0 opacity-30">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-200/40 via-transparent to-frost-200/40"
                animate={{
                  background: [
                    'linear-gradient(45deg, rgba(59, 130, 246, 0.1) 0%, transparent 50%, rgba(6, 182, 212, 0.1) 100%)',
                    'linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, transparent 50%, rgba(59, 130, 246, 0.1) 100%)',
                    'linear-gradient(225deg, rgba(59, 130, 246, 0.1) 0%, transparent 50%, rgba(6, 182, 212, 0.1) 100%)',
                    'linear-gradient(315deg, rgba(6, 182, 212, 0.1) 0%, transparent 50%, rgba(59, 130, 246, 0.1) 100%)',
                  ]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>

            {/* Animated Grid Pattern */}
            <div className="absolute inset-0 opacity-20">
              <motion.div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '50px 50px'
                }}
                animate={{
                  backgroundPosition: ['0px 0px', '50px 50px'],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>

            {/* Floating Geometric Shapes */}
            <div className="absolute inset-0">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={`shape-${i}`}
                  className="absolute"
                  style={{
                    left: `${10 + (i * 12)}%`,
                    top: `${20 + (i * 8)}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    rotate: [0, 180, 360],
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{
                    duration: 6 + (i * 0.5),
                    repeat: Infinity,
                    delay: i * 0.8,
                    ease: "easeInOut"
                  }}
                >
                  <div 
                    className={`w-${4 + (i % 3)} h-${4 + (i % 3)} ${
                      i % 3 === 0 ? 'bg-primary-200/30 rounded-full' :
                      i % 3 === 1 ? 'bg-frost-200/30 rotate-45' :
                      'bg-primary-300/20 rounded-lg'
                    }`}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Enhanced Particle System */}
          <div className="absolute inset-0">
            {backgroundElements.map((element) => (
              <motion.div
                key={element.id}
                className="absolute rounded-full"
                style={{
                  left: `${element.left}%`,
                  top: `${element.top}%`,
                  width: `${2 + (element.id % 3)}px`,
                  height: `${2 + (element.id % 3)}px`,
                  background: element.id % 2 === 0 
                    ? 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)'
                    : 'radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, transparent 70%)'
                }}
                animate={{
                  y: [0, -40, 0],
                  x: [0, 10, -10, 0],
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: element.duration + 2,
                  repeat: Infinity,
                  delay: element.delay,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* Subtle Noise Overlay */}
          <div 
            className="absolute inset-0 opacity-5 mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />
        </>
      )
    } else {
      return (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-ice-50 via-primary-50 to-frost-50" />
          <AnimatedBackground 
            variant={backgroundStyle as any} 
            intensity="medium" 
          />
        </>
      )
    }
  }

  return (
    <section id="home" className="relative min-h-screen-ios flex items-center justify-center overflow-hidden safe-area-inset">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/industrial-refrigeration-bg.jpg')`,
          }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Gradient overlay for better integration */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      </div>
      
      {/* Keep the existing animated background but with reduced opacity */}
      <div className="absolute inset-0 z-1 opacity-20">
        {renderBackground()}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center safe-area-inset-x" style={{ paddingTop: 'max(2rem, env(safe-area-inset-top) + 4rem)' }}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 iphone:space-y-4 hero-content-ipad">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center space-x-2 bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium min-h-touch-target"
            >
              <Thermometer className="h-4 w-4" />
              <TypewriterText 
                text={serviceTypes}
                speed={100}
                deleteSpeed={50}
                loop={true}
                pauseTime={2000}
                className="font-medium"
              />
            </motion.div>

            <div className="space-y-4 iphone:space-y-2">
              <SplitText
                text="Your Trusted Southwest Florida"
                className="text-4xl md:text-6xl iphone:text-3xl font-bold text-white drop-shadow-lg hero-title-mobile"
                variant="words"
                animation="slideUp"
                delay={0.2}
                stagger={0.1}
              />
              <div className="text-4xl md:text-6xl iphone:text-3xl font-bold hero-title-mobile">
                <GradientText
                  text="HVAC & Refrigeration Experts"
                  gradient="primary"
                  animationType="shimmer"
                  delay={0.8}
                />
              </div>
            </div>

            <RevealText
              text="Professional level 24/7 commercial refrigeration and air conditioning service. We take pride in our work and stand behind it with quality trained and experienced technicians."
              className="text-lg iphone:text-base text-gray-100 max-w-2xl mx-auto lg:mx-0 drop-shadow-md hero-subtitle-mobile"
              delay={1.2}
              direction="up"
            />

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start iphone:gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
            >
              <GlowButton 
                variant="primary" 
                size="lg"
                className="touch-manipulation webkit-tap-highlight-none min-h-touch-target"
              >
                Schedule Service
              </GlowButton>
              <GlowButton 
                variant="outline" 
                size="lg"
                className="touch-manipulation webkit-tap-highlight-none min-h-touch-target"
                onClick={() => window.location.href = 'tel:(239)-692-4880'}
              >
                Call (239) 692-4880
              </GlowButton>
            </motion.div>

            {/* Features */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="flex items-center space-x-3 justify-center lg:justify-start"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2 + index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <feature.icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-left">
                    <SplitText
                      text={feature.title}
                      className="font-semibold text-white drop-shadow-md"
                      variant="chars"
                      animation="fadeUp"
                      delay={2.2 + index * 0.1}
                      stagger={0.02}
                    />
                    <p className="text-sm text-gray-200 drop-shadow-sm">{feature.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Floating Cards */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <FloatingCard delay={0.2} className="text-center bg-white/90 backdrop-blur-sm">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Thermometer className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                </motion.div>
                <SplitText
                  text="Walk-in Coolers"
                  className="font-bold text-ice-900 mb-2"
                  variant="chars"
                  animation="scale"
                  delay={0.4}
                  stagger={0.05}
                />
                <p className="text-sm text-ice-600">Professional installation and maintenance</p>
              </FloatingCard>

              <FloatingCard delay={0.4} className="text-center mt-8 bg-white/90 backdrop-blur-sm">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Shield className="h-12 w-12 text-frost-600 mx-auto mb-4" />
                </motion.div>
                <SplitText
                  text="Ice Machines"
                  className="font-bold text-ice-900 mb-2"
                  variant="chars"
                  animation="blur"
                  delay={0.6}
                  stagger={0.05}
                />
                <p className="text-sm text-ice-600">Repair and service all makes</p>
              </FloatingCard>

              <FloatingCard delay={0.6} className="text-center -mt-4 bg-white/90 backdrop-blur-sm">
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  <Clock className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                </motion.div>
                <GradientText
                  text="24/7 Emergency"
                  className="font-bold mb-2 block"
                  gradient="fire"
                  animationType="pulse"
                  delay={0.8}
                />
                <p className="text-sm text-ice-600">Always ready to help</p>
              </FloatingCard>

              <FloatingCard delay={0.8} className="text-center mt-4 bg-white/90 backdrop-blur-sm">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <Star className="h-12 w-12 text-frost-600 mx-auto mb-4" />
                </motion.div>
                <SplitText
                  text="Quality Work"
                  className="font-bold text-ice-900 mb-2"
                  variant="chars"
                  animation="wave"
                  delay={1.0}
                  stagger={0.1}
                />
                <p className="text-sm text-ice-600">Fair prices, reliable service</p>
              </FloatingCard>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-primary-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
} 
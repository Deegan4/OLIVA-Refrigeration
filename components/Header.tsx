'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Snowflake } from 'lucide-react'
import { GlowButton } from './ui/GlowButton'

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 safe-area-inset-x ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-ios shadow-lg border-b border-ice-200' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        paddingTop: 'max(1rem, env(safe-area-inset-top))',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 min-h-touch-target">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Snowflake className="h-8 w-8 text-primary-600" />
            </motion.div>
            <div>
              <h1 className="text-xl font-bold text-gradient">OLIVA</h1>
              <p className="text-xs text-ice-600 -mt-1">REFRIGERATION</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-ice-700 hover:text-primary-600 font-medium transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              href="tel:(239)-692-4880"
              className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium"
              whileHover={{ scale: 1.05 }}
            >
              <Phone className="h-4 w-4" />
              <span>(239) 692-4880</span>
            </motion.a>
            <GlowButton variant="primary" size="sm">
              Schedule Service
            </GlowButton>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-3 rounded-lg text-ice-700 hover:text-primary-600 hover:bg-ice-100 min-h-touch-target min-w-[44px] touch-manipulation webkit-tap-highlight-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
            animate={isMenuOpen ? "open" : "closed"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-white/95 backdrop-blur-ios border-t border-ice-200 mobile-nav-ios prevent-bounce"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              paddingBottom: 'max(1rem, env(safe-area-inset-bottom))',
            }}
          >
            <div className="px-4 py-4 space-y-2 safe-area-inset-x">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="block text-ice-700 hover:text-primary-600 font-medium py-3 px-2 rounded-lg min-h-touch-target touch-manipulation webkit-tap-highlight-none hover:bg-ice-50 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.name}
                </motion.a>
              ))}
              <div className="pt-4 border-t border-ice-200">
                <motion.a
                  href="tel:(239)-692-4880"
                  className="flex items-center space-x-2 text-primary-600 font-medium mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Phone className="h-4 w-4" />
                  <span>(239) 692-4880</span>
                </motion.a>
                <GlowButton variant="primary" size="sm" className="w-full">
                  Schedule Service
                </GlowButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
} 
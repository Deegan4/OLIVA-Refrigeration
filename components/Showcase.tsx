'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react'
import { FloatingCard } from './ui/FloatingCard'
import { SplitText } from './ui/SplitText'
import { RevealText } from './ui/RevealText'
import { GradientText } from './ui/GradientText'

export const Showcase: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const showcaseItems = [
    {
      id: 2,
      title: 'Advanced Refrigeration Control Systems',
      description: 'State-of-the-art control panels and monitoring systems for optimal performance and energy efficiency.',
      category: 'Control Systems',
      image: '/493899261_1285306436938398_5364079700638495463_n.jpg'
    },
    {
      id: 3,
      title: 'Dual Compressor Refrigeration Unit',
      description: 'High-capacity dual compressor systems designed for maximum reliability and redundancy in commercial applications.',
      category: 'Compressor Systems',
      image: '/499448696_1302828288519546_2418897662653288468_n.jpg'
    },
    {
      id: 4,
      title: 'Commercial Refrigeration Maintenance',
      description: 'Comprehensive maintenance and repair services ensuring your refrigeration systems operate at peak efficiency.',
      category: 'Maintenance & Repair',
      image: '/499790981_1302824881853220_3734181956566334721_n.jpg'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.3
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: {
        duration: 0.2
      }
    }
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % showcaseItems.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? showcaseItems.length - 1 : selectedImage - 1)
    }
  }

  return (
    <section id="showcase" className="section-padding bg-gradient-to-b from-ice-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-frost-100 text-frost-800 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <ZoomIn className="h-4 w-4" />
            <span>Our Work</span>
          </motion.div>

          <SplitText
            text="Professional Refrigeration Installations"
            className="text-4xl md:text-5xl font-bold text-ice-900 mb-6"
            variant="words"
            animation="slideUp"
            stagger={0.1}
          />

          <RevealText
            text="Take a look at our recent commercial refrigeration projects. From walk-in freezers to advanced control systems, we deliver quality installations that keep your business running smoothly."
            className="text-lg text-ice-600 max-w-3xl mx-auto"
            delay={0.8}
            direction="up"
          />
        </div>

        {/* Showcase Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {showcaseItems.map((item, index) => (
            <motion.div key={item.id} variants={itemVariants}>
              <FloatingCard 
                delay={index * 0.1} 
                className="group cursor-pointer overflow-hidden"
                hoverScale={1.02}
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative">
                  {/* Image Container */}
                  <div className="relative h-64 bg-gradient-to-br from-ice-100 to-frost-100 rounded-lg overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    
                    {/* Actual image */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const placeholder = target.nextElementSibling as HTMLElement;
                        if (placeholder) placeholder.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-full bg-gradient-to-br from-primary-100 to-frost-200 items-center justify-center hidden">
                      <div className="text-center">
                        <ZoomIn className="h-12 w-12 text-primary-400 mx-auto mb-2" />
                        <p className="text-primary-600 font-medium">Click to view</p>
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                        <ZoomIn className="h-6 w-6 text-primary-600" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="inline-block bg-primary-100 text-primary-800 text-xs font-medium px-2 py-1 rounded-full">
                        {item.category}
                      </span>
                    </div>
                    
                    <GradientText
                      text={item.title}
                      className="text-xl font-bold mb-3 block"
                      gradient="primary"
                      animationType="shimmer"
                      delay={index * 0.1}
                    />
                    
                    <SplitText
                      text={item.description}
                      className="text-ice-600 text-sm leading-relaxed"
                      variant="words"
                      animation="fadeIn"
                      delay={index * 0.1 + 0.3}
                      stagger={0.02}
                    />
                  </div>
                </div>
              </FloatingCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-ice-600 mb-6">
            Ready to upgrade your commercial refrigeration system?
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-600 to-frost-600 text-white px-8 py-3 rounded-full font-medium hover:from-primary-700 hover:to-frost-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Get a Free Quote</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
              >
                <X className="h-5 w-5 text-gray-600" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
              >
                <ChevronLeft className="h-5 w-5 text-gray-600" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
              >
                <ChevronRight className="h-5 w-5 text-gray-600" />
              </button>

              {/* Image */}
              <div className="h-96 bg-gradient-to-br from-ice-100 to-frost-100 overflow-hidden">
                <img
                  src={showcaseItems[selectedImage].image}
                  alt={showcaseItems[selectedImage].title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const placeholder = target.nextElementSibling as HTMLElement;
                    if (placeholder) placeholder.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-ice-100 to-frost-100 items-center justify-center hidden">
                  <div className="text-center">
                    <ZoomIn className="h-16 w-16 text-primary-400 mx-auto mb-4" />
                    <p className="text-primary-600 font-medium text-lg">
                      {showcaseItems[selectedImage].title}
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-3">
                  <span className="inline-block bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full">
                    {showcaseItems[selectedImage].category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-ice-900 mb-3">
                  {showcaseItems[selectedImage].title}
                </h3>
                <p className="text-ice-600 leading-relaxed">
                  {showcaseItems[selectedImage].description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
} 
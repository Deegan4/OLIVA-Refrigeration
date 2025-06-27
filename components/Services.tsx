'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Thermometer, 
  Snowflake, 
  Wrench, 
  Clock, 
  Truck, 
  Shield,
  Zap,
  Settings
} from 'lucide-react'
import { FloatingCard } from './ui/FloatingCard'
import { AnimatedText } from './ui/AnimatedText'
import { SplitText } from './ui/SplitText'
import { GradientText } from './ui/GradientText'
import { RevealText } from './ui/RevealText'

export const Services: React.FC = () => {
  const services = [
    {
      icon: Thermometer,
      title: 'Walk-in Coolers & Freezers',
      description: 'Professional installation, maintenance, and repair of walk-in refrigeration systems for restaurants and commercial facilities.',
      features: ['Installation', 'Maintenance', 'Emergency Repair', 'Energy Efficiency'],
      gradient: 'primary'
    },
    {
      icon: Snowflake,
      title: 'Ice Machines',
      description: 'Complete ice machine services including installation, cleaning, maintenance, and repair for all major brands.',
      features: ['All Brands', 'Cleaning Service', 'Preventive Maintenance', 'Quick Repairs'],
      gradient: 'frost'
    },
    {
      icon: Settings,
      title: 'Supermarket Displays',
      description: 'Specialized service for supermarket refrigeration displays, ensuring optimal temperature control for food safety.',
      features: ['Display Cases', 'Temperature Control', 'Energy Optimization', 'Compliance'],
      gradient: 'ocean'
    },
    {
      icon: Zap,
      title: 'HVAC Systems',
      description: 'Commercial air conditioning installation, maintenance, and repair services to keep your business comfortable.',
      features: ['Installation', 'Maintenance', 'Energy Audits', 'System Upgrades'],
      gradient: 'fire'
    },
    {
      icon: Truck,
      title: 'Emergency Service',
      description: '24/7 emergency refrigeration repair service. Our trucks are well-stocked with parts to get you cooling again fast.',
      features: ['24/7 Availability', 'Stocked Trucks', 'Fast Response', 'All Makes & Models'],
      gradient: 'sunset'
    },
    {
      icon: Wrench,
      title: 'Preventive Maintenance',
      description: 'Regular maintenance programs to prevent costly breakdowns and extend the life of your refrigeration equipment.',
      features: ['Scheduled Service', 'Cost Savings', 'Extended Life', 'Performance Optimization'],
      gradient: 'rainbow'
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-white to-ice-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Shield className="h-4 w-4" />
            <span>Professional Services</span>
          </motion.div>

          <SplitText
            text="Complete Commercial Refrigeration Solutions"
            className="text-4xl md:text-5xl font-bold text-ice-900 mb-6"
            variant="words"
            animation="slideUp"
            stagger={0.1}
          />

          <RevealText
            text="We are committed to providing fast, reliable and professional installation and maintenance service for all types of commercial refrigeration systems. Our experienced technicians service all of Southwest Florida."
            className="text-lg text-ice-600 max-w-3xl mx-auto"
            delay={0.8}
            direction="up"
          />
        </div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ipad:services-grid-ipad iphone:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div key={service.title} variants={itemVariants}>
              <FloatingCard 
                delay={index * 0.1} 
                className="h-full group cursor-pointer"
                hoverScale={1.03}
              >
                <div className="text-center mb-6">
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-100 to-frost-100 rounded-full mb-4 group-hover:from-primary-200 group-hover:to-frost-200 transition-all duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className="h-8 w-8 text-primary-600" />
                  </motion.div>
                  
                  <GradientText
                    text={service.title}
                    className="text-xl font-bold mb-3 block"
                    gradient={service.gradient as any}
                    animationType="shimmer"
                    delay={index * 0.1}
                  />
                  
                  <SplitText
                    text={service.description}
                    className="text-ice-600 leading-relaxed"
                    variant="words"
                    animation="fadeIn"
                    delay={index * 0.1 + 0.3}
                    stagger={0.02}
                  />
                </div>

                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      className="flex items-center space-x-2 text-sm text-ice-700"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index * 0.1) + (featureIndex * 0.05) + 0.5 }}
                    >
                      <motion.div 
                        className="w-1.5 h-1.5 bg-primary-500 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          delay: featureIndex * 0.2 
                        }}
                      />
                      <SplitText
                        text={feature}
                        variant="chars"
                        animation="fadeUp"
                        delay={(index * 0.1) + (featureIndex * 0.05) + 0.6}
                        stagger={0.01}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Hover Effect Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-frost-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
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
          transition={{ delay: 0.5 }}
        >
          <div className="bg-gradient-to-r from-primary-600 to-frost-600 rounded-2xl p-8 text-white relative overflow-hidden">
            {/* Background Animation */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary-400/20 to-frost-400/20"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'linear'
              }}
              style={{ backgroundSize: '200% 200%' }}
            />
            
            <div className="relative z-10">
              <SplitText
                text="Need Emergency Service?"
                className="text-2xl font-bold mb-4"
                variant="chars"
                animation="bounce"
                stagger={0.05}
              />
              
              <RevealText
                text="Our trucks are well stocked with parts to fit your system to get you cooling again. We handle any emergencies for commercial refrigeration repair and keep your equipment running at its best."
                className="text-primary-100 mb-6 max-w-2xl mx-auto"
                delay={0.5}
                direction="up"
              />
              
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                whileHover={{ scale: 1.02 }}
              >
                <motion.a
                  href="tel:(239)-692-4880"
                  className="bg-white text-primary-600 font-bold py-3 px-8 rounded-lg hover:bg-ice-50 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <SplitText
                    text="Call (239) 692-4880"
                    variant="chars"
                    animation="wave"
                    stagger={0.03}
                  />
                </motion.a>
                <motion.button
                  className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-primary-600 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <SplitText
                    text="Schedule Service"
                    variant="chars"
                    animation="slideUp"
                    stagger={0.03}
                  />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 
'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Star, Send } from 'lucide-react'
import { FloatingCard } from './ui/FloatingCard'
import { AnimatedText } from './ui/AnimatedText'
import { SplitText } from './ui/SplitText'
import { GradientText } from './ui/GradientText'
import { TypewriterText } from './ui/TypewriterText'
import { GlowButton } from './ui/GlowButton'

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '(239) 692-4880',
      link: 'tel:(239)-692-4880',
      gradient: 'primary'
    },
    {
      icon: MapPin,
      title: 'Service Area',
      content: 'Southwest Florida',
      link: null,
      gradient: 'ocean'
    },
    {
      icon: Clock,
      title: 'Emergency Service',
      content: '24/7 Available',
      link: null,
      gradient: 'fire'
    },
    {
      icon: Star,
      title: 'Rating',
      content: '4.9 Stars on Google',
      link: null,
      gradient: 'sunset'
    }
  ]

  const contactMethods = [
    'Call Us Now',
    'Send a Message',
    'Schedule Service',
    'Emergency Repair'
  ]

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-ice-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Phone className="h-4 w-4" />
            <TypewriterText 
              text={contactMethods}
              speed={80}
              deleteSpeed={40}
              loop={true}
              pauseTime={1500}
              className="font-medium"
            />
          </motion.div>

          <SplitText
            text="Contact Our Team"
            className="text-4xl md:text-5xl font-bold text-ice-900 mb-6"
            variant="words"
            animation="slideUp"
            stagger={0.15}
          />

          <SplitText
            text="Ready to schedule service or have questions about your refrigeration needs? Our experienced team is here to help with fast, reliable service."
            className="text-lg text-ice-600 max-w-3xl mx-auto"
            variant="words"
            animation="fadeIn"
            delay={0.5}
            stagger={0.03}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <FloatingCard delay={0.2} className="lg:order-2">
            <GradientText
              text="Send us a message"
              className="text-2xl font-bold mb-6 block"
              gradient="primary"
              animationType="shimmer"
            />
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <SplitText
                    text="Name *"
                    className="block text-sm font-medium text-ice-700 mb-2"
                    variant="chars"
                    animation="fadeUp"
                    delay={0.3}
                    stagger={0.02}
                  />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input-ios"
                    placeholder="Your name"
                    autoComplete="name"
                    autoCapitalize="words"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <SplitText
                    text="Phone"
                    className="block text-sm font-medium text-ice-700 mb-2"
                    variant="chars"
                    animation="fadeUp"
                    delay={0.4}
                    stagger={0.02}
                  />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form-input-ios"
                    placeholder="Your phone number"
                    autoComplete="tel"
                    inputMode="tel"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <SplitText
                  text="Email *"
                  className="block text-sm font-medium text-ice-700 mb-2"
                  variant="chars"
                  animation="fadeUp"
                  delay={0.5}
                  stagger={0.02}
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input-ios"
                  placeholder="your@email.com"
                  autoComplete="email"
                  inputMode="email"
                  autoCapitalize="none"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <SplitText
                  text="Message *"
                  className="block text-sm font-medium text-ice-700 mb-2"
                  variant="chars"
                  animation="fadeUp"
                  delay={0.6}
                  stagger={0.02}
                />
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-input-ios resize-none"
                  placeholder="Tell us about your refrigeration needs..."
                  autoCapitalize="sentences"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                <GlowButton 
                  variant="primary" 
                  size="lg" 
                  className="w-full flex items-center justify-center space-x-2 touch-manipulation webkit-tap-highlight-none min-h-touch-target"
                >
                  <Send className="h-5 w-5" />
                  <SplitText
                    text="Send Message"
                    variant="chars"
                    animation="wave"
                    stagger={0.05}
                  />
                </GlowButton>
              </motion.div>
            </form>
          </FloatingCard>

          {/* Contact Information */}
          <div className="lg:order-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <SplitText
                text="Get in touch with our team"
                className="text-2xl font-bold text-ice-900 mb-6"
                variant="words"
                animation="slideRight"
                stagger={0.1}
              />
              <SplitText
                text="Licensed and insured commercial refrigeration experts ready to help with all your cooling needs. Contact us today for fast, professional service."
                className="text-ice-600 mb-8"
                variant="words"
                animation="fadeIn"
                delay={0.5}
                stagger={0.02}
              />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <FloatingCard 
                    delay={0.3 + index * 0.1} 
                    className="text-center group cursor-pointer h-full"
                    hoverScale={1.02}
                  >
                    <motion.div
                      className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary-100 to-frost-100 rounded-full mb-4 group-hover:from-primary-200 group-hover:to-frost-200 transition-all duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <info.icon className="h-6 w-6 text-primary-600" />
                    </motion.div>
                    
                    <GradientText
                      text={info.title}
                      className="font-semibold mb-2 block"
                      gradient={info.gradient as any}
                      animationType="pulse"
                      delay={0.3 + index * 0.1}
                    />
                    
                    {info.link ? (
                      <a 
                        href={info.link}
                        className="text-primary-600 hover:text-primary-700 font-medium transition-colors duration-300"
                      >
                        <SplitText
                          text={info.content}
                          variant="chars"
                          animation="scale"
                          delay={0.4 + index * 0.1}
                          stagger={0.02}
                        />
                      </a>
                    ) : (
                      <SplitText
                        text={info.content}
                        className="text-ice-600"
                        variant="chars"
                        animation="fadeUp"
                        delay={0.4 + index * 0.1}
                        stagger={0.02}
                      />
                    )}
                  </FloatingCard>
                </motion.div>
              ))}
            </div>

            {/* Testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <FloatingCard delay={0.8} className="bg-gradient-to-br from-primary-50 to-frost-50 border-primary-200">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <motion.div 
                      className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    >
                      <Star className="h-6 w-6 text-primary-600" />
                    </motion.div>
                  </div>
                  <div>
                    <div className="flex items-center space-x-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.9 + i * 0.1 }}
                        >
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        </motion.div>
                      ))}
                    </div>
                    <SplitText
                      text="OLIVA Refrigeration is by far the most knowledgeable company I've ever known. After dealing with several companies for the rack system in my Bravo supermarket, Luis and team got the system back online very quickly."
                      className="text-ice-700 italic mb-3"
                      variant="words"
                      animation="fadeIn"
                      delay={1.4}
                      stagger={0.02}
                    />
                    <SplitText
                      text="- Reina Teresa Gonzalez"
                      className="text-sm font-semibold text-ice-900"
                      variant="chars"
                      animation="slideLeft"
                      delay={2.0}
                      stagger={0.03}
                    />
                  </div>
                </div>
              </FloatingCard>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 
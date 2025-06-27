'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Snowflake, Phone, MapPin, Clock, Star } from 'lucide-react'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-ice-900 to-ice-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-2 mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Snowflake className="h-8 w-8 text-primary-400" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold text-gradient">OLIVA</h3>
                <p className="text-sm text-ice-300 -mt-1">REFRIGERATION</p>
              </div>
            </div>
            <p className="text-ice-300 mb-6 max-w-md">
              Professional commercial refrigeration and HVAC experts serving Southwest Florida. 
              Licensed, insured, and committed to keeping your business cool.
            </p>
            <div className="flex items-center space-x-4 text-sm">
              <span className="bg-primary-600 text-white px-3 py-1 rounded-full">
                Licensed & Insured
              </span>
              <span className="text-ice-300">CAC1820421</span>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-4">
              <motion.a
                href="tel:(239)-692-4880"
                className="flex items-center space-x-3 text-ice-300 hover:text-white transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <Phone className="h-5 w-5 text-primary-400" />
                <span>(239) 692-4880</span>
              </motion.a>
              <div className="flex items-center space-x-3 text-ice-300">
                <MapPin className="h-5 w-5 text-primary-400" />
                <span>Southwest Florida</span>
              </div>
              <div className="flex items-center space-x-3 text-ice-300">
                <Clock className="h-5 w-5 text-primary-400" />
                <span>24/7 Emergency Service</span>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-ice-300">
              {[
                'Walk-in Coolers & Freezers',
                'Ice Machines',
                'Supermarket Displays',
                'HVAC Systems',
                'Emergency Repair',
                'Preventive Maintenance'
              ].map((service, index) => (
                <motion.li
                  key={service}
                  className="hover:text-white transition-colors duration-300 cursor-pointer"
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-ice-700 mt-12 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <p className="text-ice-400 text-sm">
                © {currentYear} OLIVA Refrigeration. All rights reserved.
              </p>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-ice-300 text-sm">4.9 Stars on Google</span>
              </div>
            </div>
            
            <motion.div
              className="text-ice-400 text-sm"
              whileHover={{ scale: 1.05 }}
            >
              <span className="italic">"It's Cool to keep stuff cold."</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
} 
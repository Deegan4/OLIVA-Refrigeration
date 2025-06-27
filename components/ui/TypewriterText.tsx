'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'

interface TypewriterTextProps {
  text: string | string[]
  className?: string
  delay?: number
  speed?: number
  deleteSpeed?: number
  loop?: boolean
  cursor?: boolean
  cursorChar?: string
  pauseTime?: number
  onComplete?: () => void
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  className = '',
  delay = 0,
  speed = 50,
  deleteSpeed = 30,
  loop = false,
  cursor = true,
  cursorChar = '|',
  pauseTime = 1000,
  onComplete
}) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [textArrayIndex, setTextArrayIndex] = useState(0)
  const [isStarted, setIsStarted] = useState(false)

  const textArray = Array.isArray(text) ? text : [text]
  const currentText = textArray[textArrayIndex]

  const typeText = useCallback(() => {
    if (!isStarted) return

    if (!isDeleting) {
      // Typing
      if (currentIndex < currentText.length) {
        setDisplayText(currentText.slice(0, currentIndex + 1))
        setCurrentIndex(prev => prev + 1)
      } else {
        // Finished typing current text
        if (textArray.length > 1 || loop) {
          setTimeout(() => setIsDeleting(true), pauseTime)
        } else {
          onComplete?.()
        }
      }
    } else {
      // Deleting
      if (currentIndex > 0) {
        setDisplayText(currentText.slice(0, currentIndex - 1))
        setCurrentIndex(prev => prev - 1)
      } else {
        // Finished deleting
        setIsDeleting(false)
        setTextArrayIndex(prev => (prev + 1) % textArray.length)
      }
    }
  }, [currentIndex, currentText, isDeleting, textArray, loop, pauseTime, onComplete, isStarted])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsStarted(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  useEffect(() => {
    if (!isStarted) return

    const timeout = setTimeout(typeText, isDeleting ? deleteSpeed : speed)
    return () => clearTimeout(timeout)
  }, [typeText, speed, deleteSpeed, isDeleting, isStarted])

  return (
    <div className={className}>
      <span>{displayText}</span>
      {cursor && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
          className="inline-block ml-1"
        >
          {cursorChar}
        </motion.span>
      )}
    </div>
  )
} 
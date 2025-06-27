'use client'

import { useEffect } from 'react'

export const IOSOptimizations: React.FC = () => {
  useEffect(() => {
    // iOS Safari viewport height fix
    const setVH = () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }

    // iOS keyboard handling
    const handleKeyboardOpen = () => {
      if (window.visualViewport) {
        const viewport = window.visualViewport
        
        const handleResize = () => {
          document.documentElement.style.setProperty(
            '--keyboard-height', 
            `${window.innerHeight - viewport.height}px`
          )
          
          // Adjust body padding when keyboard is open
          if (viewport.height < window.innerHeight * 0.75) {
            document.body.classList.add('keyboard-open')
          } else {
            document.body.classList.remove('keyboard-open')
          }
        }
        
        viewport.addEventListener('resize', handleResize)
        return () => viewport.removeEventListener('resize', handleResize)
      }
    }

    // iOS scroll behavior optimization
    const optimizeScrolling = () => {
      // Prevent bounce scrolling on iOS
      document.addEventListener('touchmove', (e) => {
        if (e.target === document.body) {
          e.preventDefault()
        }
      }, { passive: false })

      // Smooth scrolling for anchor links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
          e.preventDefault()
          const target = document.querySelector(anchor.getAttribute('href') as string)
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            })
          }
        })
      })
    }

    // iOS touch optimization
    const optimizeTouch = () => {
      // Add touch feedback to interactive elements
      const addTouchFeedback = (element: Element) => {
        element.addEventListener('touchstart', () => {
          element.classList.add('touch-active')
        })
        
        element.addEventListener('touchend', () => {
          setTimeout(() => element.classList.remove('touch-active'), 150)
        })
      }

      // Apply to buttons and links
      document.querySelectorAll('button, a, [role="button"]').forEach(addTouchFeedback)
    }

    // iOS performance optimizations
    const optimizePerformance = () => {
      // Enable hardware acceleration for animations
      const animatedElements = document.querySelectorAll('[class*="animate"], [class*="motion"]')
      animatedElements.forEach(el => {
        (el as HTMLElement).style.transform = 'translateZ(0)'
        ;(el as HTMLElement).style.willChange = 'transform, opacity'
      })

      // Optimize images for retina displays
      const images = document.querySelectorAll('img')
      images.forEach(img => {
        if (window.devicePixelRatio > 1) {
          img.style.imageRendering = '-webkit-optimize-contrast'
        }
      })
    }

    // iOS-specific focus handling
    const optimizeFocus = () => {
      // Prevent zoom on input focus
      const inputs = document.querySelectorAll('input, textarea, select')
      inputs.forEach(input => {
        input.addEventListener('focus', () => {
          // Temporarily disable viewport scaling
          const viewport = document.querySelector('meta[name="viewport"]')
          if (viewport) {
            const content = viewport.getAttribute('content')
            viewport.setAttribute('content', content + ', user-scalable=no')
            
            // Re-enable after blur
            input.addEventListener('blur', () => {
              viewport.setAttribute('content', content || '')
            }, { once: true })
          }
        })
      })
    }

    // Initialize all optimizations
    setVH()
    handleKeyboardOpen()
    optimizeScrolling()
    optimizeTouch()
    optimizePerformance()
    optimizeFocus()

    // Update viewport height on resize and orientation change
    window.addEventListener('resize', setVH)
    window.addEventListener('orientationchange', () => {
      setTimeout(setVH, 100) // Delay to ensure accurate measurement
    })

    // Cleanup
    return () => {
      window.removeEventListener('resize', setVH)
    }
  }, [])

  return null // This component doesn't render anything
}

// Add CSS custom properties for iOS optimizations
if (typeof document !== 'undefined') {
  const style = document.createElement('style')
  style.textContent = `
    :root {
      --vh: 1vh;
      --keyboard-height: 0px;
    }
    
    .full-height-ios {
      height: calc(var(--vh, 1vh) * 100);
    }
    
    .keyboard-open {
      padding-bottom: var(--keyboard-height);
    }
    
    .touch-active {
      transform: scale(0.98);
      opacity: 0.8;
      transition: transform 0.1s ease, opacity 0.1s ease;
    }
    
    /* iOS Safari bottom bar handling */
    @supports (-webkit-touch-callout: none) {
      .min-h-screen-ios {
        min-height: calc(var(--vh, 1vh) * 100);
      }
    }
    
    /* iPad specific optimizations */
    @media (min-width: 768px) and (max-width: 1024px) {
      .section-padding {
        padding-left: max(2rem, env(safe-area-inset-left));
        padding-right: max(2rem, env(safe-area-inset-right));
      }
    }
    
    /* iPhone specific optimizations */
    @media (max-width: 767px) {
      .section-padding {
        padding-left: max(1rem, env(safe-area-inset-left));
        padding-right: max(1rem, env(safe-area-inset-right));
      }
      
      /* Optimize button sizes for touch */
      button, .btn, [role="button"] {
        min-height: 44px;
        min-width: 44px;
      }
    }
  `
  document.head.appendChild(style)
} 
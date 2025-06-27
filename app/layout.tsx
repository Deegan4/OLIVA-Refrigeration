import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import './globals.css'
import ParticlesBackground from '../components/ParticlesBackground'
import { IOSOptimizations } from '../components/IOSOptimizations'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OLIVA Refrigeration - Professional Commercial Refrigeration Services',
  description: 'Licensed and insured commercial refrigeration and HVAC experts serving Southwest Florida. 24/7 emergency service, walk-in coolers, freezers, ice machines, and more.',
  keywords: 'commercial refrigeration, HVAC, Southwest Florida, walk-in coolers, freezers, ice machines, emergency repair',
  authors: [{ name: 'OLIVA Refrigeration' }],
  robots: 'index, follow',
  openGraph: {
    title: 'OLIVA Refrigeration - Professional Commercial Refrigeration Services',
    description: 'Licensed and insured commercial refrigeration and HVAC experts serving Southwest Florida.',
    type: 'website',
    locale: 'en_US',
  },
  // iOS-specific meta tags
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'OLIVA Refrigeration',
  },
  formatDetection: {
    telephone: false, // Prevent automatic phone number detection
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1, // Prevent zoom on iOS
  userScalable: false, // Disable pinch-to-zoom for better UX
  viewportFit: 'cover', // Handle iPhone notch and safe areas
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* iOS Safari specific optimizations */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="OLIVA Refrigeration" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* Prevent iOS from styling phone numbers */}
        <meta name="format-detection" content="telephone=no" />
        
        {/* Touch icons for iOS */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* iOS splash screen */}
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* PWA manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* iOS splash screens for different devices */}
        <link rel="apple-touch-startup-image" href="/splash/iphone5_splash.png" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)" />
        <link rel="apple-touch-startup-image" href="/splash/iphone6_splash.png" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)" />
        <link rel="apple-touch-startup-image" href="/splash/iphoneplus_splash.png" media="(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)" />
        <link rel="apple-touch-startup-image" href="/splash/iphonex_splash.png" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)" />
        <link rel="apple-touch-startup-image" href="/splash/iphonexr_splash.png" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)" />
        <link rel="apple-touch-startup-image" href="/splash/iphonexsmax_splash.png" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)" />
        <link rel="apple-touch-startup-image" href="/splash/ipad_splash.png" media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)" />
        <link rel="apple-touch-startup-image" href="/splash/ipadpro1_splash.png" media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)" />
        <link rel="apple-touch-startup-image" href="/splash/ipadpro3_splash.png" media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)" />
        <link rel="apple-touch-startup-image" href="/splash/ipadpro2_splash.png" media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)" />
        
        {/* Preload critical fonts for better performance */}
        <link rel="preload" href="/_next/static/media/inter-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} touch-manipulation`}>
        {/* iOS-specific optimizations */}
        <IOSOptimizations />
        
        {/* Global Particle Background - Applied to entire site */}
        <ParticlesBackground />
        
        {/* Content with higher z-index and iOS safe area support */}
        <div className="relative z-10 min-h-screen-ios">
          {children}
        </div>
      </body>
    </html>
  )
} 
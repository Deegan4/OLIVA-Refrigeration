'use client'

import React from 'react'
import Particles from './Particles'

export default function ParticlesBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Particles
        particleColors={['#ffffff', '#f0f9ff', '#e0f2fe', '#bae6fd', '#ccfbff']}
        particleCount={400}
        particleSpread={20}
        speed={0.08}
        particleBaseSize={100}
        moveParticlesOnHover={false}
        particleHoverFactor={0}
        alphaParticles={true}
        sizeRandomness={2}
        cameraDistance={25}
        disableRotation={true}
        className="opacity-60"
      />
    </div>
  )
} 
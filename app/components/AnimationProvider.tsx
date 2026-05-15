'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface AnimationProviderProps {
  children: React.ReactNode
}

export function AnimationProvider({ children }: AnimationProviderProps) {
  const [isReady, setIsReady] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    setIsReady(true)
  }, [])

  return (
    <>
      <style jsx global>{`
        .animate-on-load {
          opacity: 0;
        }
        
        body.rendering {
          opacity: 0;
        }
        
        body.rendering.animate-in {
          opacity: 1;
          transition: opacity 0.3s ease-out;
        }
      `}</style>
      {children}
    </>
  )
}

export const pageTransition = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
      mass: 0.8,
    },
  },
}

export const fadeInUpSlow = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

export const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
    },
  },
}

export const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
    },
  },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
    },
  },
}

export function AnimatedSection({ 
  children, 
  className,
  variants = fadeInUp,
  delay = 0,
}: { 
  children: React.ReactNode
  className?: string
  variants?: typeof fadeInUp
  delay?: number
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={{
        ...variants,
        visible: {
          ...variants.visible,
          transition: {
            ...variants.visible?.transition,
            delayChildren: 0.1 + delay,
            staggerChildren: 0.08,
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function AnimatedItem({ 
  children, 
  className,
  variants = fadeInUp,
  delay = 0,
}: { 
  children: React.ReactNode
  className?: string
  variants?: typeof fadeInUp
  delay?: number
}) {
  return (
    <motion.div
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}
'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = '55859861255'

export default function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <motion.div
        className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
        animate={{
          scale: [1, 1.1, 1],
          boxShadow: [
            '0 4px 20px rgba(34, 197, 94, 0.4)',
            '0 8px 30px rgba(34, 197, 94, 0.6)',
            '0 4px 20px rgba(34, 197, 94, 0.4)',
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </motion.div>
    </motion.a>
  )
}
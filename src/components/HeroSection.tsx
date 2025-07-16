'use client'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold"
      >
        Bienvenidos a FolkodeGroup
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-4 text-lg text-gray-600 dark:text-gray-300"
      >
        Creamos soluciones digitales modernas y escalables.
      </motion.p>
    </section>
  )
}
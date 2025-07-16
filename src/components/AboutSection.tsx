'use client'
import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Sobre Nosotros
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
        >
          Somos un equipo apasionado por el desarrollo web moderno y el diseño centrado en el usuario. Creamos soluciones digitales que destacan por su funcionalidad y estética.
        </motion.p>
      </div>
    </section>
  )
}
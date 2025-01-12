'use client';

import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center"
      >
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4 mx-auto"></div>
        <p className="text-white text-lg">Cargando experiencia 3D...</p>
      </motion.div>
    </div>
  );
} 
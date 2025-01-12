'use client';

import { motion } from "framer-motion";

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 px-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Blog
          </span>
        </h1>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <div className="mb-4">
                <span className="text-sm text-gray-500">{post.date}</span>
                <h2 className="text-2xl font-bold mt-2">{post.title}</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{post.excerpt}</p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

const blogPosts = [
  {
    title: "Introducción a Spring Boot",
    date: "2024-03-15",
    excerpt: "Una guía completa para comenzar con Spring Boot..."
  },
  {
    title: "React Native vs Flutter",
    date: "2024-03-10",
    excerpt: "Comparación detallada entre las dos principales frameworks..."
  },
  // Añade más posts aquí
]; 
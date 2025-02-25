'use client';

import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaServer, FaMobile, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import SplineScene from './components/SplineScene';
import Loader from './components/Loader';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular tiempo de carga o esperar a que Spline esté listo
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Ajusta este tiempo según necesites

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      {/* Hero Section con Spline */}
      <section className="relative min-h-screen">
        {/* Gradientes de fondo */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        {/* Modelo 3D */}
        <SplineScene />

        {/* Contenido superpuesto */}
        <div className="relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen flex flex-col justify-center items-center text-center p-8"
          >
            <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              johnny
            </h1>
            
            <h2 className="text-3xl text-gray-300 mb-8">
              Desarrollador Full Stack
            </h2>

            <div className="flex gap-6 mb-8">
              <a 
                href="#contact" 
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-all hover:-translate-y-1"
              >
                Contáctame
              </a>
              <a 
                href="#projects" 
                className="px-8 py-3 bg-white/10 text-white rounded-full hover:shadow-lg transition-all hover:-translate-y-1 backdrop-blur-sm"
              >
                Ver Proyectos
              </a>
            </div>

            <div className="flex gap-6">
              <a href="https://github.com/tu-usuario" className="text-3xl text-white hover:text-blue-400 transition-colors">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/tu-usuario" className="text-3xl text-white hover:text-blue-400 transition-colors">
                <FaLinkedin />
              </a>
              <a href="mailto:tu@email.com" className="text-3xl text-white hover:text-blue-400 transition-colors">
                <FaEnvelope />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sección de Especialidades */}
      <section className="py-20 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            Especialidades
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => (
              <motion.div
                key={specialty.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:shadow-lg transition-all border border-gray-700"
              >
                <div className="text-4xl text-blue-400 mb-4">{specialty.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white">{specialty.title}</h3>
                <p className="text-gray-300">{specialty.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Habilidades */}
      <section className="py-20 bg-gray-900/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            Habilidades Técnicas
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: Math.min(index * 0.05, 0.3) }}
                className="p-4 bg-gray-800/80 rounded-lg text-center border border-gray-700"
              >
                <div className="text-lg font-semibold mb-2 text-white">{skill.name}</div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Contacto Directo */}
      <section className="py-20 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            Contáctame Directamente
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Correo */}
            <motion.a
              href="mailto:tu.correo@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:shadow-lg transition-all cursor-pointer group border border-gray-700"
            >
              <FaEnvelope className="text-4xl text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2 text-white">Correo Electrónico</h3>
              <p className="text-gray-300">tu.correo@gmail.com</p>
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/+34XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:shadow-lg transition-all cursor-pointer group border border-gray-700"
            >
              <FaWhatsapp className="text-4xl text-green-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2 text-white">WhatsApp</h3>
              <p className="text-gray-300">+34 XXX XXX XXX</p>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Gradientes de fondo flotantes */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}

const specialties = [
  {
    icon: <FaCode />,
    title: "Desarrollo Frontend",
    description: "Creación de interfaces modernas y responsivas con React y React Native"
  },
  {
    icon: <FaServer />,
    title: "Desarrollo Backend",
    description: "Construcción de APIs robustas con Java Spring Boot y Python"
  },
  {
    icon: <FaMobile />,
    title: "Desarrollo Móvil",
    description: "Aplicaciones móviles multiplataforma con React Native y Expo"
  }
];

const skills = [
  { name: "React", level: 90 },
  { name: "Java", level: 85 },
  { name: "Spring Boot", level: 80 },
  { name: "React Native", level: 85 },
  { name: "Python", level: 75 },
  { name: "JavaScript", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "SQL", level: 80 }
];

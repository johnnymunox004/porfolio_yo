'use client';

import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaServer, FaMobile, FaWhatsapp, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import SplineScene from './components/SplineScene';
import Loader from './components/Loader';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [proyectosExpandidos, setProyectosExpandidos] = useState(false);
  const [certificadosExpandidos, setCertificadosExpandidos] = useState(false);

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
                className="p-6 bg-gray-800/80 rounded-lg text-center border border-gray-700 hover:border-blue-500 transition-all"
              >
                <div className="w-16 h-16 mx-auto mb-4">
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className="w-full h-full object-contain" 
                  />
                </div>
                <div className="text-lg font-semibold text-white">{skill.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Proyectos Desplegable */}
      <section id="projects" className="py-20 bg-gray-900/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            className="flex items-center justify-between cursor-pointer mb-8"
            onClick={() => setProyectosExpandidos(!proyectosExpandidos)}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <h2 className="text-3xl font-bold text-white">Proyectos</h2>
            <div className="text-white text-2xl">
              {proyectosExpandidos ? <FaChevronUp /> : <FaChevronDown />}
            </div>
          </motion.div>
          
          <AnimatePresence>
            {proyectosExpandidos && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 gap-8"
              >
                {proyectos.map((proyecto, index) => (
                  <motion.div
                    key={proyecto.titulo}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all"
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={proyecto.imagen} 
                        alt={proyecto.titulo} 
                        className="w-full h-full object-cover hover:scale-110 transition-transform"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-white">{proyecto.titulo}</h3>
                      <p className="text-gray-300 mb-4">{proyecto.descripcion}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {proyecto.tecnologias.map(tech => (
                          <span key={tech} className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        {proyecto.github && (
                          <a href={proyecto.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
                            <FaGithub className="text-xl" />
                          </a>
                        )}
                        {proyecto.demo && (
                          <a href={proyecto.demo} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
                            <FaCode className="text-xl" />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Sección de Certificados Desplegable */}
      <section className="py-20 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            className="flex items-center justify-between cursor-pointer mb-8"
            onClick={() => setCertificadosExpandidos(!certificadosExpandidos)}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <h2 className="text-3xl font-bold text-white">Certificados</h2>
            <div className="text-white text-2xl">
              {certificadosExpandidos ? <FaChevronUp /> : <FaChevronDown />}
            </div>
          </motion.div>
          
          <AnimatePresence>
            {certificadosExpandidos && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-3 gap-6"
              >
                {certificados.map((certificado, index) => (
                  <motion.a
                    key={certificado.titulo}
                    href={certificado.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all group"
                  >
                    <div className="w-16 h-16 mb-4">
                      <img 
                        src={certificado.icono} 
                        alt={certificado.emisor} 
                        className="w-full h-full object-contain" 
                      />
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{certificado.titulo}</h3>
                    <p className="text-gray-400">{certificado.emisor}</p>
                    <p className="text-gray-500 text-sm mt-2">{certificado.fecha}</p>
                  </motion.a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
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
              href="mailto:johnnymu0050@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:shadow-lg transition-all cursor-pointer group border border-gray-700"
            >
              <FaEnvelope className="text-4xl text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2 text-white">Correo Electrónico</h3>
              <p className="text-gray-300">johnnymu0050@gmail.com</p>
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/+573213069179"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:shadow-lg transition-all cursor-pointer group border border-gray-700"
            >
              <FaWhatsapp className="text-4xl text-green-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2 text-white">WhatsApp</h3>
              <p className="text-gray-300">+57 321 306 179</p>
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
  { 
    name: "React", 
    level: 90, 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" 
  },
  { 
    name: "Java", 
    level: 85, 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" 
  },
  { 
    name: "Spring Boot", 
    level: 80, 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" 
  },
  { 
    name: "React Native", 
    level: 85, 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" 
  },
  { 
    name: "Python", 
    level: 75, 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" 
  },
  { 
    name: "JavaScript", 
    level: 90, 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" 
  },
  { 
    name: "TypeScript", 
    level: 85, 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" 
  },
  { 
    name: "SQL", 
    level: 80, 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" 
  }
];

const proyectos = [
  {
    titulo: "Portfolio Personal",
    descripcion: "Sitio web de portfolio personal desarrollado con Next.js y TailwindCSS",
    imagen: "/images/project1.jpg",
    tecnologias: ["React", "Next.js", "TailwindCSS", "Framer Motion"],
    github: "https://github.com/tu-usuario/portfolio",
    demo: "https://tu-portfolio.vercel.app"
  },
  {
    titulo: "Aplicación de Gestión",
    descripcion: "Sistema completo de gestión empresarial con panel de administración",
    imagen: "/images/project2.jpg",
    tecnologias: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/tu-usuario/gestion-app",
    demo: "https://gestion-app.vercel.app"
  },
  {
    titulo: "App Móvil Fitness",
    descripcion: "Aplicación móvil para seguimiento de entrenamientos y nutrición",
    imagen: "/images/project3.jpg",
    tecnologias: ["React Native", "Firebase", "Redux"],
    github: "https://github.com/tu-usuario/fitness-app",
    demo: null
  },
  {
    titulo: "E-commerce API",
    descripcion: "API RESTful para tienda online con pasarela de pagos",
    imagen: "/images/project4.jpg",
    tecnologias: ["Java", "Spring Boot", "MySQL", "Docker"],
    github: "https://github.com/tu-usuario/ecommerce-api",
    demo: null
  }
];

const certificados = [
  {
    titulo: "Desarrollador Full Stack",
    emisor: "Bootcamp XYZ",
    fecha: "Abril 2023",
    icono: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    url: "https://example.com/certificate/123"
  },
  {
    titulo: "Especialista en React Native",
    emisor: "Udemy",
    fecha: "Enero 2023",
    icono: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    url: "https://example.com/certificate/456"
  },
  {
    titulo: "AWS Certified Developer",
    emisor: "Amazon Web Services",
    fecha: "Octubre 2022",
    icono: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original.svg",
    url: "https://example.com/certificate/789"
  },
  {
    titulo: "Programador Java Profesional",
    emisor: "Oracle",
    fecha: "Junio 2022",
    icono: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    url: "https://example.com/certificate/101"
  },
  {
    titulo: "Fundamentos de Machine Learning",
    emisor: "Coursera",
    fecha: "Marzo 2022",
    icono: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    url: "https://example.com/certificate/102"
  },
  {
    titulo: "Fundamentos de UI/UX",
    emisor: "Google",
    fecha: "Enero 2022",
    icono: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    url: "https://example.com/certificate/103"
  }
];

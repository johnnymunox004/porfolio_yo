'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <Link 
            href="/" 
            className="flex items-center font-bold text-xl"
          >
            johnny
          </Link>
          
          <div className="flex items-center space-x-8">
            {[
              ['Inicio', '/'],
              ['Proyectos', '/projects'],
              ['Blog', '/blog'],
              ['Contacto', '/contact'],
            ].map(([title, url]) => (
              <Link
                key={url}
                href={url}
                className={`hover:text-blue-600 transition-colors ${
                  pathname === url ? 'text-blue-600' : ''
                }`}
              >
                {title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
} 
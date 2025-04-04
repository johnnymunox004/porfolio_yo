"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex  h-16 justify-center">
          <Link href="/" className="flex items-center font-bold text-xl">
            JOHNNY MUÑOZ HERNANDEZ
          </Link>
        </div>
      </div>
    </nav>
  );
}

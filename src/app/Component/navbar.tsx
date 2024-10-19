"use client"; // Ensures this is treated as a client component

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Portfolio Name */}
        <div className="text-white text-3xl font-bold tracking-wide">
          <Link href="/">Saim Portfolio</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-300 hover:text-white transition-all duration-300 ease-in-out">
            Home
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-white transition-all duration-300 ease-in-out">
            About
          </Link>
          <Link href="/skills" className="text-gray-300 hover:text-white transition-all duration-300 ease-in-out">
            Skills
          </Link>
          <Link href="/projects" className="text-gray-300 hover:text-white transition-all duration-300 ease-in-out">
            Projects
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white transition-all duration-300 ease-in-out">
            Contact
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Link href="/" className="text-gray-300 hover:text-white transition-all duration-300 ease-in-out block py-2">
            Home
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-white transition-all duration-300 ease-in-out block py-2">
            About
          </Link>
          <Link href="/skills" className="text-gray-300 hover:text-white transition-all duration-300 ease-in-out block py-2">
            Skills
          </Link>
          <Link href="/projects" className="text-gray-300 hover:text-white transition-all duration-300 ease-in-out block py-2">
            Projects
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white transition-all duration-300 ease-in-out block py-2">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

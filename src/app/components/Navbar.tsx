"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeProvider";

export default function Navbar() {
  const pathname = usePathname();
  
  return (
    <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            Ahmed
          </Link>
          
          <div className="flex space-x-4">
          <Link 
              href="/about" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${pathname === '/about' ? 'bg-gray-800 text-white' : 'text-gray-300 hover:text-white hover:bg-gray-700/50'}`}
            >
              About
            </Link>
            <Link 
              href="/projects" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${pathname === '/projects' ? 'bg-gray-800 text-white' : 'text-gray-300 hover:text-white hover:bg-gray-700/50'}`}
            >
              Projects
            </Link>
            <Link 
              href="/contact" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${pathname === '/contact' ? 'bg-gray-800 text-white' : 'text-gray-300 hover:text-white hover:bg-gray-700/50'}`}
            >
              Contact
            </Link>
            <div className="ml-auto">
                <ThemeToggle />
            </div>
          </div>
          
        </div>
      </div>
    </nav>
  );
}
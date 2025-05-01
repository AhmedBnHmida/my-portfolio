import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Navbar from "./components/Navbar";
//import ThemeProvider from "./components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ahmed | Full Stack Developer",
  description: "Portfolio of Ahmed, a Full Stack Developer from Tunisia",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex flex-col items-center justify-center px-4 py-12">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
          👋 Hi, I'm Ahmed
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
          I'm a passionate Full Stack Developer from Tunisia specializing in modern web applications. 
          I transform ideas into seamless digital experiences.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/projects"
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-medium text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 border-2 border-cyan-600 dark:border-cyan-400 text-cyan-600 dark:text-cyan-400 rounded-lg font-medium hover:bg-cyan-600/10 dark:hover:bg-cyan-400/10 transition-all duration-300"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </main>
  );
}
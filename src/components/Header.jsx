import React from "react";
import { Link } from "react-router-dom";

export default function Header({ darkMode, toggleDarkMode }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-950/70 border-b border-gray-200/20 dark:border-white/10 transition-all duration-300">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
            TS
          </div>
          <div>
            <h1 className="text-base font-bold tracking-tight text-gray-900 dark:text-white">
              TravelShowcase
            </h1>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium -mt-0.5">
              Premium Galleries
            </p>
          </div>
        </Link>

        <nav className="hidden md:flex gap-1 items-center">
          {[
            { label: "Home", href: "/" },
            { label: "Gallery", href: "/gallery" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-all duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex gap-3 items-center">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 transition-all duration-200"
            aria-label="Toggle dark mode"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
          <button className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
            Get Started
          </button>
        </div>

        <button className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 transition-all duration-200">
          ☰
        </button>
      </div>
    </header>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function Header({ darkMode, toggleDarkMode }) {
  return (
    <header className="container mx-auto px-6 py-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold">
          TS
        </div>
        <div>
          <h1 className="text-lg font-semibold">TravelShowcase</h1>
          <p className="text-xs text-slate-500 dark:text-slate-300 -mt-1">
            Capture. Curate. Share.
          </p>
        </div>
      </div>
      <nav className="hidden md:flex gap-6 items-center text-sm">
        <Link to="/" className="hover:text-indigo-600">
          Home
        </Link>
        <Link to="/gallery" className="hover:text-indigo-600">
          Gallery
        </Link>
        <Link to="/about" className="hover:text-indigo-600">
          About
        </Link>
        <Link to="/contact" className="hover:text-indigo-600">
          Contact
        </Link>
        <button className="ml-2 px-4 py-2 rounded-full bg-indigo-600 text-white text-sm shadow">
          Get Started
        </button>
        <button
          onClick={toggleDarkMode}
          className="ml-2 px-3 py-1 rounded-full border border-slate-300 dark:border-slate-600"
        >
          {darkMode ? "🌞 Light" : "🌙 Dark"}
        </button>
      </nav>
      <button className="md:hidden p-2 rounded-lg bg-slate-200 dark:bg-gray-600">
        ☰
      </button>
    </header>
  );
}

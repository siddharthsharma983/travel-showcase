import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-12 py-8 text-sm text-slate-500 dark:text-slate-300">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>© {new Date().getFullYear()} TravelShowcase — Built with ❤️</div>
        <div className="flex gap-4">
          <Link
            to="/about"
            className="hover:text-slate-700 dark:hover:text-white"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-slate-700 dark:hover:text-white"
          >
            Contact
          </Link>
          <a href="#" className="hover:text-slate-700 dark:hover:text-white">
            Privacy
          </a>
          <a href="#" className="hover:text-slate-700 dark:hover:text-white">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}

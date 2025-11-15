import Header from "./components/Header";
import Footer from "./components/Footer";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { landingPlaces as places } from "./data";

export default function StunningLandingPage() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return (
    <div className="transition-colors duration-500">
      <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 text-slate-900 dark:text-white antialiased">
        <Header
          darkMode={darkMode}
          toggleDarkMode={() => setDarkMode(!darkMode)}
        />
        <main className="container mx-auto px-6">
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-10">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                className="text-4xl md:text-5xl font-extrabold leading-tight"
              >
                Showcase your travel photos like a pro —{" "}
                <span className="text-indigo-600 dark:text-indigo-400">
                  stunning presentation
                </span>{" "}
                every time.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
                className="mt-5 text-slate-600 dark:text-slate-300 max-w-xl"
              >
                Upload, organize and present your photos & videos in beautiful
                city & village galleries with smart layouts, subtle animations
                and fast loading.
              </motion.p>
              <div className="mt-6 flex gap-3">
                <button className="px-5 py-3 rounded-full bg-indigo-600 text-white font-medium shadow">
                  Create Showcase
                </button>
                <button className="px-5 py-3 rounded-full border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200">
                  View Demo
                </button>
              </div>
            </div>
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.03 }}
              transition={{ delay: 0.18, duration: 0.5 }}
              className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.pexels.com/photos/1144265/pexels-photo-1144265.jpeg"
                alt="hero"
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-4 left-4 bg-white/70 dark:bg-black/50 backdrop-blur-md rounded-xl p-3 text-sm">
                <div className="font-semibold">Venice, Italy</div>
                <div className="text-xs text-slate-600 dark:text-slate-300">
                  Sunset canal strolls
                </div>
              </div>
            </motion.div>
          </section>

          <section id="features" className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Smart Layouts",
                desc: "Auto-arrange photos for balance and rhythm.",
                icon: "🧭",
              },
              {
                title: "Fast Delivery",
                desc: "Optimized images with global CDN.",
                icon: "⚡",
              },
              {
                title: "Privacy Controls",
                desc: "Share publicly or keep it private.",
                icon: "🔒",
              },
            ].map((f, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * i }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md"
              >
                <div className="text-3xl">{f.icon}</div>
                <h3 className="mt-4 font-semibold text-lg">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  {f.desc}
                </p>
              </motion.article>
            ))}
          </section>

          <section id="gallery" className="mt-16">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold">Recent Galleries</h3>
              <a
                href="/gallery"
                className="text-sm text-indigo-600 dark:text-indigo-400"
              >
                See all
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {places.map((place, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="relative rounded-xl overflow-hidden shadow-sm bg-white dark:bg-gray-800 cursor-pointer"
                >
                  <img
                    src={place.img}
                    alt={place.name}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://via.placeholder.com/400x240/e0e0e0/9e9e9e?text=No+Image";
                    }}
                    className="object-cover w-full h-48 md:h-40"
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 bg-black/50 dark:bg-white/20 w-full p-2 text-white dark:text-black text-sm"
                  >
                    <div className="font-semibold">
                      {place.name}, {place.country}
                    </div>
                    <div className="text-xs">{place.info}</div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </section>

          <section
            id="pricing"
            className="mt-16 bg-gradient-to-r from-indigo-600 to-pink-500 rounded-2xl p-8 text-white"
          >
            <div className="md:flex items-center justify-between gap-6">
              <div>
                <h4 className="text-2xl font-bold">Start your free gallery</h4>
                <p className="mt-2 text-sm opacity-90">
                  Free for 14 days — upgrade anytime for more storage and
                  features.
                </p>
              </div>
              <div className="mt-4 md:mt-0 flex gap-3">
                <button className="px-6 py-3 rounded-full bg-white text-indigo-600 font-semibold">
                  Sign up free
                </button>
                <button className="px-6 py-3 rounded-full border border-white/50">
                  Contact sales
                </button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}

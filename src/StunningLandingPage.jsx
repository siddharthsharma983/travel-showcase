import Header from "./components/Header";
import Footer from "./components/Footer";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { landingPlaces as places } from "./data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

export default function StunningLandingPage() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return (
    <div className="transition-colors duration-500">
      <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white antialiased overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-30 mix-blend-multiply" />
          <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-100 dark:bg-cyan-900/20 rounded-full blur-3xl opacity-30 mix-blend-multiply" />
          <div className="absolute bottom-40 left-1/3 w-72 h-72 bg-teal-100 dark:bg-teal-900/20 rounded-full blur-3xl opacity-20 mix-blend-multiply" />
        </div>

        <Header
          darkMode={darkMode}
          toggleDarkMode={() => setDarkMode(!darkMode)}
        />

        <main className="relative">
          <section className="container mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="space-y-8">
                  <div>
                    <motion.div
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/50 dark:bg-blue-900/30 border border-blue-200/50 dark:border-blue-800/50 mb-6"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                      <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">New Features Available</span>
                    </motion.div>

                    <motion.h1
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                      className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
                    >
                      Showcase your travel
                      <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
                        like never before
                      </span>
                    </motion.h1>
                  </div>

                  <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed"
                  >
                    Create stunning gallery showcases for your travel adventures. Smart layouts, beautiful animations, and lightning-fast performance — all in one platform.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 pt-4"
                  >
                    <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                      Start Free Trial
                      <span>→</span>
                    </button>
                    <button className="px-8 py-4 rounded-xl border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white font-semibold hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-300">
                      Watch Demo
                    </button>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2"
                  >
                    <span className="text-lg">✨</span>
                    Free for 14 days • No credit card required
                  </motion.p>
                </div>
              </motion.div>

              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-3xl blur-2xl opacity-25 group-hover:opacity-35 transition-opacity duration-500"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl backdrop-blur">
                  <img
                    src="https://images.pexels.com/photos/1144265/pexels-photo-1144265.jpeg"
                    alt="Venice Gallery"
                    className="object-cover w-full h-96 md:h-[500px] group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="absolute bottom-6 left-6 bg-white/10 dark:bg-black/40 backdrop-blur-xl rounded-2xl p-5 border border-white/20 dark:border-white/10"
                  >
                    <div className="font-bold text-white text-lg">Venice, Italy</div>
                    <div className="text-sm text-gray-200 mt-1">Sunset canal strolls</div>
                    <div className="text-xs text-gray-300 mt-2">Beautiful waterfront gallery</div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>

          <section id="features" className="container mx-auto px-6 py-20 md:py-32">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Why creators love us
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
              >
                Everything you need to create and share stunning galleries
              </motion.p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: "🎨",
                  title: "Smart Layouts",
                  desc: "Automatically arrange photos with perfect balance and visual rhythm.",
                },
                {
                  icon: "⚡",
                  title: "Lightning Fast",
                  desc: "Global CDN with optimized images for instant loading anywhere.",
                },
                {
                  icon: "🔒",
                  title: "Privacy First",
                  desc: "Full control over sharing — public, private, or selective access.",
                },
              ].map((f, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {f.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {f.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          <section id="gallery" className="container mx-auto px-6 py-20 md:py-32">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
              <div>
                <motion.h2
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-bold mb-3"
                >
                  Featured Galleries
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-gray-600 dark:text-gray-400"
                >
                  Explore stunning galleries from around the world
                </motion.p>
              </div>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="/gallery"
                className="mt-6 md:mt-0 px-6 py-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-semibold hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-200 flex items-center gap-2"
              >
                View All Galleries
                <span>→</span>
              </motion.a>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {places.slice(0, 8).map((place, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <div className="group relative rounded-2xl overflow-hidden cursor-pointer h-56 md:h-64">
                    <div className="relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800">
                      <img
                        src={place.img}
                        alt={place.name}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "https://via.placeholder.com/400x300/e0e0e0/9e9e9e?text=No+Image";
                        }}
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <motion.div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
                      <div className="font-bold text-lg leading-tight">
                        {place.name}
                      </div>
                      <div className="text-sm text-gray-200 mt-1">{place.country}</div>
                      <div className="text-xs text-gray-300 mt-2">{place.info}</div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </section>

          <section id="cta" className="container mx-auto px-6 py-20 md:py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 p-12 md:p-20 shadow-2xl"
            >
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -mr-48 -mt-48"></div>
              </div>

              <div className="relative z-10 text-center max-w-2xl mx-auto">
                <motion.h2
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
                >
                  Ready to showcase your travels?
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-lg text-white/90 mb-8"
                >
                  Join thousands of creators building beautiful galleries
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <button className="px-8 py-4 rounded-xl bg-white text-blue-600 font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                    Start Free Trial
                  </button>
                  <button className="px-8 py-4 rounded-xl border-2 border-white/50 text-white font-bold hover:border-white hover:bg-white/10 transition-all duration-300">
                    Contact Sales
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}

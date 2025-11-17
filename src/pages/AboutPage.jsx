import React from "react";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-32 left-10 w-96 h-96 bg-blue-100 dark:bg-blue-900/10 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-32 right-10 w-96 h-96 bg-cyan-100 dark:bg-cyan-900/10 rounded-full blur-3xl opacity-15" />
      </div>

      <div className="relative container mx-auto px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-2xl text-gray-600 dark:text-gray-400">
            Our mission is to empower creators with beautiful tools
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                TravelShowcase was born from a passion for photography and a frustration with existing tools. We wanted to create something that made it effortless for travelers and photographers to share their work beautifully.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Today, thousands of creators use our platform to showcase their most precious memories and connect with audiences around the world.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-80 rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.pexels.com/photos/1144265/pexels-photo-1144265.jpeg"
              alt="Travel"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {[
            { number: "5K+", label: "Active Creators" },
            { number: "50K+", label: "Photos Showcased" },
            { number: "180+", label: "Countries Reached" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-700"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: "🎨", title: "Beauty", desc: "We believe in creating beautiful experiences" },
              { icon: "⚡", title: "Speed", desc: "Performance matters. We optimize everything" },
              { icon: "🔒", title: "Privacy", desc: "Your data and creations are always protected" },
              { icon: "💪", title: "Empowerment", desc: "We empower creators to own their work" },
            ].map((value, i) => (
              <motion.div
                key={i}
                className="p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

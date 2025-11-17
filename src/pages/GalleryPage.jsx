import React, { useState } from "react";
import { motion } from "framer-motion";
import { galleryPlaces as places } from "../data";
import GalleryCard from "../components/GalleryCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", ...new Set(places.map((p) => p.category))];
  const filteredPlaces =
    selectedCategory === "All"
      ? places
      : places.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100 dark:bg-blue-900/10 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-32 left-1/3 w-96 h-96 bg-cyan-100 dark:bg-cyan-900/10 rounded-full blur-3xl opacity-15" />
      </div>

      <div className="relative">
        <div className="container mx-auto px-6 pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Photo Gallery
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
              Explore stunning collections from destinations around the world
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap gap-3 mb-12"
          >
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
                    : "bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-800"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={selectedCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {filteredPlaces.map((place, index) => (
              <motion.div key={`${selectedCategory}-${index}`} variants={itemVariants}>
                <GalleryCard place={place} />
              </motion.div>
            ))}
          </motion.div>

          {filteredPlaces.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-lg text-gray-600 dark:text-gray-400">
                No galleries found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

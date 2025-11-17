import React from "react";
import { motion } from "framer-motion";

export default function GalleryCard({ place }) {
  return (
    <motion.div
      whileHover={{ scale: 1.08, y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative rounded-2xl overflow-hidden cursor-pointer"
    >
      <div className="relative h-64 md:h-56 overflow-hidden rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800">
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

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 flex flex-col justify-end p-4 text-white"
      >
        <div className="font-semibold text-lg leading-tight">
          {place.name}
        </div>
        <div className="text-sm text-gray-200 mt-1">{place.country}</div>
        <div className="text-xs text-gray-300 mt-2 opacity-90">{place.info}</div>
      </motion.div>

      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/20 backdrop-blur text-white text-xs">
          →
        </span>
      </div>
    </motion.div>
  );
}

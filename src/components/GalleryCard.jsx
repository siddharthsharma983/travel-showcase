import React from "react";
import { motion } from "framer-motion";

export default function GalleryCard({ place }) {
  return (
    <motion.div
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
  );
}

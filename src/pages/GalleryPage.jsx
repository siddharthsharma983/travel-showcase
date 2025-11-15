import React, { useState } from "react";
import { motion } from "framer-motion";
import { galleryPlaces as places } from "../data";
import GalleryCard from "../components/GalleryCard";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", ...new Set(places.map((p) => p.category))];
  const filteredPlaces =
    selectedCategory === "All"
      ? places
      : places.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-slate-900 dark:text-white">
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-6">📸 Gallery</h1>
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                selectedCategory === cat
                  ? "bg-indigo-600 text-white"
                  : "bg-white dark:bg-gray-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredPlaces.map((place, index) => (
            <GalleryCard key={index} place={place} />
          ))}
        </div>
      </div>
    </div>
  );
}

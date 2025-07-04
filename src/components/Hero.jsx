import React from "react";

export default function Hero() {
  return (
    <section className="bg-green-50 py-20 px-6 md:px-20 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-green-700">
        Welcome to HAPIBARA
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
        India’s first full-spectrum vegan lifestyle platform — where kindness meets design, and conscious choices come naturally.
      </p>
      <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition">
        Explore Recipes
      </button>
    </section>
  );
}

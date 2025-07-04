import React from "react";
import { FaCarrot } from "react-icons/fa";
import { GiFruitBowl, GiHealthPotion } from "react-icons/gi";

const Home = () => {
  return (
    <div className="bg-[#FFFDF5] text-gray-800">
      {/* Hero Section */}
      <section className="px-6 md:px-20 py-24 text-center">
        <h1 className="text-5xl font-bold text-green-900 mb-4">Discover Kind Living</h1>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
          One platform for all things vegan — food, lifestyle, and community. Curated for Indian homes, inspired by global compassion.
        </p>
        <button className="bg-green-800 text-white px-6 py-2 rounded-full hover:bg-green-900 transition">
          Explore Recipes
        </button>
      </section>

      {/* Category Highlights */}
      <section className="px-6 md:px-20 py-16 grid md:grid-cols-3 gap-8">
        {/* Clean Wellness */}
        <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition text-center">
          <GiHealthPotion className="text-5xl text-green-700 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-green-800 mb-2">Clean Wellness</h3>
          <p className="text-sm text-gray-600">
            Curated cruelty-free, clean self-care products to nourish your body and soul.
          </p>
        </div>

        {/* Eat Healthy Products */}
        <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition text-center">
          <FaCarrot className="text-5xl text-green-700 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-green-800 mb-2">Eat Healthy Products</h3>
          <p className="text-sm text-gray-600">
            Nutritious, delicious, plant-based picks to keep your body happy and your energy high.
          </p>
        </div>

        {/* Fun Fun */}
        <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition text-center">
          <GiFruitBowl className="text-5xl text-green-700 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-green-800 mb-2">Fun Fun</h3>
          <p className="text-sm text-gray-600">
            Discover quirky, joyful, food-inspired content to spice up your kind living journey.
          </p>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-[#E6F4EA] py-12 text-center">
        <h2 className="text-2xl font-bold text-green-900 mb-4">Join our movement</h2>
        <p className="text-gray-700 mb-6 max-w-lg mx-auto">
          From students to chefs — we’re building India’s biggest vegan community. Be part of the story.
        </p>
        <button className="bg-green-800 text-white px-6 py-2 rounded-full hover:bg-green-900 transition">
          Join Now
        </button>
      </section>
    </div>
  );
};

export default Home;

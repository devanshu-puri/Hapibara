import React from "react";
import { FaCheckCircle, FaLeaf, FaEnvelope, FaUsers, FaGift, FaUtensils, FaShoppingBag, FaComments, FaUserFriends } from "react-icons/fa";

export default function Waitlist() {
  return (
    <section className="bg-[#F7F8F3] text-gray-800 px-6 py-14 md:px-20 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-green-900">Be the First to Experience Kind Living</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          HAPIBARA — India’s first all-in-one vegan platform — is launching soon!  
          Get early access to recipes, cruelty-free brands, and a conscious community built for you.
        </p>
      </div>

      {/* Email Signup */}
      <div className="bg-white p-6 rounded-xl shadow-md max-w-2xl mx-auto space-y-4 text-center">
        <h2 className="text-2xl font-semibold text-green-800">Join the Waitlist & Get Exclusive Early Access</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="📧 Enter your email address"
            className="border border-gray-300 rounded-full px-5 py-3 w-full"
          />
          <button className="bg-green-800 text-white font-semibold px-6 py-3 rounded-full hover:bg-green-700 transition">
            ✅ Join Now
          </button>
        </div>
        <p className="text-sm text-gray-500">
          You’ll receive early invites, launch-only discounts, and access to community beta programs.
        </p>
      </div>

      {/* Why Join */}
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-center mb-6">💚 Why Join the Waitlist?</h3>
        <ul className="space-y-3 text-lg">
          <li><FaCheckCircle className="inline mr-2 text-green-700" /> Be among the first to explore our vegan recipe hub</li>
          <li><FaCheckCircle className="inline mr-2 text-green-700" /> Unlock early access to India’s kindest marketplace</li>
          <li><FaCheckCircle className="inline mr-2 text-green-700" /> Join invite-only founder AMAs, beta testing & virtual meetups</li>
          <li><FaCheckCircle className="inline mr-2 text-green-700" /> Get 15% off your first HAPIBARA product bundle</li>
          <li><FaCheckCircle className="inline mr-2 text-green-700" /> Be part of a growing community shaping the vegan future</li>
        </ul>
      </div>

      {/* Launch Features */}
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        <div>
          <h3 className="text-xl font-semibold mb-3">🧠 What You’ll Get at Launch</h3>
          <ul className="space-y-2 text-gray-700">
            <li><FaUtensils className="inline mr-2 text-green-600" /> <strong>Recipes:</strong> Curated plant-based dishes from across India and beyond</li>
            <li><FaShoppingBag className="inline mr-2 text-green-600" /> <strong>Products:</strong> Verified cruelty-free brands in skincare, food, fashion & more</li>
            <li><FaComments className="inline mr-2 text-green-600" /> <strong>Community:</strong> Connect with conscious creators & share your vegan journey</li>
            <li><FaLeaf className="inline mr-2 text-green-600" /> <strong>Personalization:</strong> Tailored for vegan-curious & committed users alike</li>
          </ul>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-xl font-semibold mb-3">🧑‍🤝‍🧑 What Early Users Say</h3>
          <ul className="text-gray-700 space-y-3 italic">
            <li>“This is the vegan platform India has been waiting for!”</li>
            <li>“The recipe previews alone are worth signing up for.”</li>
            <li>“Can’t wait to try those cruelty-free brands I’ve never seen before.”</li>
          </ul>
        </div>
      </div>

      {/* Bonus */}
      <div className="bg-green-50 p-6 rounded-xl shadow-inner max-w-4xl mx-auto text-center space-y-3">
        <FaGift className="text-4xl text-green-700 mx-auto" />
        <h3 className="text-xl font-bold">🐾 Bonus for Early Birds</h3>
        <p>Sign up now and stand a chance to win our <strong>“Kind Living Starter Kit”</strong>:</p>
        <ul className="text-gray-700 space-y-1">
          <li>🌿 Plant-based snacks</li>
          <li>🧴 Eco skincare minis</li>
          <li>🎒 A handmade vegan accessory</li>
        </ul>
        <p className="text-sm text-gray-600">Winners announced on launch week!</p>
      </div>

      {/* Final CTA */}
      <div className="text-center space-y-3 mt-10">
        <h2 className="text-2xl font-bold text-green-900">🎯 Let’s Start This Journey Together</h2>
        <p className="text-gray-700 text-lg max-w-xl mx-auto">
          Early access. Exclusive content. A kinder way to live.
        </p>
        <button className="bg-green-800 text-white font-semibold px-6 py-3 rounded-full hover:bg-green-700 transition mt-2">
          📩 Join the Waitlist Now
        </button>
      </div>
    </section>
  );
}

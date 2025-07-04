import React from "react";
import HeroImage from "../assets/images/image1.png";
import { FaUserCircle } from "react-icons/fa";

export default function AboutUs() {
  return (
    <section className="px-6 md:px-20 py-16 space-y-20 text-gray-800">
      {/* Our Story */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-4">Our Story</h2>
          <p className="text-lg">
            We’re Isha and Jayanth — two passionate minds who came together over a shared vision: to make kind living effortless, joyful, and accessible.
          </p>
          <p className="mt-4 text-lg">
            When we started our vegan journey, we faced the same challenges many of you face today — scattered resources, confusing labels, greenwashed products, and a lack of community. So, we created HAPIBARA.
          </p>
          <p className="mt-4 text-lg">
            A single space where delicious vegan food meets conscious fashion, clean wellness, and stories of people just like you — trying to live better, one kind choice at a time.
          </p>
        </div>
        <img src={HeroImage} alt="Our Story" className="rounded-xl w-full h-auto" />
      </div>

      {/* Our Mission */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg">
          To create a deeply rooted, vibrant vegan lifestyle platform that empowers people to live compassionately — through everyday choices in food, fashion, wellness, and community.
        </p>
      </div>

      {/* What We Stand For */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 mt-12">What We Stand For</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>🌱 Kindness, without compromise</li>
          <li>📦 Verified, clean, and cruelty-free product curation</li>
          <li>🧡 Support for small and ethical businesses</li>
          <li>🧠 Education, awareness, and cultural relevance</li>
          <li>🧍 Real stories from real people — across India and beyond</li>
        </ul>
      </div>

      {/* Meet the Founders */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Meet the Founders</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="text-center">
            <FaUserCircle className="text-6xl text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Isha – Co-Founder & COO</h3>
            <p className="mt-2 text-gray-700">
              Sustainability strategist, ethical sourcing expert, and a lifelong vegetarian-turned-vegan.
              With over 5 years in conscious consumer goods and food tech, Isha leads product curation, vendor partnerships, and operations at HAPIBARA. Her passion lies in making mindful choices both delightful and doable — especially for families and first-time vegans.
            </p>
            <p className="italic mt-2">“I wanted to build something my mother could use, love, and trust — that’s how personal HAPIBARA is to me.”</p>
          </div>

          <div className="text-center">
            <FaUserCircle className="text-6xl text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Jayanth Ramasami – Co-Founder & CEO</h3>
            <p className="mt-2 text-gray-700">
              A digital brand visionary with a background in product strategy, tech ventures, and storytelling.
              Over the past decade, Jayanth has launched community-first startups across fashion, fitness, and edtech — and is now channeling that experience to lead HAPIBARA's platform growth, design thinking, and brand evolution.
            </p>
            <p className="italic mt-2">“HAPIBARA is where empathy meets execution. It’s where passion, people, and purpose collide to create a better world.”</p>
          </div>
        </div>
      </div>

      {/* What Makes HAPIBARA Different */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 mt-16">🌱 What Makes HAPIBARA Different?</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>✅ India's first full-spectrum vegan lifestyle platform</li>
          <li>✅ A balance of taste, aesthetics, ethics, and ease-of-use</li>
          <li>✅ Built for real Indian homes and global consciousness</li>
          <li>✅ Powered by a diverse community — not just a product catalog</li>
          <li>✅ Inspired by compassion, designed for scale</li>
        </ul>
      </div>

      {/* Vision for the Future */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 mt-16">Vision for the Future</h2>
        <p className="text-lg">
          HAPIBARA is just the beginning.
          We're building a future where vegan choices are the norm — not the niche. Where kindness is built into every click. Where conscious living becomes second nature.
        </p>
        <p className="mt-4 text-lg">
          And we're bringing together creators, brands, parents, students, and changemakers to shape it.
        </p>
        <p className="mt-4 font-semibold text-green-700">
          Join us — because where kind living starts, a better world begins.
        </p>
      </div>
    </section>
  );
}
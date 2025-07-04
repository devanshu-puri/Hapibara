import React from "react";

export default function Features() {
  const features = [
    {
      title: "Vegan Food",
      desc: "Explore plant-based recipes tailored for Indian homes.",
      icon: "🥦", // replace with image or icon later
    },
    {
      title: "Clean Wellness",
      desc: "Curated cruelty-free, clean self-care products.",
      icon: "🧴",
    },
    {
      title: "Conscious Fashion",
      desc: "Style that doesn’t cost the planet — or animals.",
      icon: "👗",
    },
  ];

  return (
    <section className="px-6 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">What You’ll Find Here</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {features.map((f, index) => (
          <div key={index} className="p-6 bg-white shadow-md rounded-xl text-center">
            <div className="text-4xl mb-4">{f.icon}</div>
            <h3 className="text-xl font-semibold">{f.title}</h3>
            <p className="mt-2 text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

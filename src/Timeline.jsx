
import React, { useState } from "react";
import { motion } from "framer-motion";

const timelineData = {
  2025: [
    {
      title: "AI Integration",
      description: "Deployed advanced AI tools across all departments.",
      image: "https://images.unsplash.com/photo-1581090700227-1a28b1d6a47c"
    },
    {
      title: "Sustainability Launch",
      description: "Initiated carbon-neutral operations globally.",
      image: "https://images.unsplash.com/photo-1503437313881-503a91226402"
    }
  ],
  2024: [
    {
      title: "New Branding Rollout",
      description: "Unified global branding under new identity.",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
    },
    {
      title: "Employee Wellness",
      description: "Introduced mental health and wellness programs.",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2"
    }
  ]
};

const Timeline = () => {
  return (
    <div className="bg-white p-4 sm:p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-[#0098da]">Our Journey</h2>
      <div className="relative border-l-4 border-[#0098da] pl-6 space-y-12">
        {Object.entries(timelineData)
          .sort((a, b) => b[0] - a[0])
          .map(([year, initiatives]) => (
            <div key={year} className="relative">
              <div className="absolute -left-7 top-2 w-5 h-5 rounded-full bg-[#0098da] shadow-lg" />
              <h3 className="text-xl font-semibold text-[#0098da] mb-3">{year}</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {initiatives.map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="h-40 overflow-hidden relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="text-lg font-semibold text-[#0098da] mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;

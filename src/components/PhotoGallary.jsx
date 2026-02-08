import React from "react";
import aboutImg from "../assets/pl1.jpg";

const About = () => {
  return (
    <div className="bg-[#121212] text-white min-h-screen pb-24 font-['Inter']">
      {/* Page Title Section */}
      <div className="bg-black py-12 text-center mb-16 border-b border-gray-800">
        <h1 className="text-4xl font-black uppercase tracking-[0.4em] text-white font-['Montserrat']">
          About <span className="text-[#00a86b]">Us</span>
        </h1>
        <p className="text-gray-500 mt-4 text-xs uppercase tracking-widest font-bold">
          Discover the story of Blooming Oasis
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 space-y-20">
        {/* Section 1: Top Hero Card (Parent Insight Pattern) */}
        <div className="bg-[#1a1a1a] border border-gray-800 p-10 rounded-3xl hover:border-[#00a86b] transition-all duration-500 group relative overflow-hidden">
          {/* Subtle icon/number like insights */}
          <div className="absolute top-0 right-0 p-8 opacity-5 text-8xl font-black text-white select-none">
            01
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-[#121212] rounded-full flex items-center justify-center border border-gray-800 group-hover:border-[#00a86b] transition-colors">
                  <span className="text-2xl">🌺</span>
                </div>
                <div>
                  <h2 className="text-2xl font-black uppercase tracking-widest font-['Montserrat']">
                    Blooming Oasis
                  </h2>
                  <p className="text-[10px] text-[#00a86b] font-bold uppercase tracking-[0.2em]">
                    Our Identity
                  </p>
                </div>
              </div>
              <p className="text-gray-400 text-base leading-relaxed italic border-t border-gray-800 pt-6 group-hover:text-gray-300 transition-colors">
                "Blooming Oasis describes vibrant, lush, flower-filled gardens.
                Whether it's home decor or landscaping, we evoke images of
                abundant greenery and peaceful escapes."
              </p>
            </div>
            <div className="flex-1 w-full">
              <img
                src={aboutImg}
                alt="Garden"
                className="rounded-2xl w-full h-[300px] object-cover border border-gray-800 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Passion & Mission Cards (Exact Insight Card Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Passion Card */}
          <div className="bg-[#1a1a1a] border border-gray-800 p-12 rounded-3xl hover:border-[#00a86b] transition-all duration-500 group text-center">
            <div className="w-16 h-16 bg-[#121212] rounded-full mx-auto mb-8 flex items-center justify-center border border-gray-800 group-hover:border-[#00a86b] transition-colors">
              <span className="text-2xl">🌿</span>
            </div>
            <h3 className="text-xl font-black text-white mb-2 uppercase tracking-tighter font-['Montserrat']">
              Our Passion
            </h3>
            <p className="text-[10px] text-[#00a86b] mb-8 font-bold uppercase tracking-[0.2em]">
              Crafting Green Spaces
            </p>
            <p className="text-gray-500 text-sm leading-8 italic border-t border-gray-800 pt-8 group-hover:text-gray-300 transition-colors">
              "Blooming Oasis started as a small dream by plant lovers who
              wanted to bring greenery into modern indoor spaces. We believe
              nature is an essential part of daily life."
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-[#1a1a1a] border border-gray-800 p-12 rounded-3xl hover:border-red-500 transition-all duration-500 group text-center">
            <div className="w-16 h-16 bg-[#121212] rounded-full mx-auto mb-8 flex items-center justify-center border border-gray-800 group-hover:border-red-500 transition-colors">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-black text-white mb-2 uppercase tracking-tighter font-['Montserrat']">
              Our Mission
            </h3>
            <p className="text-[10px] text-red-500 mb-8 font-bold uppercase tracking-[0.2em]">
              Education & Sustainability
            </p>
            <p className="text-gray-500 text-sm leading-8 italic border-t border-gray-800 pt-8 group-hover:text-gray-300 transition-colors">
              "Our mission is to provide sustainable, easy-to-care-for plants
              that enhance well-being. We aim to educate new plant parents for a
              thriving indoor garden ecosystem."
            </p>
          </div>
        </div>

        {/* Section 3: Responsible Sourcing (Large Insight Pattern) */}
        <div className="bg-[#1a1a1a] border border-gray-800 p-10 rounded-3xl hover:border-[#00a86b] transition-all duration-500 group">
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-3xl font-black uppercase tracking-tighter font-['Montserrat']">
              Responsible <span className="text-[#00a86b]">Sourcing</span>
            </h2>
            <div className="h-[1px] flex-1 bg-gray-800 group-hover:bg-[#00a86b] transition-colors"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-2">
              {[
                {
                  label: "Ethical Cultivation",
                  val: "Grown by trusted local nurseries with water-efficient irrigation.",
                },
                {
                  label: "Eco-Packaging",
                  val: "Biodegradable materials used for all our shipping needs.",
                },
                {
                  label: "Partnerships",
                  val: "Focusing on reforestation and environmental protection.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-6 border-b border-gray-800 group/row hover:bg-[#121212] rounded-xl transition-all"
                >
                  <span className="font-black text-[#00a86b] uppercase text-[10px] tracking-widest mb-2 sm:mb-0">
                    {item.label}
                  </span>
                  <span className="text-gray-500 group-hover/row:text-gray-300 transition-colors text-sm italic">
                    "{item.val}"
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-[#121212] p-10 rounded-3xl border border-gray-800 flex flex-col justify-center items-center text-center group-hover:border-[#00a86b] transition-all">
              <div className="text-5xl mb-6 grayscale group-hover:grayscale-0 transition-all">
                🌲
              </div>
              <h3 className="text-[#00a86b] font-black mb-4 uppercase tracking-[0.2em] text-[10px]">
                The Green Promise
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed italic group-hover:text-gray-400">
                "We prioritize sustainability through eco-friendly packaging and
                responsible cultivation methods."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

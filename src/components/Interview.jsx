import React, { useState } from "react";

const ProductPage = () => {
  const [selectedSize, setSelectedSize] = useState("");

  return (
    <div className="bg-[#121212] text-white min-h-screen">
      {/* 1. Header/Purchase Section */}
      <section className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row gap-10">
        {/* Left: Video Player */}
        <div className="flex-1">
          <div className="relative aspect-[9/16] md:aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-gray-800">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/4mNOXrdimJA?autoplay=0&rel=0"
              title="The AI plant pot"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="mt-4 text-sm text-gray-500 text-center italic">
            Experience the future of plant care. ✨
          </p>
        </div>

        {/* Right: Product Details */}
        <div className="flex-1 bg-[#1a1a1a] p-8 rounded-2xl border border-gray-800 shadow-xl">
          <div className="mb-4">
            <span className="text-[#00a86b] text-xs font-bold tracking-widest uppercase">
              Premium Collection
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-2">
            Monstera Deliciosa
          </h1>
          <p className="text-gray-400 italic mb-6">
            Lush tropical plant with iconic split leaves
          </p>

          <div className="flex items-baseline gap-2 mb-8">
            <span className="text-3xl font-bold text-[#00a86b]">Tk 150.00</span>
            <span className="text-gray-600 line-through text-lg">
              Tk 200.00
            </span>
          </div>

          <div className="space-y-6">
            {/* Size Selector */}
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-2">
                Select Plant Size
              </label>
              <select
                className="w-full p-4 bg-[#121212] border border-gray-800 rounded-lg focus:border-[#00a86b] focus:ring-1 focus:ring-[#00a86b] outline-none transition-all text-white"
                onChange={(e) => setSelectedSize(e.target.value)}
              >
                <option value="">Choose a size</option>
                <option value="small">Small (6")</option>
                <option value="medium">Medium (10")</option>
                <option value="large">Large (14")</option>
              </select>
            </div>

            {/* Add-ons */}
            <div className="space-y-3">
              <label className="block text-xs font-bold text-gray-500 uppercase mb-2">
                Custom Upgrades
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="flex items-center gap-3 p-4 bg-[#121212] border border-gray-800 rounded-lg hover:border-[#00a86b] transition-all cursor-pointer group">
                  <input type="checkbox" className="accent-[#00a86b] h-5 w-5" />
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                    Ceramic Pot (+50)
                  </span>
                </label>
                <label className="flex items-center gap-3 p-4 bg-[#121212] border border-gray-800 rounded-lg hover:border-[#00a86b] transition-all cursor-pointer group">
                  <input type="checkbox" className="accent-[#00a86b] h-5 w-5" />
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                    Wooden Stand (+80)
                  </span>
                </label>
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-[#00a86b] hover:bg-[#008f5a] text-white font-black py-5 rounded-xl shadow-lg shadow-[#00a86b]/20 uppercase tracking-[0.2em] transition-all active:scale-[0.98] mt-4">
              Add To Cart
            </button>
          </div>
        </div>
      </section>

      {/* 2. Specification Table */}
      <section className="bg-black py-20 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-3xl font-bold uppercase tracking-tighter">
              Specifications
            </h2>
            <div className="h-px flex-1 bg-gray-800"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <table className="w-full text-left">
                <tbody>
                  {[
                    ["Light", "Bright, indirect sunlight"],
                    ["Watering", "Once a week (allow soil to dry)"],
                    ["Toxicity", "Toxic to pets"],
                    ["Repotting", "Every 18-24 months"],
                  ].map(([label, value], i) => (
                    <tr
                      key={i}
                      className="border-b border-gray-800 group hover:bg-[#1a1a1a] transition-colors"
                    >
                      <td className="py-6 px-4 font-bold text-[#00a86b] uppercase text-xs w-1/3">
                        {label}
                      </td>
                      <td className="py-6 px-4 text-gray-400 group-hover:text-white transition-colors">
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-[#1a1a1a] p-10 rounded-2xl border border-gray-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl">
                🌿
              </div>
              <h3 className="text-[#00a86b] font-black mb-4 uppercase tracking-widest text-sm">
                Pro Growth Tip
              </h3>
              <p className="text-gray-400 leading-relaxed italic relative z-10">
                "Wipe the leaves with a damp cloth to keep them shiny and
                maximize photosynthesis. Your Monstera will grow much faster!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Community Feedback */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <h2 className="text-4xl font-black text-center mb-16 uppercase tracking-tighter">
          Parent <span className="text-[#00a86b]">Insights</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-[#1a1a1a] border border-gray-800 p-10 rounded-2xl hover:border-[#00a86b] transition-all duration-500 group"
            >
              <div className="w-14 h-14 bg-[#121212] rounded-full mb-6 flex items-center justify-center border border-gray-800 group-hover:border-[#00a86b] transition-colors">
                <span className="text-xl">👤</span>
              </div>
              <h4 className="font-bold text-white mb-1">Rafiul</h4>
              <p className="text-[10px] text-[#00a86b] mb-6 font-bold uppercase tracking-[0.2em]">
                Indoor Specialist
              </p>
              <p className="text-gray-500 text-sm leading-relaxed border-t border-gray-800 pt-6 group-hover:text-gray-300 transition-colors">
                "The Ivy AI pot integrated perfectly. Best decision for my home
                office setup."
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Contact/Tip Form */}
      <section className="max-w-3xl mx-auto px-4 py-20 mb-24 bg-[#1a1a1a] rounded-3xl border border-gray-800">
        <h2 className="text-2xl font-bold text-center mb-8 uppercase tracking-widest">
          Share Your Experience
        </h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-4 bg-[#121212] border border-gray-800 rounded-lg focus:border-[#00a86b] outline-none text-white"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 bg-[#121212] border border-gray-800 rounded-lg focus:border-[#00a86b] outline-none text-white"
            />
          </div>
          <textarea
            placeholder="Your plant tip..."
            rows="4"
            className="w-full p-4 bg-[#121212] border border-gray-800 rounded-lg focus:border-[#00a86b] outline-none text-white"
          ></textarea>
          <div className="text-center">
            <button className="bg-white text-black px-12 py-4 font-black uppercase tracking-widest hover:bg-[#00a86b] hover:text-white transition-all rounded-full">
              Submit Tip
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ProductPage;

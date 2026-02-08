import React, { useState } from "react";

const PlantMatchmaker = () => {
  const [formData, setFormData] = useState({
    sunlight: "",
    careLevel: "",
    petFriendly: "",
  });

  const handleSearch = () => {
    console.log("Searching for plants with:", formData);
    // Logic to filter plants goes here
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 p-8 bg-gray-50 min-h-[500px] px-40">
      {/* Left Column: The Quiz Card */}
      <div className="flex-1 bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
        <div className="bg-[#d9e8df] p-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            Find Your Perfect Plant!
          </h2>
        </div>

        <div className="p-8 space-y-6">
          <p className="text-sm text-gray-600 leading-relaxed">
            Take our <span className="font-bold">Plant Matchmaker Quiz</span>{" "}
            and discover plants recommended just for your space and lifestyle.
          </p>

          <div className="space-y-4">
            {/* Sunlight Dropdown */}
            <div>
              <label className="block text-sm font-bold text-gray-800 mb-2">
                How much sunlight does your space get?
              </label>
              <select
                className="w-full p-2 border text-black border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-emerald-500 outline-none"
                onChange={(e) =>
                  setFormData({ ...formData, sunlight: e.target.value })
                }
              >
                <option>Select One</option>
                <option value="low">Low Light</option>
                <option value="indirect">Bright Indirect</option>
                <option value="direct">Direct Sunlight</option>
              </select>
            </div>

            {/* Care Level Dropdown */}
            <div>
              <label className="block text-sm font-bold text-gray-800 mb-2">
                Preferred Care Level
              </label>
              <select
                className="w-full p-2 border text-black border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-emerald-500 outline-none"
                onChange={(e) =>
                  setFormData({ ...formData, careLevel: e.target.value })
                }
              >
                <option>Select One</option>
                <option value="easy">Beginner (Hard to kill)</option>
                <option value="moderate">Intermediate</option>
                <option value="high">Plant Parent Pro</option>
              </select>
            </div>

            {/* Pet Friendly Dropdown */}
            <div>
              <label className="block text-sm font-bold text-gray-800 mb-2">
                Need pet-friendly plants?
              </label>
              <select
                className="w-full p-2 text-black border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-emerald-500 outline-none"
                onChange={(e) =>
                  setFormData({ ...formData, petFriendly: e.target.value })
                }
              >
                <option>Select One</option>
                <option value="yes">Yes, please!</option>
                <option value="no">Doesn't matter</option>
              </select>
            </div>
          </div>

          <button
            onClick={handleSearch}
            className="w-full bg-[#1e8449] hover:bg-[#196f3d] text-white font-semibold py-3 rounded-md transition duration-200"
          >
            Find My plants
          </button>
        </div>
      </div>

      {/* Right Column: Recommendations Placeholder */}
      <div className="flex-1 bg-[#dcf5ff] rounded-lg flex flex-col items-center justify-center p-12 text-center min-h-[300px]">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Recommended Plants For You
        </h2>
        <div className="text-5xl text-emerald-700">
          {/* Using a simple emoji/icon combo to mimic your image */}
          ☀️🪴
        </div>
      </div>
    </div>
  );
};

export default PlantMatchmaker;

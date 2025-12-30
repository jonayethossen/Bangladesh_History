import React from "react";
import InterviewImage from "../assets/fozlo.jpg";

export default function InterviewSection() {
  return (
    <div className="bg-[#121212] min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#00a86b] uppercase tracking-widest">
            Voices of Freedom
          </h2>
          <div className="h-1 w-20 bg-[#f42a41] mx-auto mt-2"></div>
        </div>

        {/* Hero Content Area */}
        <div className="hero bg-[#1a1a1a] rounded-3xl overflow-hidden shadow-2xl border border-gray-800">
          <div className="hero-content flex-col lg:flex-row gap-10 p-8 lg:p-12">
            {/* Person Image & Media Controls */}
            <div className="flex flex-col items-center gap-6">
              <img
                src={InterviewImage}
                className="max-w-xs rounded-2xl shadow-2xl border-2 border-[#00a86b] object-cover h-80"
                alt="Adv. Fozlur Rahman Khan"
              />

              {/* Audio/Video Access */}
              <div className="w-full space-y-3">
                <button className="btn btn-block bg-[#00a86b] hover:bg-[#008f5a] text-white border-none">
                  <span>▶</span> Play Interview Audio
                </button>
                <button className="btn btn-block btn-outline border-gray-600 text-gray-400 hover:bg-[#1a1a1a]">
                  Watch Video Testimony
                </button>
              </div>
            </div>

            {/* Biography & Summary */}
            <div className="text-white">
              <h1 className="text-4xl font-bold text-[#00a86b] mb-2">
                বীর মুক্তিযোদ্ধা এড. মো. ফজলুর রহমান খান
              </h1>
              <p className="text-[#f42a41] font-semibold text-sm mb-6">
                সাবেক এমপি | মহান মুক্তিযুদ্ধের অন্যতম সংগঠক | বাঘমারা ক্যাম্প
                কমান্ডার (১৯৭১)
              </p>

              <div className="space-y-4 text-gray-300 leading-relaxed text-justify">
                <p>
                  বীর মুক্তিযোদ্ধা এডভোকেট মো. ফজলুর রহমান খান (জ. ১৯৩৩ – মৃ.
                  ২০০৮) ভাষা আন্দোলন ও মহান মুক্তিযুদ্ধের অন্যতম সংগঠক। তিনি
                  নেত্রকোণা সদর আসনের তিনবারের সাবেক এমপি ও জেলা আওয়ামী লীগের
                  দীর্ঘদিনের সভাপতি ছিলেন।
                </p>
                <p>
                  <strong>মুক্তিযুদ্ধে ভূমিকা:</strong> ভাষা আন্দোলন, ছয় দফা ও
                  মুক্তিযুদ্ধে সক্রিয় ভূমিকার জন্য একাধিকবার কারাবরণ করেন এবং
                  ১৯৭১ সালে বাঘমারা ক্যাম্পের অধীনে নেতৃত্ব দেন।
                </p>
                <p className="bg-[#121212] p-4 rounded-lg border-l-4 border-[#00a86b] italic">
                  "সাক্ষাৎকারের সারসংক্ষেপ: ১৯৭১ সালের যুদ্ধের কৌশল, বাঘমারা
                  ক্যাম্পের প্রতিরোধ এবং মুক্তিযোদ্ধাদের প্রশিক্ষণের স্মৃতিচারণ
                  করেছেন এই বীর যোদ্ধা।"
                </p>
              </div>

              {/* Achievement Badges */}
              <div className="mt-8 flex flex-wrap gap-2">
                <div className="badge badge-outline border-gray-600 p-3 text-xs">
                  বাংলাদেশ সংবিধানে স্বাক্ষরকারী
                </div>
                <div className="badge badge-outline border-[#00a86b] p-3 text-xs text-[#00a86b]">
                  সিলভার অ্যাওয়ার্ড (২০২৩)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

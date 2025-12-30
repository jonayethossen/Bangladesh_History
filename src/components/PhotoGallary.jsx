import React from "react";
// আপনার assets ফোল্ডার থেকে ছবিগুলো ইমপোর্ট করুন
import GalleryImage1 from "../assets/123.jpg";
import GalleryImage2 from "../assets/Mrchowdhury.jpg";
import GalleryImage3 from "../assets/fozlo.jpg";

const GallerySection = () => {
  // ছবির ডাটা অ্যারে
  const photos = [
    {
      id: 1,
      src: GalleryImage1,
      title: "Historical Document 1",
      desc: "Rare archive from 1971",
    },
    {
      id: 2,
      src: GalleryImage2,
      title: "Mr. Chowdhury",
      desc: "Freedom Fighter Testimony",
    },
    {
      id: 3,
      src: GalleryImage3,
      title: "Fozlo Mia",
      desc: "War Veteran Portrait",
    },
    {
      id: 4,
      src: GalleryImage1,
      title: "Archive Photo",
      desc: "Liberation War Memory",
    },
    {
      id: 5,
      src: GalleryImage2,
      title: "Interview Session",
      desc: "Recording the history",
    },
    {
      id: 6,
      src: GalleryImage3,
      title: "Historical Site",
      desc: "Significant location of 1971",
    },
  ];

  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#006a4e] mb-4 uppercase tracking-wider">
            Photo Gallery
          </h2>
          <div className="h-1 w-20 bg-[#f42a41] mx-auto"></div>
          <p className="mt-4 text-gray-600 italic">
            Visual glimpses of the Bangladesh Liberation War and its heroes.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-xl shadow-lg border border-gray-200 cursor-pointer"
            >
              {/* Image */}
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-72 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />

              {/* Hover Overlay - যখন মাউস ছবির ওপর নিবেন */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4">
                <h3 className="text-xl font-bold mb-2">{photo.title}</h3>
                <p className="text-sm text-center text-gray-200">
                  {photo.desc}
                </p>
                <button className="mt-4 btn btn-xs btn-outline text-white border-white hover:bg-white hover:text-black">
                  View Full
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;

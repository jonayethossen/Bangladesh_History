import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ContactSection = () => {
  return (
    <section className="py-12 md:py-20 bg-[#121212] text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#00a86b] tracking-tight">
              Get in Touch
            </h2>
            <div className="h-1 w-16 bg-[#f42a41]"></div>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed text-justify">
              Have questions or want to contribute to the archive? Feel free to
              reach out. Your contributions help keep the history of the
              Liberation War alive for future generations.
            </p>

            <div className="space-y-6 mt-8">
              <div className="flex items-center gap-4 md:gap-5 group">
                <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full bg-[#1e1e1e] flex items-center justify-center group-hover:bg-[#00a86b] transition-all">
                  <span className="text-lg md:text-xl text-white">
                    <FaLocationDot />
                  </span>
                </div>
                <div>
                  <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest">
                    Location
                  </p>
                  <p className="font-medium text-sm md:text-base">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 md:gap-5 group">
                <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full bg-[#1e1e1e] flex items-center justify-center group-hover:bg-[#00a86b] transition-all">
                  <span className="text-lg md:text-xl text-white">
                    <MdEmail />
                  </span>
                </div>
                <div className="break-all">
                  <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest">
                    Email
                  </p>
                  <p className="font-medium text-sm md:text-base">
                    admin@liberationwararchive.bd
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#1e1e1e] p-6 md:p-8 rounded-2xl md:rounded-3xl border border-gray-800 shadow-2xl">
            <form
              className="space-y-4 md:space-y-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] md:text-xs font-bold text-gray-400 uppercase">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 rounded-lg bg-[#2a2a2a] border border-gray-700 text-white focus:border-[#00a86b] focus:outline-none transition-colors text-sm"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] md:text-xs font-bold text-gray-400 uppercase">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg bg-[#2a2a2a] border border-gray-700 text-white focus:border-[#00a86b] focus:outline-none transition-colors text-sm"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] md:text-xs font-bold text-gray-400 uppercase">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="e.g. Contribution of Documents"
                  className="w-full px-4 py-3 rounded-lg bg-[#2a2a2a] border border-gray-700 text-white focus:border-[#00a86b] focus:outline-none transition-colors text-sm"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] md:text-xs font-bold text-gray-400 uppercase">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg bg-[#2a2a2a] border border-gray-700 text-white focus:border-[#00a86b] focus:outline-none transition-colors text-sm resize-none"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] md:text-xs font-bold text-gray-400 uppercase italic">
                  Attach Documents or Photos
                </label>
                <input
                  type="file"
                  className="block w-full text-sm text-gray-400
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-xs file:font-semibold
                    file:bg-[#2a2a2a] file:text-gray-300
                    hover:file:bg-[#333333] cursor-pointer"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 md:py-4 bg-[#00a86b] hover:bg-[#008f5a] text-white rounded-lg font-bold shadow-lg shadow-[#00a86b]/20 transition-all active:scale-[0.98] text-sm md:text-base mt-2"
              >
                Send Contribution / Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

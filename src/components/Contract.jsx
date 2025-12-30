import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ContactSection = () => {
  return (
    <section className="py-20 bg-[#121212] text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contract Information */}
          <div className="space-y-6">
            <h2 className="text-4xl font-extrabold text-[#00a86b] tracking-tight">
              Get in Touch
            </h2>
            <div className="h-1 w-16 bg-[#f42a41]"></div>
            <p className="text-gray-400 text-lg leading-relaxed">
              Have questions or want to contribute to the archive? Feel free to
              reach out. Your contributions help keep the history of the
              Liberation War alive for future generations.
            </p>

            <div className="space-y-6 mt-10">
              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-full bg-[#1e1e1e] flex items-center justify-center group-hover:bg-[#00a86b] transition-colors">
                  <span className="text-xl">
                    <FaLocationDot />
                  </span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase">Location</p>
                  <p className="font-medium">Dhaka, Bangladesh</p>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-full bg-[#1e1e1e] flex items-center justify-center group-hover:bg-[#00a86b] transition-colors">
                  <span className="text-xl">
                    <MdEmail />
                  </span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase">Email</p>
                  <p className="font-medium">admin@liberationwararchive.bd</p>
                </div>
              </div>
            </div>
          </div>

          {/* contract form */}
          <div className="bg-[#1e1e1e] p-8 rounded-3xl border border-gray-800 shadow-2xl">
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="form-control">
                  <label className="label text-xs font-bold text-gray-400 uppercase">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="input bg-[#2a2a2a] border-gray-700 text-white focus:border-[#00a86b] focus:outline-none"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label text-xs font-bold text-gray-400 uppercase">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="input bg-[#2a2a2a] border-gray-700 text-white focus:border-[#00a86b] focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div className="form-control">
                <label className="label text-xs font-bold text-gray-400 uppercase">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="e.g. Contribution of Documents"
                  className="input bg-[#2a2a2a] border-gray-700 text-white focus:border-[#00a86b] focus:outline-none"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label text-xs font-bold text-gray-400 uppercase">
                  Message
                </label>
                <textarea
                  className="textarea bg-[#2a2a2a] border-gray-700 text-white h-28 focus:border-[#00a86b] focus:outline-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              {/* File Upload for Contribution  */}
              <div className="form-control">
                <label className="label text-xs font-bold text-gray-400 uppercase italic">
                  Attach Documents or Photos
                </label>
                <input
                  type="file"
                  className="file-input file-input-bordered bg-[#2a2a2a] border-gray-700 w-full text-gray-400"
                />
              </div>

              <button
                type="submit"
                className="btn bg-[#00a86b] hover:bg-[#008f5a] text-white w-full border-none mt-4 font-bold shadow-lg shadow-[#00a86b]/20"
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

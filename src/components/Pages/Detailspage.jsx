import React from "react";
import { useParams, useNavigate } from "react-router";

const DocumentDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const documents = [
    {
      id: 1,
      title: "Instrument of Surrender",
      type: "Treaty",
      date: "16 Dec 1971",
      source: "National Museum",
      desc: "Official surrender of Pakistan Army.",
      longDesc:
        "The Instrument of Surrender was the written agreement that enabled the surrender of the Pakistan Armed Forces Eastern Command in the Bangladesh Liberation War. It was signed at the Ramna Race Course in Dhaka on 16 December 1971.",
    },
    {
      id: 2,
      title: "Independence Declaration",
      type: "Declaration",
      date: "26 Mar 1971",
      source: "Govt Archive",
      desc: "Radio broadcast by Bangabandhu.",
      longDesc:
        "The declaration of independence was made by Sheikh Mujibur Rahman in the early hours of March 26, 1971. This marked the official beginning of the liberation struggle of the Bengali people.",
    },
    {
      id: 3,
      title: "Mujibnagar Govt Letter",
      type: "Correspondence",
      date: "April 1971",
      source: "Official Records",
      desc: "Formal government correspondence.",
      longDesc:
        "These letters represent the formal communications of the Mujibnagar Government, establishing the administrative and diplomatic framework of the newly declared nation during the war.",
    },
  ];

  const doc = documents.find((item) => item.id === parseInt(id));

  if (!doc) {
    return (
      <div className="bg-[#121212] min-h-screen flex items-center justify-center">
        <h2 className="text-white text-2xl font-bold">Document Not Found!</h2>
      </div>
    );
  }

  return (
    <div className="bg-[#121212] min-h-screen text-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="btn btn-sm btn-outline text-gray-400 mb-8 hover:bg-[#00a86b] hover:border-[#00a86b]"
        >
          ← Back to Catalog
        </button>

        <div className="bg-[#1e1e1e] p-8 md:p-12 rounded-3xl border border-gray-800 shadow-2xl">
          <div className="mb-6">
            <span className="text-[#f42a41] text-xs font-bold uppercase tracking-widest">
              {doc.type}
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#00a86b] mt-3">
              {doc.title}
            </h1>
          </div>

          <div className="flex flex-wrap gap-4 mb-10 border-y border-gray-800 py-6">
            <div className="flex-1 min-w-[150px]">
              <p className="text-gray-500 text-xs uppercase mb-1">Date</p>
              <p className="text-lg font-medium">{doc.date}</p>
            </div>
            <div className="flex-1 min-w-[150px]">
              <p className="text-gray-500 text-xs uppercase mb-1">Source</p>
              <p className="text-lg font-medium">{doc.source}</p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-3">
                Brief Summary
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed italic border-l-4 border-[#00a86b] pl-4">
                "{doc.desc}"
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">
                Full Historical Record
              </h3>
              <p className="text-gray-400 leading-8 text-justify">
                {doc.longDesc}
              </p>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-gray-800 text-center">
            <p className="text-xs text-gray-600">
              © Digital Archive of Bangladesh Liberation War, 1971
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentDetails;

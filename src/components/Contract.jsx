import React, { useState } from "react";

const Contact = () => {
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm your Plant Specialist. How can I help you today?",
      sender: "bot",
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessages = [...messages, { text: inputValue, sender: "user" }];
    setMessages(newMessages);
    setInputValue("");

    // Bot Auto-reply logic
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "Got it! Our specialist will respond shortly. 🌿",
          sender: "bot",
        },
      ]);
    }, 1000);
  };

  return (
    <div className="bg-[#121212] min-h-screen pb-12 text-white">
      {/* Header Section */}
      <div className="bg-[#1e1e1e] border-b border-gray-800 py-10 text-center mb-10">
        <h1 className="text-4xl font-extrabold text-[#00a86b] tracking-tight">
          CONTACT <span className="text-white">US</span>
        </h1>
        <p className="text-gray-400 mt-2">
          We're here to help you and your plants grow.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        {/* --- Dark Chat Bot Section --- */}
        <div className="bg-[#1e1e1e] rounded-xl shadow-2xl overflow-hidden mb-16 border border-gray-800">
          <div className="bg-[#00a86b]/10 py-4 text-center border-b border-gray-800">
            <h2 className="text-xl font-bold text-[#00a86b]">
              Live Chat with Plant Specialist
            </h2>
          </div>

          <div className="p-6">
            {/* Chat Window */}
            <div className="h-56 overflow-y-auto mb-4 space-y-4 border-b border-gray-700 pb-4 custom-scrollbar">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[75%] p-3 rounded-2xl text-sm leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-[#00a86b] text-white rounded-tr-none"
                        : "bg-[#2a2a2a] text-gray-200 rounded-tl-none border border-gray-700"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Ask me about your plant..."
                className="flex-1 bg-[#121212] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00a86b] transition-all"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <button
                onClick={handleSendMessage}
                className="bg-[#00a86b] hover:bg-[#008f5a] text-white px-6 py-3 rounded-lg font-bold transition-all active:scale-95"
              >
                Send
              </button>
            </div>
          </div>
        </div>

        {/* --- Dark Contact Form --- */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Contact Form</h2>
          <div className="w-20 h-1 bg-[#00a86b] mx-auto mb-10"></div>

          <form className="space-y-6 text-left max-w-2xl mx-auto bg-[#1e1e1e] p-8 rounded-xl border border-gray-800 shadow-lg">
            <div>
              <label className="block text-gray-400 text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-[#121212] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-[#00a86b] transition-all"
              />
            </div>

            <div>
              <label className="block text-gray-400 text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-[#121212] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-[#00a86b] transition-all"
              />
            </div>

            <div>
              <label className="block text-gray-400 text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="How can we help?"
                className="w-full bg-[#121212] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-[#00a86b] transition-all"
              ></textarea>
            </div>

            <button className="w-full bg-white hover:bg-gray-200 text-black font-bold py-4 rounded-lg transition-all uppercase tracking-widest text-sm">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

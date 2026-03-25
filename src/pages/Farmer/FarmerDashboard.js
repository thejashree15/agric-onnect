import React from "react";

export default function FarmerDashboard({ setPage, lang = "en" }) {

  const text = {
    en: {
      title: "Farmer Dashboard",
      search: "Search Equipment",
      bookings: "My Bookings",
      ai: "AI Suggestion",
      chat: "Chat with AI"
    },
    kn: {
      title: "ರೈತ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
      search: "ಉಪಕರಣ ಹುಡುಕಿ",
      bookings: "ನನ್ನ ಬುಕ್ಕಿಂಗ್‌ಗಳು",
      ai: "AI ಸಲಹೆ",
      chat: "AI ಜೊತೆ ಮಾತಾಡಿ"
    }
  };

  return (
    <div className="min-h-screen p-6 bg-green-50">

      <h1 className="text-3xl font-bold text-center text-green-800 mb-6">
        🌾 {text[lang].title}
      </h1>

      <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">

        <button
          onClick={() => setPage("search")}
          className="bg-white p-4 rounded shadow"
        >
          🔍 {text[lang].search}
        </button>

        <button
          onClick={() => setPage("mybookings")}
          className="bg-white p-4 rounded shadow"
        >
          📋 {text[lang].bookings}
        </button>

        <button
          onClick={() => setPage("ai")}
          className="bg-white p-4 rounded shadow"
        >
          🤖 {text[lang].ai}
        </button>

        <button
          onClick={() => setPage("chat")}
          className="bg-white p-4 rounded shadow"
        >
          💬 {text[lang].chat}
        </button>

      </div>

    </div>
  );
}
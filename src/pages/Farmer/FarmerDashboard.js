import React from "react";

export default function FarmerDashboard({ setPage, lang = "en" }) {

  const text = {
    en: {
      title: "Farmer Dashboard",
      search: "Search Equipment",
      bookings: "My Bookings",
      ai: "AI Suggestion",
      chat: "Chat with AI",
      summary: "Summary",
      notifications: "Notifications"
    },
    kn: {
      title: "ರೈತ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
      search: "ಉಪಕರಣ ಹುಡುಕಿ",
      bookings: "ನನ್ನ ಬುಕ್ಕಿಂಗ್‌ಗಳು",
      ai: "AI ಸಲಹೆ",
      chat: "AI ಜೊತೆ ಮಾತಾಡಿ",
      summary: "ಸಾರಾಂಶ",
      notifications: "ಅಧಿಸೂಚನೆಗಳು"
    }
  };

  return (
    <div className="min-h-screen p-6 bg-green-50">

      <h1 className="text-3xl font-bold text-center text-green-800 mb-6">
        🌾 {text[lang].title}
      </h1>

      {/* MAIN GRID */}
      <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">

        <button
          onClick={() => setPage("search")}
          className="bg-white p-4 rounded shadow hover:bg-green-100"
        >
          🔍 {text[lang].search}
        </button>

        <button
          onClick={() => setPage("mybookings")}
          className="bg-white p-4 rounded shadow hover:bg-green-100"
        >
          📋 {text[lang].bookings}
        </button>

        <button
          onClick={() => setPage("ai")}
          className="bg-white p-4 rounded shadow hover:bg-green-100"
        >
          🤖 {text[lang].ai}
        </button>

        <button
          onClick={() => setPage("chat")}
          className="bg-white p-4 rounded shadow hover:bg-green-100"
        >
          💬 {text[lang].chat}
        </button>

      </div>

      {/* 🔥 EXTRA FEATURES SECTION */}
      <div className="mt-8 max-w-md mx-auto">

        <h2 className="text-xl font-semibold mb-3 text-green-700 text-center">
          ✨ Extra Features
        </h2>

        <div className="grid grid-cols-2 gap-4">

          <button
            onClick={() => setPage("summary")}
            className="bg-white p-4 rounded shadow hover:bg-green-100"
          >
            📊 {text[lang].summary}
          </button>

          <button
            onClick={() => setPage("notifications")}
            className="bg-white p-4 rounded shadow hover:bg-green-100"
          >
            🔔 {text[lang].notifications}
          </button>

        </div>

      </div>

    </div>
  );
}
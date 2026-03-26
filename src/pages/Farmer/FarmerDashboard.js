import React from "react";
import "./Farmer.css"; // ✅ import CSS

export default function FarmerDashboard({ setPage, setRole, lang = "en" }) {

  const text = {
    en: {
      title: "Farmer Dashboard",
      search: "Search Equipment",
      bookings: "My Bookings",
      ai: "AI Suggestion",
      chat: "Chat with AI",
      summary: "Summary",
      notifications: "Notifications",
      logout: "Logout"
    },
    kn: {
      title: "ರೈತ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
      search: "ಉಪಕರಣ ಹುಡುಕಿ",
      bookings: "ನನ್ನ ಬುಕ್ಕಿಂಗ್‌ಗಳು",
      ai: "AI ಸಲಹೆ",
      chat: "AI ಜೊತೆ ಮಾತಾಡಿ",
      summary: "ಸಾರಾಂಶ",
      notifications: "ಅಧಿಸೂಚನೆಗಳು",
      logout: "ಲಾಗ್ ಔಟ್"
    }
  };

  return (
    <div className="farmer-page">

      {/* 🔴 LOGOUT BUTTON */}
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          onClick={() => setRole("")}
          className="farmer-btn"
        >
          🚪 {text[lang].logout}
        </button>
      </div>

      <h1>🌾 {text[lang].title}</h1>

      {/* MAIN GRID */}
      <div className="farmer-card">

        <button
          onClick={() => setPage("search")}
          className="farmer-btn"
        >
          🔍 {text[lang].search}
        </button>

        <button
          onClick={() => setPage("mybookings")}
          className="farmer-btn"
        >
          📋 {text[lang].bookings}
        </button>

        <button
          onClick={() => setPage("ai")}
          className="farmer-btn"
        >
          🤖 {text[lang].ai}
        </button>

        <button
          onClick={() => setPage("chat")}
          className="farmer-btn"
        >
          💬 {text[lang].chat}
        </button>

      </div>

      {/* EXTRA FEATURES */}
      <div className="farmer-card">

        <h2>✨ Extra Features</h2>

        <button
          onClick={() => setPage("summary")}
          className="farmer-btn"
        >
          📊 {text[lang].summary}
        </button>

        <button
          onClick={() => setPage("notifications")}
          className="farmer-btn"
        >
          🔔 {text[lang].notifications}
        </button>

      </div>

    </div>
  );
}
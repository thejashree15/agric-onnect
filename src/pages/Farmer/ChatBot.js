import React, { useState } from "react";

export default function ChatBot({ setPage }) {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  // 🤖 AI LOGIC
  const getAIReply = (msg) => {
    msg = msg.toLowerCase();

    if (msg.includes("rice")) {
      return "Use Tractor, Rotavator and Water Pump for rice farming.";
    } 
    else if (msg.includes("wheat")) {
      return "Use Seeder, Tractor and Sprayer for wheat farming.";
    } 
    else if (msg.includes("cotton")) {
      return "Use Tractor, Sprayer and Harvester for cotton farming.";
    } 
    else if (msg.includes("tractor")) {
      return "Tractor is used for ploughing, tilling and transport.";
    } 
    else if (msg.includes("soil")) {
      return "Black soil is best for cotton, red soil for groundnut.";
    } 
    else {
      return "Ask about crops, soil or farming equipment.";
    }
  };

  // 🔊 VOICE OUTPUT (FIXED)
  const speak = (text) => {
    const speech = new SpeechSynthesisUtterance(text);

    speech.lang = "en-US";   // safer than en-IN
    speech.rate = 1;
    speech.pitch = 1;
    speech.volume = 1;

    window.speechSynthesis.cancel(); // clear previous
    window.speechSynthesis.speak(speech);
  };

  // 📩 SEND MESSAGE
  const sendMessage = () => {
    if (!message) return;

    const userMsg = { type: "user", text: message };
    const aiReply = { type: "ai", text: "Thinking..." };

    setChat([...chat, userMsg, aiReply]);

    setTimeout(() => {
      const finalReply = getAIReply(message);

      setChat((prev) => [
        ...prev.slice(0, -1),
        { type: "ai", text: finalReply }
      ]);

      speak(finalReply); // 🔥 VOICE OUTPUT

    }, 1000);

    setMessage("");
  };

  // 🎤 VOICE INPUT
  const startListening = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
      const speech = event.results[0][0].transcript;
      setMessage(speech);
    };

    recognition.start();
  };

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      background: "#f4fff4"
    }}>

      {/* HEADER */}
      <div style={{
        background: "#2e7d32",
        color: "white",
        padding: "15px",
        textAlign: "center",
        fontWeight: "bold"
      }}>
        Agri AI Assistant
      </div>

      {/* CHAT AREA */}
      <div style={{
        flex: 1,
        padding: "15px",
        overflowY: "auto"
      }}>
        {chat.map((c, i) => (
          <div key={i} style={{
            textAlign: c.type === "user" ? "right" : "left",
            marginBottom: "10px"
          }}>
            <span style={{
              display: "inline-block",
              padding: "10px",
              borderRadius: "10px",
              background: c.type === "user" ? "#4caf50" : "#e8f5e9",
              color: c.type === "user" ? "white" : "black",
              maxWidth: "70%"
            }}>
              {c.text}
            </span>
          </div>
        ))}
      </div>

      {/* INPUT AREA */}
      <div style={{
        display: "flex",
        padding: "10px",
        borderTop: "1px solid #ccc"
      }}>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask about farming..."
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc"
          }}
        />

        {/* 🎤 MIC */}
        <button
          onClick={startListening}
          style={{
            marginLeft: "5px",
            padding: "10px",
            background: "#ff9800",
            color: "white",
            border: "none",
            borderRadius: "5px"
          }}
        >
          🎤
        </button>

        {/* SEND */}
        <button
          onClick={sendMessage}
          style={{
            marginLeft: "10px",
            padding: "10px 15px",
            background: "#2e7d32",
            color: "white",
            border: "none",
            borderRadius: "5px"
          }}
        >
          Send
        </button>
      </div>

      {/* BACK */}
      <button
        onClick={() => setPage("home")}
        style={{
          margin: "10px",
          padding: "8px",
          background: "#ccc",
          border: "none",
          borderRadius: "5px"
        }}
      >
        ⬅ Back
      </button>

    </div>
  );
}

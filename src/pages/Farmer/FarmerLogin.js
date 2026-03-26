import React, { useState } from "react";

export default function FarmerLogin({ setRole, setShowLogin }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleLogin = () => {
    // ✅ No validation → allow anything
    setRole("farmer");
    setShowLogin(false);
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f1f8e9"
      }}
    >
      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0px 5px 15px rgba(0,0,0,0.2)",
          textAlign: "center",
          width: "300px"
        }}
      >
        <h2>👩‍🌾 Farmer Login</h2>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Enter Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={inputStyle}
        />

        <button onClick={handleLogin} style={btnStyle}>
          Login
        </button>

        <br /><br />

        {/* 🔙 BACK BUTTON */}
        <button onClick={() => setShowLogin(false)} style={backBtn}>
          ⬅ Back
        </button>
      </div>
    </div>
  );
}

// 🎨 STYLES
const inputStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "10px",
  borderRadius: "6px",
  border: "1px solid #ccc"
};

const btnStyle = {
  marginTop: "15px",
  padding: "10px",
  width: "100%",
  background: "#2e7d32",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer"
};

const backBtn = {
  padding: "8px",
  width: "100%",
  background: "#ccc",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer"
};
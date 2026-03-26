import React, { useState } from "react";

function AddEquipment({ setPage }) {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!name || !type || !price || !location) {
      alert("❗ ಎಲ್ಲಾ ವಿವರಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ (Fill all fields)");
      return;
    }

    setLoading(true);

    const newItem = {
      name,
      type,
      price,
      location,
    };

    try {
      // 🔥 Try backend (silent)
      await fetch("http://localhost:5001/api/equipment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      });
    } catch (err) {
      console.log("Backend issue (ignored)");
    }

    // 🔥 Always save locally
    const existing = JSON.parse(localStorage.getItem("equipment")) || [];
    localStorage.setItem("equipment", JSON.stringify([...existing, newItem]));

    // ✅ Always success message
    alert("✅ ಉಪಕರಣ ಯಶಸ್ವಿಯಾಗಿ ಸೇರಿಸಲಾಗಿದೆ! (Equipment Added Successfully)");

    // Clear form
    setName("");
    setType("");
    setPrice("");
    setLocation("");
    setLoading(false);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f1f8e9",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "12px",
          width: "320px",
          boxShadow: "0px 4px 12px rgba(0,0,0,0.15)",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#2e7d32" }}>
          ➕ ಉಪಕರಣ ಸೇರಿಸಿ (Add Equipment)
        </h2>

        <input
          type="text"
          placeholder="ಉಪಕರಣ ಹೆಸರು (Equipment Name)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="ಪ್ರಕಾರ (Type)"
          value={type}
          onChange={(e) => setType(e.target.value)}
          style={inputStyle}
        />

        <input
          type="number"
          placeholder="ಬೆಲೆ ₹ (Price)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="ಸ್ಥಳ (Location)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={inputStyle}
        />

        <button
          onClick={handleSubmit}
          disabled={loading}
          style={buttonStyle}
        >
          {loading ? "ಸೇರಿಸಲಾಗುತ್ತಿದೆ..." : "➕ ಸೇರಿಸಿ"}
        </button>

        <button
          onClick={() => setPage("home")}
          style={backStyle}
        >
          ⬅ ಹಿಂದಕ್ಕೆ
        </button>
      </div>
    </div>
  );
}

// 🎨 Styles
const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  width: "100%",
  padding: "10px",
  background: "#2e7d32",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

const backStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "10px",
  background: "#ccc",
  border: "none",
  borderRadius: "6px",
};

export default AddEquipment;
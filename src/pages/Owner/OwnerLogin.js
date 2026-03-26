import React, { useState } from "react";

export default function OwnerLogin({ setRole, setShowOwnerLogin }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // ✅ Simple validation
    if (!name || !phone || !password) {
      alert("Please fill all fields");
      return;
    }

    if (phone.length !== 10) {
      alert("Enter valid 10-digit phone number");
      return;
    }

    // ✅ Store owner data (optional)
    localStorage.setItem(
      "owner",
      JSON.stringify({ name, phone })
    );

    // ✅ Login success
    setRole("owner");
    setShowOwnerLogin(false);
  };

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#f1f8e9"
    }}>
      <div style={{
        padding: "30px",
        background: "white",
        borderRadius: "10px",
        boxShadow: "0px 5px 15px rgba(0,0,0,0.2)",
        textAlign: "center",
        width: "300px"
      }}>
        <h2>👷 Owner Login</h2>

        {/* NAME */}
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />

        {/* PHONE */}
        <input
          type="number"
          placeholder="Enter Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={inputStyle}
        />

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />

        <br />

        <button onClick={handleLogin} style={btnStyle}>
          Login
        </button>

        <br /><br />

        <button onClick={() => setShowOwnerLogin(false)}>
          ⬅ Back
        </button>
      </div>
    </div>
  );
}

// 🎨 STYLES
const inputStyle = {
  padding: "10px",
  marginTop: "10px",
  width: "100%",
  borderRadius: "5px",
  border: "1px solid #ccc"
};

const btnStyle = {
  marginTop: "15px",
  padding: "10px",
  width: "100%",
  background: "#2e7d32",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer"
};
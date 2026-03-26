import React from "react";

export default function DriverDashboard({ setPage }) {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#f1f8e9",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <h2 style={{ color: "#2e7d32" }}>
        🚜 ಚಾಲಕ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ (Driver Dashboard)
      </h2>

      <div style={{ marginTop: "20px" }}>

        <button style={btn} onClick={() => setPage("jobs")}>
          📋 Available Jobs
        </button>

        <button style={btn} onClick={() => setPage("myjobs")}>
          📦 My Jobs
        </button>

        <button style={btn} onClick={() => setPage("completed")}>
          ✅ Completed Jobs
        </button>

      </div>

      <br />
      <button onClick={() => setPage("home")}>⬅ Back</button>
    </div>
  );
}

const btn = {
  display: "block",
  margin: "10px",
  padding: "12px",
  width: "200px",
  background: "#2e7d32",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer"
};
import React, { useEffect, useState } from "react";

export default function DriverDashboard({ setPage }) {
  const [available, setAvailable] = useState([]);
  const [accepted, setAccepted] = useState([]);
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("bookings")) || [];

    setAvailable(data.filter(j => j.status === "Paid"));
    setAccepted(data.filter(j => j.status === "Accepted"));
    setCompleted(data.filter(j => j.status === "Completed"));
  }, []);

  // ✅ ACCEPT JOB
  const acceptJob = (index) => {
    let all = JSON.parse(localStorage.getItem("bookings")) || [];

    all = all.map((job, i) =>
      i === index ? { ...job, status: "Accepted" } : job
    );

    localStorage.setItem("bookings", JSON.stringify(all));
    window.location.reload();
  };

  // ✅ COMPLETE JOB
  const completeJob = (index) => {
    let all = JSON.parse(localStorage.getItem("bookings")) || [];

    all = all.map((job, i) =>
      i === index ? { ...job, status: "Completed" } : job
    );

    localStorage.setItem("bookings", JSON.stringify(all));
    window.location.reload();
  };

  return (
    <div style={{
      padding: "20px",
      background: "#f1f8e9",
      minHeight: "100vh"
    }}>

      <h2 style={{ textAlign: "center", color: "#2e7d32" }}>
        🚜 ಚಾಲಕ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ (Driver Dashboard)
      </h2>

      {/* 📋 AVAILABLE JOBS */}
      <h3>📋 Available Jobs</h3>
      {available.length === 0 && <p>No jobs available</p>}

      {available.map((job, i) => (
        <div key={i} style={cardStyle}>
          <p>🚜 {job.name}</p>
          <p>📍 {job.location}</p>

          <button onClick={() => acceptJob(i)}>
            ✔ Accept
          </button>
        </div>
      ))}

      {/* 📦 MY JOBS */}
      <h3>📦 My Jobs</h3>
      {accepted.length === 0 && <p>No accepted jobs</p>}

      {accepted.map((job, i) => (
        <div key={i} style={cardStyle}>
          <p>🚜 {job.name}</p>

          <button onClick={() => completeJob(i)}>
            🚚 Complete
          </button>
        </div>
      ))}

      {/* ✅ COMPLETED */}
      <h3>✅ Completed Jobs</h3>
      {completed.length === 0 && <p>No completed jobs</p>}

      {completed.map((job, i) => (
        <div key={i} style={cardStyle}>
          <p>🚜 {job.name}</p>
          <p>✔ Completed</p>
        </div>
      ))}

      {/* 🔥 EXTRA FEATURES */}
      <div style={{ marginTop: "30px" }}>
        <h3 style={{ color: "#2e7d32" }}>✨ Extra Features</h3>

        <button
          onClick={() => setPage("earnings")}
          style={extraBtn}
        >
          💰 Earnings
        </button>

        <button
          onClick={() => setPage("status")}
          style={extraBtn}
        >
          🚚 Driver Status
        </button>
      </div>

      <br />
      <button onClick={() => setPage("home")}>
        ⬅ Back
      </button>
    </div>
  );
}

// 🎨 STYLE
const cardStyle = {
  background: "white",
  padding: "10px",
  borderRadius: "8px",
  marginBottom: "10px",
  boxShadow: "0px 2px 5px rgba(0,0,0,0.1)"
};

const extraBtn = {
  display: "block",
  marginTop: "10px",
  padding: "10px",
  width: "200px",
  background: "#2e7d32",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer"
};
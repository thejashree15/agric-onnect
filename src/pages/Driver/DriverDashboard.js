import React, { useEffect, useState } from "react";
import "./Driver.css"; // ✅ CSS IMPORT

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
    <div className="driver-page"> {/* ✅ APPLY THEME */}

      <h2>🚜 ಚಾಲಕ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ (Driver Dashboard)</h2>

      {/* 📋 AVAILABLE JOBS */}
      <h3>📋 Available Jobs</h3>
      {available.length === 0 && <p>No jobs available</p>}

      {available.map((job, i) => (
        <div key={i} className="driver-card">
          <p>🚜 {job.name}</p>
          <p>📍 {job.location}</p>

          <button
            onClick={() => acceptJob(i)}
            className="driver-btn"
          >
            ✔ Accept
          </button>
        </div>
      ))}

      {/* 📦 MY JOBS */}
      <h3>📦 My Jobs</h3>
      {accepted.length === 0 && <p>No accepted jobs</p>}

      {accepted.map((job, i) => (
        <div key={i} className="driver-card">
          <p>🚜 {job.name}</p>

          <button
            onClick={() => completeJob(i)}
            className="driver-btn"
          >
            🚚 Complete
          </button>
        </div>
      ))}

      {/* ✅ COMPLETED */}
      <h3>✅ Completed Jobs</h3>
      {completed.length === 0 && <p>No completed jobs</p>}

      {completed.map((job, i) => (
        <div key={i} className="driver-card">
          <p>🚜 {job.name}</p>
          <p>✔ Completed</p>
        </div>
      ))}

      {/* 🔥 EXTRA FEATURES */}
      <div className="driver-card">
        <h3>✨ Extra Features</h3>

        <button
          onClick={() => setPage("earnings")}
          className="driver-btn"
        >
          💰 Earnings
        </button>

        <button
          onClick={() => setPage("status")}
          className="driver-btn"
        >
          🚚 Driver Status
        </button>
      </div>

      <button
        onClick={() => setPage("home")}
        className="driver-btn"
      >
        ⬅ Back
      </button>

    </div>
  );
}
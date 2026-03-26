import React, { useEffect, useState } from "react";

export default function MyJobs({ setPage }) {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("bookings")) || [];

    // 🔥 Only Accepted jobs
    const acceptedJobs = data.filter((job) => job.status === "Accepted");

    setJobs(acceptedJobs);
  }, []);

  // ✅ COMPLETE JOB
  const completeJob = (index) => {
    let all = JSON.parse(localStorage.getItem("bookings")) || [];

    // Find correct job and update
    const updated = all.map((job, i) =>
      i === index ? { ...job, status: "Completed" } : job
    );

    localStorage.setItem("bookings", JSON.stringify(updated));

    alert("🚚 ಕೆಲಸ ಪೂರ್ಣಗೊಂಡಿದೆ! (Job Completed)");

    // Refresh UI
    const newJobs = updated.filter((job) => job.status === "Accepted");
    setJobs(newJobs);
  };

  return (
    <div style={{
      padding: "20px",
      background: "#f1f8e9",
      minHeight: "100vh"
    }}>
      <h2 style={{ textAlign: "center", color: "#2e7d32" }}>
        📦 ನನ್ನ ಕೆಲಸಗಳು (My Tasks)
      </h2>

      {jobs.length === 0 && (
        <p style={{ textAlign: "center" }}>
          ಯಾವುದೇ ಕೆಲಸಗಳು ಇಲ್ಲ (No active jobs)
        </p>
      )}

      {jobs.map((job, i) => (
        <div key={i} style={cardStyle}>
          <h3>🚜 {job.name}</h3>
          <p>💰 ₹{job.price}</p>
          <p>📍 {job.location}</p>
          <p style={{ color: "#ff9800" }}>
            📌 Status: {job.status}
          </p>

          {/* 🔥 COMPLETE BUTTON */}
          <button
            onClick={() => completeJob(i)}
            style={completeBtn}
          >
            🚚 ಕೆಲಸ ಪೂರ್ಣಗೊಳಿಸಿ (Complete Job)
          </button>
        </div>
      ))}

      <br />

      <button onClick={() => setPage("driver")} style={backBtn}>
        ⬅ ಹಿಂದಕ್ಕೆ (Back)
      </button>
    </div>
  );
}

// 🎨 STYLES
const cardStyle = {
  background: "white",
  padding: "15px",
  borderRadius: "12px",
  marginBottom: "12px",
  boxShadow: "0px 3px 8px rgba(0,0,0,0.1)"
};

const completeBtn = {
  padding: "10px",
  background: "#4caf50",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  marginTop: "10px"
};

const backBtn = {
  padding: "10px",
  background: "#ccc",
  border: "none",
  borderRadius: "6px"
};
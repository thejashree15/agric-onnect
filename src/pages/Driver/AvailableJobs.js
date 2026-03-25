import React from "react";

export default function AvailableJobs({ setPage }) {
  return (
    <div>
      <h2>📥 Available Jobs</h2>

      <p>Job 1 - Tractor Work</p>
      <button onClick={() => alert("Accepted")}>Accept</button>

      <p>Job 2 - Harvest Work</p>
      <button onClick={() => alert("Accepted")}>Accept</button>

      <br/><br/>
      <button onClick={() => setPage("tasks")}>Go to Tasks</button>
    </div>
  );
}
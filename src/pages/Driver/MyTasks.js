import React from "react";

export default function MyTasks({ setPage }) {
  return (
    <div>
      <h2>📋 My Tasks</h2>

      <p>Tractor Job - In Progress</p>

      <button onClick={() => alert("Completed")}>Mark Complete</button>

      <br/><br/>
      <button onClick={() => setPage("jobs")}>Back</button>
    </div>
  );
}
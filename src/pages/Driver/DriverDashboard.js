import React, { useState } from "react";
import AvailableJobs from "./AvailableJobs";
import MyTasks from "./MyTasks";

export default function DriverDashboard({ setRole }) {
  const [page, setPage] = useState("jobs");

  if (page === "jobs") return <AvailableJobs setPage={setPage} />;
  if (page === "tasks") return <MyTasks setPage={setPage} />;

  return (
    <div>
      <h2>Driver Dashboard</h2>

      <button onClick={() => setPage("jobs")}>Jobs</button>
      <button onClick={() => setPage("tasks")}>My Tasks</button>

      <br/><br/>
      <button onClick={() => setRole("")}>Logout</button>
    </div>
  );
}
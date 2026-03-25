import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="overlay-card">
        <h1>🚜 Connect. Rent. Grow.</h1>

        <p>
          Access affordable agricultural machinery near you. <br />
          Farmers boost productivity without ownership.
        </p>

        <button
          className="primary-btn"
          onClick={() => navigate("/select-role")}
        >
          Get Started
        </button>

        <button className="secondary-btn">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Home;
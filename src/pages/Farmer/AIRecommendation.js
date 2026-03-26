import React, { useState } from "react";

export default function AIRecommendation({ setPage }) {
  const [soil, setSoil] = useState("");
  const [crop, setCrop] = useState("");
  const [weather, setWeather] = useState("");
  const [result, setResult] = useState("");

  // 🤖 AI LOGIC
  const getRecommendation = () => {
    let suggestion = "";

    if (soil === "black" && crop === "cotton") {
      suggestion = "🌾 Use Tractor + Sprayer for cotton in black soil";
    } 
    else if (soil === "red" && crop === "groundnut") {
      suggestion = "🌱 Use Rotavator + Seeder for groundnut";
    } 
    else if (weather === "rainy") {
      suggestion = "🌧 Use Water Pump & Drainage tools";
    } 
    else if (weather === "summer") {
      suggestion = "☀ Use Irrigation system & Sprayer";
    } 
    else {
      suggestion = "🚜 General recommendation: Use Tractor & basic tools";
    }

    setResult(suggestion);
  };

  return (
    <div className="page-container">

      {/* 🔙 BACK BUTTON */}
      <button
        onClick={() => setPage("")}
        className="btn"
        style={{ marginBottom: "15px" }}
      >
        ⬅ Back
      </button>

      <h2>🤖 AI Equipment Suggestion</h2>

      {/* 🌱 SOIL */}
      <select
        onChange={(e) => setSoil(e.target.value)}
        className="input"
      >
        <option>Select Soil</option>
        <option value="black">Black Soil</option>
        <option value="red">Red Soil</option>
      </select>

      {/* 🌾 CROP */}
      <select
        onChange={(e) => setCrop(e.target.value)}
        className="input"
      >
        <option>Select Crop</option>
        <option value="cotton">Cotton</option>
        <option value="groundnut">Groundnut</option>
        <option value="rice">Rice</option>
        <option value="wheat">Wheat</option>
      </select>

      {/* 🌤 WEATHER */}
      <select
        onChange={(e) => setWeather(e.target.value)}
        className="input"
      >
        <option>Select Weather</option>
        <option value="summer">Summer</option>
        <option value="rainy">Rainy</option>
        <option value="winter">Winter</option>
      </select>

      <br /><br />

      {/* BUTTON */}
      <button onClick={getRecommendation} className="btn">
        Get Suggestion
      </button>

      {/* RESULT */}
      {result && (
        <div className="card" style={{ marginTop: "20px" }}>
          {result}
        </div>
      )}

    </div>
  );
}
import React, { useState } from "react";

export default function AIRecommendation() {
  const [soil, setSoil] = useState("");
  const [result, setResult] = useState("");

  const getRecommendation = () => {
    if (soil === "black") {
      setResult("Use Tractor + Plough (Naglo)");
    } else if (soil === "red") {
      setResult("Use Rotavator + Seeder");
    } else {
      setResult("General Tractor Usage");
    }
  };

  return (
    <div className="p-6 text-center">
      <h2 className="text-xl font-bold">🤖 AI Equipment Suggestion</h2>

      <select onChange={(e) => setSoil(e.target.value)} className="p-2 mt-3">
        <option>Select Soil</option>
        <option value="black">Black Soil</option>
        <option value="red">Red Soil</option>
      </select>

      <br /><br />

      <button onClick={getRecommendation} className="bg-green-600 text-white px-4 py-2 rounded">
        Get Suggestion
      </button>

      <p className="mt-4 font-bold text-green-700">{result}</p>
    </div>
  );
}
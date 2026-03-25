import React, { useState } from "react";

function AddEquipment({ setPage }) {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!name || !type || !price) {
      alert("Please fill all fields ❗");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/equipment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          type,
          price,
        }),
      });

      const data = await response.json();
      console.log(data);

      alert("Equipment Added Successfully ✅");

      // Clear inputs
      setName("");
      setType("");
      setPrice("");
    } catch (error) {
      console.error(error);
      alert("Error adding equipment ❌");
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <h2>Add Equipment</h2>

      <div className="card">
        <input
          type="text"
          placeholder="Equipment Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Type (e.g. Tractor)"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />

        <input
          type="number"
          placeholder="Price (₹)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <br />

        <button onClick={handleSubmit} disabled={loading}>
          {loading ? "Adding..." : "Add Equipment"}
        </button>

        <button className="back-btn" onClick={() => setPage("")}>
          ⬅ Back
        </button>
      </div>
    </div>
  );
}

export default AddEquipment;
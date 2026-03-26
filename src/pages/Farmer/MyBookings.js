import React, { useEffect, useState } from "react";

export default function MyBookings({ setPage }) {
  const [bookings, setBookings] = useState([]);
  const [selectedDriver, setSelectedDriver] = useState(null);

  // 👨‍🔧 DRIVER LIST
  const drivers = [
    { name: "Ravi", phone: "9876543210" },
    { name: "Suresh", phone: "9123456780" },
    { name: "Mahesh", phone: "9988776655" }
  ];

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(data);
  }, []);

  const totalAmount = bookings.reduce((sum, b) => sum + (b.price || 0), 0);

  return (
    <div style={{ padding: "20px", background: "#f1f8e9", minHeight: "100vh" }}>

      {/* 🔙 BACK */}
      <button onClick={() => setPage("")}>⬅ Back</button>

      {/* 👨‍🔧 AVAILABLE DRIVERS */}
      <h3 style={{ marginTop: "20px" }}>👨‍🔧 Available Drivers</h3>

      {drivers.map((d, i) => (
        <div key={i} style={cardStyle}>
          <p>👨 {d.name}</p>
          <p>📞 {d.phone}</p>

          <button
            onClick={() => setSelectedDriver(d)}
            style={btnStyle}
          >
            Select Driver
          </button>
        </div>
      ))}

      {/* ✅ SELECTED DRIVER */}
      {selectedDriver && (
        <div style={{ marginTop: "10px", color: "green" }}>
          ✅ Selected: {selectedDriver.name}
        </div>
      )}

      {/* 📋 BOOKINGS */}
      <h2 style={{ textAlign: "center", color: "#2e7d32", marginTop: "30px" }}>
        📋 ನನ್ನ ಬುಕ್ಕಿಂಗ್‌ಗಳು (My Bookings)
      </h2>

      <p><b>ಒಟ್ಟು ಬುಕ್ಕಿಂಗ್‌ಗಳು:</b> {bookings.length}</p>
      <p><b>ಒಟ್ಟು ವೆಚ್ಚ:</b> ₹{totalAmount}</p>

      {bookings.length === 0 && <p>No bookings yet</p>}

      {bookings.map((b, i) => (
        <div key={i} style={cardStyle}>
          <p>🚜 <b>{b.name}</b></p>
          <p>💰 ₹{b.price}</p>
          <p>📌 ಸ್ಥಿತಿ: {b.status}</p>
          <p>💳 ಪಾವತಿ: {b.method}</p>

          {/* 👇 DRIVER DETAILS */}
          {b.driverName ? (
            <>
              <p>👨‍🔧 Driver: {b.driverName}</p>
              <p>📞 Phone: {b.driverPhone}</p>
            </>
          ) : (
            <p style={{ color: "gray" }}>🚫 No driver assigned</p>
          )}
        </div>
      ))}

    </div>
  );
}

// 🎨 STYLES
const cardStyle = {
  background: "white",
  padding: "15px",
  borderRadius: "10px",
  marginBottom: "10px",
  boxShadow: "0px 2px 5px rgba(0,0,0,0.1)"
};

const btnStyle = {
  padding: "8px 12px",
  background: "#ff9800",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer"
};
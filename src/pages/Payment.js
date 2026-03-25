import React, { useState } from "react";

function Payment({ setPage }) {
  const [method, setMethod] = useState("");

  const handlePayment = () => {
    if (!method) {
      alert("Please select a payment method");
      return;
    }

    alert(`✅ Payment Successful via ${method}`);
    setPage("mybookings");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>💳 Payment Options</h2>

        <p style={styles.subText}>Choose your payment method</p>

        {/* PAYMENT OPTIONS */}
        <div style={styles.optionBox}>
          <div
            style={{
              ...styles.option,
              border: method === "GPay" ? "2px solid green" : "1px solid #ccc",
            }}
            onClick={() => setMethod("GPay")}
          >
            📱 Google Pay (UPI)
          </div>

          <div
            style={{
              ...styles.option,
              border: method === "PhonePe" ? "2px solid purple" : "1px solid #ccc",
            }}
            onClick={() => setMethod("PhonePe")}
          >
            📲 PhonePe
          </div>

          <div
            style={{
              ...styles.option,
              border: method === "Card" ? "2px solid blue" : "1px solid #ccc",
            }}
            onClick={() => setMethod("Card")}
          >
            💳 Debit / Credit Card
          </div>

          <div
            style={{
              ...styles.option,
              border: method === "COD" ? "2px solid orange" : "1px solid #ccc",
            }}
            onClick={() => setMethod("Cash on Delivery")}
          >
            💵 Cash on Delivery
          </div>
        </div>

        {/* SELECTED METHOD */}
        <p style={styles.selected}>
          Selected: {method || "None"}
        </p>

        {/* PAY BUTTON */}
        <button style={styles.payBtn} onClick={handlePayment}>
          Pay ₹1000
        </button>

        {/* BACK */}
        <button style={styles.backBtn} onClick={() => setPage("mybookings")}>
          ⬅ Back
        </button>
      </div>
    </div>
  );
}

export default Payment;

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background:
      "linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url('https://images.unsplash.com/photo-1500382017468-9049fed747ef')",
    backgroundSize: "cover",
  },

  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "12px",
    width: "350px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    textAlign: "center",
  },

  title: {
    color: "#2e7d32",
  },

  subText: {
    marginBottom: "20px",
    color: "#555",
  },

  optionBox: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "15px",
  },

  option: {
    padding: "12px",
    borderRadius: "8px",
    cursor: "pointer",
    background: "#f9f9f9",
  },

  selected: {
    marginBottom: "15px",
    fontWeight: "bold",
    color: "#2e7d32",
  },

  payBtn: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#f4b400",
    border: "none",
    borderRadius: "6px",
    fontWeight: "bold",
    cursor: "pointer",
    marginBottom: "10px",
  },

  backBtn: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#2e7d32",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};
import React, { useState } from "react";

// ✅ EXTRA FEATURES
import BookingSummary from "./pages/Extra/BookingSummary";
import Notifications from "./pages/Extra/Notifications";
import Earnings from "./pages/Driver/Earnings";
import DriverStatus from "./pages/Driver/Driverstatus";

// Farmer
import FarmerDashboard from "./pages/Farmer/FarmerDashboard";
import SearchEquipment from "./pages/Farmer/SearchEquipment";
import AIRecommendation from "./pages/Farmer/AIRecommendation";
import MyBookings from "./pages/Farmer/MyBookings";
import BookingPage from "./pages/Farmer/BookingPage";
import ChatBot from "./pages/Farmer/ChatBot";

// Owner
import OwnerDashboard from "./pages/Owner/OwnerDashboard";

// Driver
import DriverDashboard from "./pages/Driver/DriverDashboard";

import Payment from "./pages/Payment";
import "./App.css";

function App() {
  const [role, setRole] = useState("");
  const [page, setPage] = useState("home");

  // ================= FARMER =================
  if (role === "farmer") {

    // 🔥 EXTRA FEATURES (ADD HERE ONLY)
    if (page === "summary") return <BookingSummary setPage={setPage} />;
    if (page === "notifications") return <Notifications setPage={setPage} />;
    if (page === "earnings") return <Earnings setPage={setPage} />;
    if (page === "status") return <DriverStatus setPage={setPage} />;

    // 🔥 BOOKING (OBJECT BASED)
    if (page?.name === "booking") {
      return <BookingPage setPage={setPage} item={page.item} />;
    }

    // 🔥 PAYMENT (OBJECT BASED)
    if (page?.name === "payment") {
      return <Payment setPage={setPage} item={page.item} />;
    }

    if (page === "search") {
      return <SearchEquipment setPage={setPage} />;
    }

    if (page === "ai") {
      return <AIRecommendation setPage={setPage} />;
    }

    if (page === "chat") {
      return <ChatBot setPage={setPage} />;
    }

    if (page === "payment") {
      return <Payment setPage={setPage} />;
    }

    if (page === "mybookings") {
      return <MyBookings setPage={setPage} />;
    }

    return <FarmerDashboard setRole={setRole} setPage={setPage} />;
  }

  // ================= OWNER =================
  if (role === "owner") {
    return <OwnerDashboard setRole={setRole} />;
  }

  // ================= DRIVER =================
  if (role === "driver") {

    // 🔥 DRIVER EXTRA FEATURES
    if (page === "earnings") return <Earnings setPage={setPage} />;
    if (page === "status") return <DriverStatus setPage={setPage} />;

    return <DriverDashboard setRole={setRole} setPage={setPage} />;
  }

  // ================= HOME =================
  return (
    <div
      style={{
        height: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "rgba(34, 139, 34, 0.85)",
          padding: "40px",
          borderRadius: "15px",
          textAlign: "center",
          color: "white",
          width: "350px",
          boxShadow: "0px 10px 30px rgba(0,0,0,0.3)",
        }}
      >
        <h1>🚜 Connect. Rent. Grow.</h1>

        <p>
          Access affordable agricultural machinery near you. <br />
          Farmers boost productivity without ownership.
        </p>

        <button
          style={{
            backgroundColor: "#f4b400",
            color: "black",
            border: "none",
            padding: "10px",
            width: "100%",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          Get Started
        </button>

        <div style={{ marginTop: "15px" }}>
          <button onClick={() => setRole("farmer")} style={btn}>
            👩‍🌾 Farmer
          </button>

          <button onClick={() => setRole("owner")} style={btn}>
            👷 Owner
          </button>

          <button onClick={() => setRole("driver")} style={btn}>
            🚜 Driver
          </button>
        </div>
      </div>
    </div>
  );
}

const btn = {
  margin: "5px",
  padding: "8px 12px"
};

export default App;
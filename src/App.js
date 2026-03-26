import React, { useState } from "react";
import FarmerLogin from "./pages/Farmer/FarmerLogin";
import OwnerLogin from "./pages/Owner/OwnerLogin";
import DriverLogin from "./pages/Driver/DriverLogin"; // ✅ ADDED

// ✅ EXTRA FEATURES
import BookingSummary from "./pages/Extra/BookingSummary";
import Notifications from "./pages/Extra/Notifications";
import Earnings from "./pages/Driver/Earnings";
import Driverstatus from "./pages/Driver/Driverstatus";

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

  const [showLogin, setShowLogin] = useState(false);
  const [showOwnerLogin, setShowOwnerLogin] = useState(false);
  const [showDriverLogin, setShowDriverLogin] = useState(false); // ✅ ADDED

  // ================= LOGIN =================
  if (showLogin) {
    return <FarmerLogin setRole={setRole} setShowLogin={setShowLogin} />;
  }

  if (showOwnerLogin) {
    return <OwnerLogin setRole={setRole} setShowOwnerLogin={setShowOwnerLogin} />;
  }

  if (showDriverLogin) {
    return <DriverLogin setRole={setRole} setShowDriverLogin={setShowDriverLogin} />;
  }

  // ================= FARMER =================
  if (role === "farmer") {

    if (page === "summary") return <BookingSummary setPage={setPage} />;
    if (page === "notifications") return <Notifications setPage={setPage} />;
    if (page === "earnings") return <Earnings setPage={setPage} />;
    if (page === "status") return <Driverstatus setPage={setPage} />;

    if (page?.name === "booking") {
      return <BookingPage setPage={setPage} item={page.item} />;
    }

    if (page?.name === "payment") {
      return <Payment setPage={setPage} item={page.item} />;
    }

    if (page === "search") return <SearchEquipment setPage={setPage} />;
    if (page === "ai") return <AIRecommendation setPage={setPage} />;
    if (page === "chat") return <ChatBot setPage={setPage} />;
    if (page === "mybookings") return <MyBookings setPage={setPage} />;

    return <FarmerDashboard setRole={setRole} setPage={setPage} />;
  }

  // ================= OWNER =================
  if (role === "owner") {
    return <OwnerDashboard setRole={setRole} />;
  }

  // ================= DRIVER =================
  if (role === "driver") {

    if (page === "earnings") return <Earnings setPage={setPage} />;
    if (page === "status") return <Driverstatus setPage={setPage} />;

    return <DriverDashboard setRole={setRole} setPage={setPage} />;
  }

  // ================= HOME =================
  return (
    <div style={homeStyle}>
      <div style={cardStyle}>
        <h1>🚜 Connect. Rent. Grow.</h1>

        <p>
          Access affordable agricultural machinery near you. <br />
          Farmers boost productivity without ownership.
        </p>

        <button style={mainBtn}>
          Get Started
        </button>

        <div style={{ marginTop: "15px" }}>
          
          <button onClick={() => setShowLogin(true)} style={btn}>
            👩‍🌾 Farmer
          </button>

          <button onClick={() => setShowOwnerLogin(true)} style={btn}>
            👷 Owner
          </button>

          <button onClick={() => setShowDriverLogin(true)} style={btn}>
            🚜 Driver
          </button>

        </div>
      </div>
    </div>
  );
}

// 🎨 STYLES
const homeStyle = {
  height: "100vh",
  backgroundImage:
    "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const cardStyle = {
  background: "rgba(34, 139, 34, 0.85)",
  padding: "40px",
  borderRadius: "15px",
  textAlign: "center",
  color: "white",
  width: "350px",
  boxShadow: "0px 10px 30px rgba(0,0,0,0.3)",
};

const mainBtn = {
  backgroundColor: "#f4b400",
  color: "black",
  border: "none",
  padding: "10px",
  width: "100%",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "bold",
  marginBottom: "10px",
};

const btn = {
  margin: "5px",
  padding: "8px 12px",
};

export default App;
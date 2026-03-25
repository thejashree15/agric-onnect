import { useNavigate } from "react-router-dom";

function RoleSelection() {
  const navigate = useNavigate();

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
          background: "rgba(34, 139, 34, 0.9)",
          padding: "40px",
          borderRadius: "15px",
          textAlign: "center",
          color: "white",
          width: "350px",
          boxShadow: "0px 10px 30px rgba(0,0,0,0.3)",
        }}
      >
        <h1>🌾 AgriConnect</h1>
        <h2>Select Your Role</h2>

        <div style={{ marginTop: "30px" }}>
          <button
            onClick={() => navigate("/farmer")}
            style={{
              display: "block",
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
              backgroundColor: "#f4b400",
      
              fontWeight: "bold",
            }}
          >
            👩‍🌾 Farmer
          </button>

          <button
            onClick={() => navigate("/owner")}
            style={{
              display: "block",
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
              backgroundColor: "#ffffff",
              fontWeight: "bold",
            }}
          >
            👨‍🔧 Owner
          </button>

          <button
            onClick={() => navigate("/driver")}
            style={{
              display: "block",
              width: "100%",
              padding: "10px",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
              backgroundColor: "#e0e0e0",
              fontWeight: "bold",
            }}
          >
            🚜 Driver
          </button>

          {/* ✅ NEW: BACK BUTTON */}
          <button
            onClick={() => navigate("/")}
            style={{
              marginTop: "15px",
              width: "100%",
              padding: "10px",
              borderRadius: "6px",
              border: "2px solid white",
              background: "transparent",
              color: "white",
              cursor: "pointer",
            }}
          >
            ⬅ Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default RoleSelection;
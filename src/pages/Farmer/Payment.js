import React, { useState } from "react";

export default function Payment({ setPage }) {
  const [method, setMethod] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center 
    bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef')] 
    bg-cover bg-center">

      <div className="bg-white/90 p-6 rounded-xl shadow-lg w-[350px] text-center">

        <h2 className="text-2xl font-bold text-green-700 mb-3">
          💳 Payment
        </h2>

        {/* QR */}
        {method === "upi" && (
          <div className="mb-3">
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=upi://pay"
              alt="QR"
              className="mx-auto"
            />
            <p className="text-sm mt-2">Scan to Pay</p>
          </div>
        )}

        {/* OPTIONS */}
        <div className="space-y-2">
          <button onClick={() => setMethod("upi")} className="w-full bg-gray-200 p-2 rounded">
            📱 UPI / GPay
          </button>

          <button onClick={() => setMethod("cod")} className="w-full bg-gray-200 p-2 rounded">
            💵 Cash on Delivery
          </button>
        </div>

        <button
          onClick={() => {
            alert("Payment Successful ✅");
            setPage("mybookings");
          }}
          className="mt-4 w-full bg-green-600 text-white py-2 rounded"
        >
          Pay Now
        </button>

        <button
          onClick={() => setPage("mybookings")}
          className="mt-2 text-sm underline"
        >
          ← Back
        </button>

      </div>
    </div>
  );
}
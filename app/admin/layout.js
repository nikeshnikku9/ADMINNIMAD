"use client";

import Link from "next/link";

export default function AdminLayout({ children }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      
      {/* Sidebar */}
      <div
        style={{
          width: "250px",
          background: "#ede9df",
          padding: "20px",
        }}
      >
        <h1
          style={{
            color: "#6b1d1d",
            marginBottom: "40px",
            fontSize: "40px",
          }}
        >
          ADMIN PORTAL
        </h1>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Link href="/admin/dashboard">
            <button style={btnStyle}>Dashboard</button>
          </Link>

          <Link href="/admin/products">
            <button style={btnStyle}>Products</button>
          </Link>

          <Link href="/admin/qrcode">
            <button style={btnStyle}>QR Generator</button>
          </Link>

          <Link href="/admin/barcode">
            <button style={btnStyle}>Barcode Studio</button>
          </Link>

          <Link href="/admin/enquiries">
            <button style={btnStyle}>Enquiries</button>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          background: "#3b1208",
          padding: "40px",
        }}
      >
        {children}
      </div>
    </div>
  );
}

const btnStyle = {
  width: "100%",
  padding: "20px",
  border: "none",
  borderRadius: "14px",
  background: "#f5b800",
  color: "black",
  fontWeight: "bold",
  fontSize: "24px",
  cursor: "pointer",
};

"use client";

export default function DashboardPage() {
  const logout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    window.location.href = "/admin/login";
  };

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#2a120d",
        color: "white",
        padding: "40px",
      }}
    >

      <h1
        style={{
          fontSize: "42px",
          marginBottom: "20px",
          color: "#f4c400",
        }}
      >
        Admin Dashboard
      </h1>

      <button
        onClick={logout}
        style={{
          position: "absolute",
          right: "30px",
          top: "30px",
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(250,204,21,0.25)",
          color: "#fff7d6",
          padding: "10px 16px",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Logout
      </button>

      <p
        style={{
          fontSize: "20px",
        }}
      >
        Welcome to Nimad Zayka Admin Panel
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
          marginTop: "40px",
        }}
      >

        <a
          href="/admin/products"
          style={card}
        >
          Products
        </a>

        <a
          href="/admin/inventory"
          style={card}
        >
          Inventory ERP
        </a>

        <a
          href="/admin/barcode"
          style={card}
        >
          Barcode Studio
        </a>

        <a
          href="/admin/qrcode"
          style={card}
        >
          QR Generator
        </a>

        <a
          href="/admin/enquiries"
          style={card}
        >
          Enquiries
        </a>
        <a
          href="/admin/pos"
          style={card}
       >
          POS Billing
        </a>
      </div>

    </div>

  );

}

const card = {

  background: "#5a2415",

  padding: "30px",

  borderRadius: "18px",

  textDecoration: "none",

  color: "white",

  fontSize: "24px",

  fontWeight: "bold",

  textAlign: "center",

  boxShadow: "0 5px 15px rgba(0,0,0,0.3)"

};

"use client";

export default function DashboardPage() {

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

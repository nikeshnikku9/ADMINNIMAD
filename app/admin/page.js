export default function AdminPage() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>

      {/* Sidebar */}
      <div
        style={{
          width: "260px",
          background: "#f5f1e8",
          padding: "20px",
          borderRight: "1px solid #ddd",
        }}
      >
        <h2 style={{ color: "#7a2e1f" }}>ADMIN PORTAL</h2>

        <div style={{ marginTop: "30px", lineHeight: "40px" }}>
          <p>Dashboard</p>
          <p>Products</p>
          <p>QR Generator</p>
          <p>Barcode Studio</p>
          <p>Enquiries</p>
        </div>
      </div>

      {/* Main */}
      <div
        style={{
          flex: 1,
          background: "#2b1810",
          color: "white",
          padding: "40px",
        }}
      >
        <h1 style={{ fontSize: "42px" }}>Welcome Back</h1>

        <p style={{ color: "#d6c2b0" }}>
          Here's what's happening with Nimad ZAYKA today.
        </p>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "20px",
            marginTop: "40px",
          }}
        >
          <div style={cardStyle}>
            <h2>120</h2>
            <p>Total Products</p>
          </div>

          <div style={cardStyle}>
            <h2>25</h2>
            <p>Distributor Enquiries</p>
          </div>

          <div style={cardStyle}>
            <h2>850</h2>
            <p>Total Page Views</p>
          </div>

          <div style={cardStyle}>
            <h2>312</h2>
            <p>WhatsApp Clicks</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  background: "#3a2218",
  padding: "30px",
  borderRadius: "15px",
  border: "1px solid #5a3a2c",
};

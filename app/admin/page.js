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

        <div style={{ marginTop: "30px" }}>
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
        <h1>Welcome Back</h1>
        <p>Nimad ZAYKA Admin Panel</p>
      </div>
    </div>
  );
}

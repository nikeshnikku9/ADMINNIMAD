"use client"

export default function DashboardPage() {

  const stats = [
    {
      title: "Total Products",
      value: 29
    },
    {
      title: "QR Codes",
      value: 120
    },
    {
      title: "Barcodes",
      value: 210
    },
    {
      title: "Enquiries",
      value: 0
    }
  ]

  return (

    <div
      style={{
        background: "#3b1308",
        minHeight: "100vh",
        padding: "40px",
        color: "white"
      }}
    >

      <h1
        style={{
          fontSize: "55px",
          fontWeight: "bold",
          marginBottom: "10px"
        }}
      >
        Welcome Back
      </h1>

      <p
        style={{
          fontSize: "22px",
          color: "#f5d0a9",
          marginBottom: "40px"
        }}
      >
        Nimad ZAYKA Admin Dashboard
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "25px"
        }}
      >

        {stats.map((item, index) => (

          <div
            key={index}
            style={{
              background: "#5b2a1d",
              padding: "30px",
              borderRadius: "20px",
              border: "1px solid #8b5e3c"
            }}
          >

            <h2
              style={{
                fontSize: "20px",
                color: "#facc15",
                marginBottom: "15px"
              }}
            >
              {item.title}
            </h2>

            <h1
              style={{
                fontSize: "50px",
                fontWeight: "bold"
              }}
            >
              {item.value}
            </h1>

          </div>

        ))}

      </div>

    </div>

  )

}

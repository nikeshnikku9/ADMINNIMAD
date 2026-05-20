import Link from "next/link";

export default function Home() {

  const buttons = [
    {
      title: "Order on WhatsApp",
      sub: "+91 6265996333",
      color: "#19b600",
      link: "https://wa.me/916265996333",
    },
    {
      title: "Follow on Instagram",
      sub: "@nimadzayka.in",
      color: "#ff2f7d",
      link: "https://instagram.com/nimadzayka.in",
    },
    {
      title: "Visit Our Website",
      sub: "www.nimadzayka.com",
      color: "#d98b00",
      link: "https://nimadzayka.com",
    },
    {
      title: "Call Us",
      sub: "+91 6265996333",
      color: "#cc0000",
      link: "tel:+916265996333",
    },
    {
      title: "Our Address",
      sub: "Rajpur, Madhya Pradesh",
      color: "#8b3f00",
      link: "https://maps.app.goo.gl/p8qHLJo2VaKH5dTx5",
    },
    {
      title: "View Brochure",
      sub: "All products & catalogue",
      color: "#b00000",
      link: "#",
    },
  ];

  return (

    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1627894483216-2138af692e32?q=80&w=1600&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        padding: "20px",
      }}
    >

      <div
        style={{
          width: "100%",
          maxWidth: "430px",
          textAlign: "center",
          color: "white",
        }}
      >

        {/* LOGO */}
        <div
          style={{
            marginTop: "20px",
            background: "#c40000",
            borderRadius: "22px",
            border: "3px solid gold",
            padding: "25px",
            boxShadow: "0 0 25px rgba(255,215,0,0.5)",
          }}
        >

          <h1
            style={{
              fontSize: "58px",
              lineHeight: "60px",
              fontWeight: "bold",
            }}
          >
            NIMAD
            <br />
            ZAYKA
          </h1>

          <div
            style={{
              fontSize: "28px",
              marginTop: "10px",
              fontWeight: "bold",
            }}
          >
            SPICES
          </div>

        </div>

        {/* TAGLINE */}
        <h2
          style={{
            color: "#f5c542",
            marginTop: "25px",
            marginBottom: "35px",
            letterSpacing: "2px",
            fontWeight: "bold",
          }}
        >
          PREMIUM INDIAN SPICES
        </h2>

        {/* BUTTONS */}
        <div>

          {buttons.map((item, index) => (

            <a
              key={index}
              href={item.link}
              target="_blank"
              style={{
                display: "block",
                background: item.color,
                marginBottom: "18px",
                padding: "20px",
                borderRadius: "18px",
                textDecoration: "none",
                color: "white",
                textAlign: "left",
                boxShadow: "0 6px 18px rgba(0,0,0,0.35)",
              }}
            >

              <div
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                }}
              >
                {item.title}
              </div>

              <div
                style={{
                  marginTop: "6px",
                  fontSize: "15px",
                  opacity: 0.95,
                }}
              >
                {item.sub}
              </div>

            </a>

          ))}

        </div>

        {/* FOOTER */}
        <div
          style={{
            marginTop: "35px",
            borderTop: "2px solid gold",
            paddingTop: "25px",
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
            color: "#f5c542",
            fontSize: "13px",
          }}
        >

          {/* LEFT */}
          <div>

            <div style={{ fontSize: "28px" }}>
              🏅
            </div>

            <div>
              FSSAI: 21425190000195
            </div>

            <a
              href="/admin"
              style={{
                display: "inline-block",
                marginTop: "12px",
                background: "#700000",
                color: "white",
                padding: "8px 15px",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              Admin Panel
            </a>

          </div>

          {/* CENTER */}
          <div>

            <div style={{ fontSize: "28px" }}>
              🌿
            </div>

            <div>
              100% NATURAL
            </div>

          </div>

          {/* RIGHT */}
          <div>

            <div style={{ fontSize: "28px" }}>
              📦
            </div>

            <div>
              Packed with Purity
            </div>

          </div>

        </div>

      </div>

    </main>

  );

}

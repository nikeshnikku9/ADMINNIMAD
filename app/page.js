import Link from "next/link";

export default function Home() {

  const buttons = [

    {
      title: "Order on WhatsApp",
      sub: "+91 6265996333",
      color: "#1faa00",
      icon: "💬",
      link: "https://wa.me/916265996333",
    },

    {
      title: "Follow on Instagram",
      sub: "@nimadzayka.in",
      color: "#ff3c78",
      icon: "📸",
      link: "https://instagram.com/nimadzayka.in",
    },

    {
      title: "Visit Our Website",
      sub: "www.nimadzayka.com",
      color: "#d68a00",
      icon: "🌐",
      link: "https://nimadzayka.com",
    },

    {
      title: "Call Us",
      sub: "+91 6265996333",
      color: "#c40000",
      icon: "📞",
      link: "tel:+916265996333",
    },

    {
      title: "Our Address",
      sub: "Open Google Maps",
      color: "#8b3f00",
      icon: "📍",
      link: "https://maps.app.goo.gl/Y98H1D4qFaRkad719",
    },

    {
      title: "View Brochure",
      sub: "All products & catalogue",
      color: "#7a0000",
      icon: "📖",
      link: "#",
    },

  ];

  return (

    <main
      style={{

        minHeight: "100vh",

        background:
          "linear-gradient(rgba(0,0,0,0.68), rgba(0,0,0,0.88)), url('https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1600&auto=format&fit=crop')",

        backgroundSize: "cover",

        backgroundPosition: "center center",

        backgroundAttachment: "fixed",

        boxShadow:
          "inset 0 0 180px rgba(0,0,0,.65)",

        padding: "20px",

        display: "flex",

        justifyContent: "center",

        overflow: "hidden",

      }}
    >

      <div
        style={{
          width: "100%",
          maxWidth: "430px",
          color: "white",
          textAlign: "center",
          position: "relative",
          zIndex: 2,
        }}
      >

        {/* LOGO */}

        <div style={{ marginTop: "30px" }}>

          <div
            style={{

              background:
                "linear-gradient(145deg,#7b0000,#c1121f,#8b0000)",

              padding: "28px",

              borderRadius: "28px",

              border:
                "2px solid rgba(255,215,0,0.8)",

              fontWeight: "bold",

              fontSize: "55px",

              lineHeight: "60px",

              boxShadow:
                "0 0 25px rgba(255,174,0,.4), 0 0 60px rgba(255,0,0,.25)",

              backdropFilter: "blur(8px)",

              color: "white",

              textShadow:
                "0 0 12px rgba(255,255,255,.4)",

            }}
          >

            ✦
            <br />

            NIMAD
            <br />

            ZAYKA

            <div
              style={{
                fontSize: "28px",
                marginTop: "10px",
              }}
            >
              SPICES
            </div>

            ✦

          </div>

          <h2
            style={{

              marginTop: "30px",

              color: "#f5c542",

              letterSpacing: "2px",

              fontSize: "24px",

              textShadow:
                "0 0 15px rgba(255,215,0,.5)",

            }}
          >
            PREMIUM INDIAN SPICES
          </h2>

        </div>

        {/* BUTTONS */}

        <div style={{ marginTop: "40px" }}>

          {buttons.map((item, i) => (

            <a
              key={i}
              href={item.link}
              target="_blank"

              style={{

                display: "block",

                background:
                  `linear-gradient(135deg, ${item.color}, #00000055)`,

                padding: "22px",

                borderRadius: "24px",

                marginBottom: "18px",

                textDecoration: "none",

                color: "white",

                textAlign: "left",

                boxShadow:
                  "0 10px 30px rgba(0,0,0,0.45)",

                backdropFilter: "blur(10px)",

                border:
                  "1px solid rgba(255,255,255,0.12)",

                position: "relative",

                overflow: "hidden",

              }}
            >

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                }}
              >

                <div
                  style={{

                    width: "55px",

                    height: "55px",

                    borderRadius: "50%",

                    background:
                      "rgba(255,255,255,.15)",

                    display: "flex",

                    alignItems: "center",

                    justifyContent: "center",

                    fontSize: "28px",

                    boxShadow:
                      "0 0 15px rgba(255,255,255,.15)",

                  }}
                >
                  {item.icon}
                </div>

                <div>

                  <div
                    style={{
                      fontSize: "18px",
                      fontWeight: "bold",
                    }}
                  >
                    {item.title}
                  </div>

                  <div
                    style={{
                      fontSize: "14px",
                      opacity: 0.92,
                      marginTop: "5px",
                    }}
                  >
                    {item.sub}
                  </div>

                </div>

              </div>

              <div
                style={{
                  position: "absolute",
                  right: "20px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontSize: "26px",
                  fontWeight: "bold",
                }}
              >
                ➜
              </div>

            </a>

          ))}

        </div>

        {/* FOOTER */}

        <div
          style={{

            marginTop: "40px",

            borderTop:
              "1px solid rgba(255,215,0,.4)",

            paddingTop: "25px",

            display: "flex",

            justifyContent: "space-between",

            color: "#f5c542",

            fontSize: "14px",

            gap: "10px",

            background: "rgba(0,0,0,.35)",

            padding: "20px",

            borderRadius: "24px",

            backdropFilter: "blur(10px)",

          }}
        >

          <div style={{ flex: 1 }}>

            <div style={{ fontSize: "28px" }}>
              🏅
            </div>

            <div>
              FSSAI:
              <br />
              21425190000195
            </div>

            <Link
              href="/admin"

              style={{

                display: "block",

                marginTop: "14px",

                color: "white",

                textDecoration: "none",

                background:
                  "linear-gradient(135deg,#6b3f00,#d4a017)",

                padding: "10px",

                borderRadius: "14px",

                boxShadow:
                  "0 0 18px rgba(255,215,0,.3)",

                fontWeight: "bold",

              }}
            >
              Admin Panel
            </Link>

          </div>

          <div style={{ flex: 1 }}>

            <div style={{ fontSize: "28px" }}>
              🌿
            </div>

            <div>
              100%
              <br />
              NATURAL
            </div>

          </div>

          <div style={{ flex: 1 }}>

            <div style={{ fontSize: "28px" }}>
              📦
            </div>

            <div>
              Packed with
              <br />
              Purity
            </div>

          </div>

        </div>

      </div>

    </main>

  );

}

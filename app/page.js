"use client";

export default function HomePage() {

  const buttonStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: "22px 28px",
    borderRadius: "24px",
    marginBottom: "22px",
    textDecoration: "none",
    color: "white",
    fontWeight: "bold",
    boxShadow: "0 8px 25px rgba(0,0,0,0.35)",
    border: "2px solid rgba(255,255,255,0.15)",
    backdropFilter: "blur(6px)"
  };

  return (

    <div
      style={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1974&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px"
      }}
    >

      <div
        style={{
          width: "100%",
          maxWidth: "620px",
          background: "rgba(20,10,5,0.82)",
          borderRadius: "35px",
          padding: "35px",
          border: "2px solid rgba(255,180,0,0.25)",
          boxShadow: "0 0 40px rgba(0,0,0,0.6)"
        }}
      >

        {/* LOGO */}
        <div style={{ textAlign: "center" }}>

          <div
            style={{
              background:
                "linear-gradient(135deg,#b30000,#ff1a1a)",
              padding: "35px",
              borderRadius: "28px",
              border: "3px solid #ffb300",
              boxShadow: "0 0 35px rgba(255,100,0,0.5)"
            }}
          >

            <h1
              style={{
                color: "white",
                fontSize: "70px",
                lineHeight: "78px",
                margin: 0,
                fontWeight: "900",
                letterSpacing: "3px"
              }}
            >
              NIMAD
              <br />
              ZAYKA
            </h1>

            <div
              style={{
                marginTop: "10px",
                color: "white",
                fontSize: "30px",
                letterSpacing: "5px",
                fontWeight: "bold"
              }}
            >
              SPICES
            </div>

          </div>

          <div
            style={{
              marginTop: "30px",
              marginBottom: "35px",
              color: "#ffcc66",
              fontSize: "26px",
              fontWeight: "bold",
              letterSpacing: "2px"
            }}
          >
            PREMIUM INDIAN SPICES
          </div>

        </div>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/916265996333"
          target="_blank"
          style={{
            ...buttonStyle,
            background:
              "linear-gradient(135deg,#1f8f2d,#39d353)"
          }}
        >
          <div>
            <div style={{ fontSize: "34px" }}>
              Order on WhatsApp
            </div>
            <div style={{ fontSize: "20px" }}>
              +91 6265996333
            </div>
          </div>

          <div style={{ fontSize: "45px" }}>➜</div>
        </a>

        {/* INSTAGRAM */}
        <a
          href="https://instagram.com/nimadzayka.in"
          target="_blank"
          style={{
            ...buttonStyle,
            background:
              "linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045)"
          }}
        >
          <div>
            <div style={{ fontSize: "34px" }}>
              Follow on Instagram
            </div>
            <div style={{ fontSize: "20px" }}>
              @nimadzayka.in
            </div>
          </div>

          <div style={{ fontSize: "45px" }}>➜</div>
        </a>

        {/* WEBSITE */}
        <a
          href="https://www.nimadzayka.com"
          target="_blank"
          style={{
            ...buttonStyle,
            background:
              "linear-gradient(135deg,#c97a00,#ffb300)"
          }}
        >
          <div>
            <div style={{ fontSize: "34px" }}>
              Visit Our Website
            </div>
            <div style={{ fontSize: "20px" }}>
              www.nimadzayka.com
            </div>
          </div>

          <div style={{ fontSize: "45px" }}>➜</div>
        </a>

        {/* CALL */}
        <a
          href="tel:6265996333"
          style={{
            ...buttonStyle,
            background:
              "linear-gradient(135deg,#b30000,#ff1f1f)"
          }}
        >
          <div>
            <div style={{ fontSize: "34px" }}>
              Call Us
            </div>
            <div style={{ fontSize: "20px" }}>
              +91 6265996333
            </div>
          </div>

          <div style={{ fontSize: "45px" }}>➜</div>
        </a>

        {/* ADDRESS */}
        <a
          href="https://maps.google.com"
          target="_blank"
          style={{
            ...buttonStyle,
            background:
              "linear-gradient(135deg,#8b4513,#cc7000)"
          }}
        >
          <div>
            <div style={{ fontSize: "34px" }}>
              Our Address
            </div>
            <div style={{ fontSize: "20px" }}>
              Nimad ZAYKA, India
            </div>
          </div>

          <div style={{ fontSize: "45px" }}>➜</div>
        </a>

        {/* BROCHURE */}
        <a
          href="#"
          style={{
            ...buttonStyle,
            background:
              "linear-gradient(135deg,#8b0000,#d62828)"
          }}
        >
          <div>
            <div style={{ fontSize: "34px" }}>
              View Brochure
            </div>
            <div style={{ fontSize: "20px" }}>
              All products & catalogue
            </div>
          </div>

          <div style={{ fontSize: "45px" }}>➜</div>
        </a>

        {/* FOOTER */}
        <div
          style={{
            marginTop: "40px",
            paddingTop: "25px",
            borderTop: "1px solid rgba(255,255,255,0.15)",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px",
            textAlign: "center"
          }}
        >

          <div style={{ color: "#ffcc66" }}>
            <div style={{ fontSize: "38px" }}>
              fssai
            </div>
            <div style={{ fontSize: "18px" }}>
              FSSAI: 21425190000195
            </div>
          </div>

          <div style={{ color: "#ffcc66" }}>
            <div style={{ fontSize: "42px" }}>
              🌿
            </div>
            <div
              style={{
                fontSize: "20px",
                fontWeight: "bold"
              }}
            >
              100% NATURAL
            </div>
          </div>

          <div
            style={{
              color: "#ffcc66",
              maxWidth: "220px",
              fontSize: "20px",
              fontWeight: "bold"
            }}
          >
            Packed with Purity,
            Delivered with Trust.
          </div>

        </div>

      </div>

    </div>

  );

}

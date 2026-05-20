export default function Home() {

  return (

    <main
      style={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1200&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "20px",
        display: "flex",
        justifyContent: "center",
      }}
    >

      <div
        style={{
          width: "100%",
          maxWidth: "430px",
          color: "white",
          textAlign: "center",
        }}
      >

        {/* LOGO */}
        <div style={{ marginTop: "30px" }}>

          <div
            style={{
              background: "#b30000",
              padding: "25px",
              borderRadius: "20px",
              border: "3px solid gold",
              fontWeight: "bold",
              fontSize: "55px",
              lineHeight: "60px",
              boxShadow: "0 0 20px rgba(255,215,0,0.5)",
            }}
          >
            NIMAD
            <br />
            ZAYKA

            <div style={{ fontSize: "28px" }}>
              SPICES
            </div>

          </div>

          <h2
            style={{
              marginTop: "30px",
              color: "#f5c542",
              letterSpacing: "2px",
            }}
          >
            PREMIUM INDIAN SPICES
          </h2>

        </div>

        {/* BUTTONS */}
        <div style={{ marginTop: "40px" }}>

          {[
            {
              title: "Order on WhatsApp",
              sub: "+91 6265996333",
              color: "#1faa00",
              link: "https://wa.me/916265996333",
            },

            {
              title: "Follow on Instagram",
              sub: "@nimadzayka.in",
              color: "#ff3c78",
              link: "https://instagram.com/nimadzayka.in",
            },

            {
              title: "Visit Our Website",
              sub: "www.nimadzayka.com",
              color: "#d68a00",
              link: "https://nimadzayka.com",
            },

            {
              title: "Call Us",
              sub: "+91 6265996333",
              color: "#c40000",
              link: "tel:+916265996333",
            },

            {
              title: "Our Address",
              sub: "Rajpur, Madhya Pradesh",
              color: "#8b3f00",
              link: "#",
            },

            {
              title: "View Brochure",
              sub: "All products & catalogue",
              color: "#a50000",
              link: "#",
            },

          ].map((item, i) => (

            <a
              key={i}
              href={item.link}
              target="_blank"
              style={{
                display: "block",
                background: item.color,
                padding: "20px",
                borderRadius: "20px",
                marginBottom: "18px",
                textDecoration: "none",
                color: "white",
                textAlign: "left",
                boxShadow: "0 5px 15px rgba(0,0,0,0.4)",
              }}
            >

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
                  opacity: 0.9,
                  marginTop: "5px",
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
            marginTop: "40px",
            borderTop: "1px solid gold",
            paddingTop: "20px",
            display: "flex",
            justifyContent: "space-between",
            color: "#f5c542",
            fontSize: "14px",
            gap: "10px",
          }}
        >

          <div>
            <div style={{ fontSize: "28px" }}>
              🏅
            </div>

            <div>
              FSSAI: 21425190000195
            </div>
          </div>

          <div>
            <div style={{ fontSize: "28px" }}>
              🌿
            </div>

            <div>
              100% NATURAL
            </div>
          </div>

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

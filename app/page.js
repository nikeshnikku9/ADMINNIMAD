"use client";

import Link from "next/link";

export default function HomePage() {

  return (

    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom, #2b0f08, #4b1f14)",
        color: "white",
        fontFamily: "sans-serif"
      }}
    >

      {/* TOP NAVBAR */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 40px",
          borderBottom: "1px solid rgba(255,255,255,0.1)"
        }}
      >

        <h1
          style={{
            fontSize: "38px",
            fontWeight: "bold",
            color: "#f4c400"
          }}
        >
          NIMAD ZAYKA
        </h1>

        <div
          style={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap"
          }}
        >

          <a
            href="https://instagram.com"
            target="_blank"
            style={navBtn}
          >
            Instagram
          </a>

          <a
            href="https://wa.me/916265996333"
            target="_blank"
            style={navBtn}
          >
            WhatsApp
          </a>

          <Link
            href="/admin"
            style={navBtn}
          >
            Admin Login
          </Link>

        </div>

      </div>

      {/* HERO SECTION */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "100px 20px"
        }}
      >

        <div
          style={{
            maxWidth: "900px"
          }}
        >

          <h1
            style={{
              fontSize: "70px",
              fontWeight: "bold",
              color: "#f4c400",
              marginBottom: "20px"
            }}
          >
            NIMAD ZAYKA SPICES
          </h1>

          <p
            style={{
              fontSize: "24px",
              color: "#f5d0a9",
              lineHeight: "1.7",
              marginBottom: "40px"
            }}
          >
            Premium Indian Spices with authentic
            Nimad taste. Experience rich aroma,
            bold flavors, and traditional quality
            in every pack.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap"
            }}
          >

            <a
              href="https://wa.me/916265996333"
              target="_blank"
              style={heroBtn}
            >
              Order on WhatsApp
            </a>

            <Link
              href="/admin"
              style={heroBtn}
            >
              Admin Panel
            </Link>

          </div>

        </div>

      </div>

      {/* PRODUCTS */}
      <div
        style={{
          padding: "60px 40px"
        }}
      >

        <h2
          style={{
            textAlign: "center",
            fontSize: "50px",
            marginBottom: "50px",
            color: "#f4c400"
          }}
        >
          Our Products
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "25px"
          }}
        >

          {products.map((item,index)=>(

            <div
              key={index}
              style={{
                background: "#5a2415",
                padding: "25px",
                borderRadius: "20px",
                border:
                  "1px solid rgba(255,255,255,0.1)"
              }}
            >

              <h3
                style={{
                  fontSize: "28px",
                  marginBottom: "15px",
                  color: "#f4c400"
                }}
              >
                {item.name}
              </h3>

              <p
                style={{
                  color: "#f5d0a9",
                  marginBottom: "10px"
                }}
              >
                {item.size}
              </p>

              <p
                style={{
                  fontSize: "22px",
                  fontWeight: "bold"
                }}
              >
                ₹ {item.price}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

}

const navBtn = {

  background: "#f4c400",

  color: "#222",

  padding: "12px 20px",

  borderRadius: "12px",

  textDecoration: "none",

  fontWeight: "bold"

};

const heroBtn = {

  background: "#f4c400",

  color: "#222",

  padding: "16px 28px",

  borderRadius: "14px",

  textDecoration: "none",

  fontWeight: "bold",

  fontSize: "18px"

};

const products = [

  {
    name: "Haldi Powder",
    size: "50g / 100g / 200g / 500g / 1kg",
    price: 45
  },

  {
    name: "Mirchi Powder",
    size: "50g / 100g / 200g / 500g / 1kg",
    price: 65
  },

  {
    name: "Dhaniya Powder",
    size: "50g / 100g / 200g / 500g / 1kg",
    price: 55
  },

  {
    name: "Meat Masala",
    size: "20g / 50g / 100g",
    price: 160
  },

  {
    name: "Chicken Masala",
    size: "20g / 50g / 100g",
    price: 160
  },

  {
    name: "Khada Masala",
    size: "50g / 100g",
    price: 180
  }

];

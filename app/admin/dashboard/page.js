"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {

  const router = useRouter();

  useEffect(() => {

    const auth =
      localStorage.getItem("nimad-admin");

    if (auth !== "loggedin") {

      router.push("/admin");

    }

  }, []);

  const logout = () => {

    localStorage.removeItem(
      "nimad-admin"
    );

    router.push("/admin");

  };

  return (

    <main
      style={{

        minHeight: "100vh",

        background:
          "linear-gradient(#2b0f08,#3b170b)",

        padding: "30px",

        color: "white",

      }}
    >

      <div
        style={{

          display: "flex",

          justifyContent: "space-between",

          alignItems: "center",

          marginBottom: "35px",

        }}
      >

        <div>

          <h1
            style={{
              fontSize: "40px",
            }}
          >
            Admin Dashboard
          </h1>

          <p
            style={{
              marginTop: "8px",
              color: "#f5c542",
            }}
          >
            NIMAD ZAYKA SPICES
          </p>

        </div>

        <button
          onClick={logout}

          style={{

            padding: "12px 22px",

            border: "none",

            borderRadius: "12px",

            background: "#c40000",

            color: "white",

            fontWeight: "bold",

            cursor: "pointer",

          }}
        >
          Logout
        </button>

      </div>

      <div
        style={{

          display: "grid",

          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",

          gap: "20px",

        }}
      >

        <Card
          title="Products"
          link="/admin/products"
        />

        <Card
          title="Barcode Studio"
          link="/admin/barcode"
        />

        <Card
          title="QR Generator"
          link="/admin/qrcode"
        />

        <Card
          title="Enquiries"
          link="/admin/enquiries"
        />

      </div>

    </main>

  );

}

function Card({ title, link }) {

  return (

    <Link
      href={link}

      style={{
        textDecoration: "none",
      }}
    >

      <div
        style={{

          background:
            "rgba(255,255,255,.06)",

          border:
            "1px solid rgba(255,255,255,.08)",

          borderRadius: "22px",

          padding: "30px",

          color: "white",

          backdropFilter: "blur(10px)",

          boxShadow:
            "0 0 25px rgba(0,0,0,.25)",

        }}
      >

        <h2
          style={{
            fontSize: "28px",
          }}
        >
          {title}
        </h2>

      </div>

    </Link>

  );

}

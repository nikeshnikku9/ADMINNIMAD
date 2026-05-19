"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function AdminPage() {

  const [isLoggedIn, setIsLoggedIn] =
    useState(false);

  const [username, setUsername] =
    useState("");

  const [password, setPassword] =
    useState("");

  useEffect(() => {

    const auth =
      localStorage.getItem("nimad-admin");

    if (auth === "loggedin") {

      setIsLoggedIn(true);

    }

  }, []);

  const handleLogin = () => {

    if (
      username === "admin" &&
      password === "nimad123"
    ) {

      localStorage.setItem(
        "nimad-admin",
        "loggedin"
      );

      setIsLoggedIn(true);

    } else {

      alert("Wrong Username or Password");

    }

  };

  const logout = () => {

    localStorage.removeItem(
      "nimad-admin"
    );

    setIsLoggedIn(false);

  };

  // LOGIN SCREEN

  if (!isLoggedIn) {

    return (

      <main
        style={{

          minHeight: "100vh",

          background:
            "linear-gradient(rgba(0,0,0,.75), rgba(0,0,0,.85)), url('https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1600&auto=format&fit=crop')",

          backgroundSize: "cover",

          backgroundPosition: "center",

          display: "flex",

          justifyContent: "center",

          alignItems: "center",

          padding: "20px",

        }}
      >

        <div
          style={{

            width: "100%",

            maxWidth: "420px",

            background:
              "rgba(0,0,0,.45)",

            backdropFilter: "blur(15px)",

            border:
              "1px solid rgba(255,215,0,.25)",

            borderRadius: "28px",

            padding: "35px",

            color: "white",

            boxShadow:
              "0 0 40px rgba(255,174,0,.15)",

          }}
        >

          <div
            style={{
              textAlign: "center",
              marginBottom: "30px",
            }}
          >

            <div
              style={{
                fontSize: "55px",
                marginBottom: "15px",
              }}
            >
              🛡
            </div>

            <h1
              style={{
                fontSize: "36px",
                color: "#f5c542",
              }}
            >
              Admin Login
            </h1>

            <p
              style={{
                marginTop: "10px",
                color: "#ddd",
              }}
            >
              NIMAD ZAYKA SPICES
            </p>

          </div>

          <div
            style={{
              marginBottom: "20px",
            }}
          >

            <label>
              Username
            </label>

            <input
              value={username}
              onChange={(e)=>
                setUsername(e.target.value)
              }

              placeholder="Enter username"

              style={inputStyle}
            />

          </div>

          <div
            style={{
              marginBottom: "25px",
            }}
          >

            <label>
              Password
            </label>

            <input
              type="password"

              value={password}

              onChange={(e)=>
                setPassword(e.target.value)
              }

              placeholder="Enter password"

              style={inputStyle}
            />

          </div>

          <button
            onClick={handleLogin}

            style={{

              width: "100%",

              padding: "16px",

              border: "none",

              borderRadius: "16px",

              background:
                "linear-gradient(135deg,#b8860b,#ffcc00)",

              color: "black",

              fontWeight: "bold",

              fontSize: "18px",

              cursor: "pointer",

              boxShadow:
                "0 0 20px rgba(255,215,0,.25)",

            }}
          >
            Login to Dashboard
          </button>

          <div
            style={{
              marginTop: "20px",
              textAlign: "center",
              color: "#aaa",
              fontSize: "13px",
            }}
          >
            Secure Admin Access
          </div>

        </div>

      </main>

    );

  }

  // DASHBOARD

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

        <DashboardCard
          title="Products"
          desc="Manage Products"
          link="/admin/products"
        />

        <DashboardCard
          title="Barcode Studio"
          desc="Generate Barcodes"
          link="/admin/barcode"
        />

        <DashboardCard
          title="QR Generator"
          desc="Create QR Codes"
          link="/admin/qrcode"
        />

        <DashboardCard
          title="Enquiries"
          desc="Distributor Leads"
          link="/admin/enquiries"
        />

      </div>

    </main>

  );

}

function DashboardCard({
  title,
  desc,
  link
}) {

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

          transition: ".3s",

        }}
      >

        <h2
          style={{
            fontSize: "28px",
            marginBottom: "12px",
          }}
        >
          {title}
        </h2>

        <p
          style={{
            color: "#ddd",
          }}
        >
          {desc}
        </p>

      </div>

    </Link>

  );

}

const inputStyle = {

  width: "100%",

  padding: "15px",

  marginTop: "8px",

  borderRadius: "14px",

  border: "1px solid rgba(255,255,255,.15)",

  background:
    "rgba(255,255,255,.08)",

  color: "white",

  fontSize: "16px",

  outline: "none",

};

"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {

  const router = useRouter();

  const [username, setUsername] =
    useState("");

  const [password, setPassword] =
    useState("");

  useEffect(() => {

    const auth =
      localStorage.getItem("nimad-admin");

    if (auth === "loggedin") {

      router.push("/admin/dashboard");

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

      router.push("/admin/dashboard");

    } else {

      alert("Wrong Username or Password");

    }

  };

  return (

    <main
      style={{

        minHeight: "100vh",

        background:
          "linear-gradient(rgba(0,0,0,.75), rgba(0,0,0,.88)), url('https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1600&auto=format&fit=crop')",

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
              fontSize: "60px",
              marginBottom: "12px",
            }}
          >
            🔐
          </div>

          <h1
            style={{
              fontSize: "38px",
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

      </div>

    </main>

  );

}

const inputStyle = {

  width: "100%",

  padding: "15px",

  marginTop: "8px",

  borderRadius: "14px",

  border:
    "1px solid rgba(255,255,255,.15)",

  background:
    "rgba(255,255,255,.08)",

  color: "white",

  fontSize: "16px",

  outline: "none",

};

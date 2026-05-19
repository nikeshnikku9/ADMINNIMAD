"use client";

import { useState } from "react";

export default function AdminLoginPage() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

    // LOGIN CHECK
    if (
      username === "admin" &&
      password === "nikesh@09"
    ) {

      // SAVE LOGIN
      localStorage.setItem(
        "nimad-admin-login",
        "true"
      );

      // REDIRECT
      window.location.href =
        "/admin/dashboard";

    } else {

      alert(
        "Invalid Username or Password"
      );

    }

  };

  return (

    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(to right, #2a120d, #4d1f14)"
      }}
    >

      <div
        style={{
          width: "420px",
          background: "rgba(0,0,0,0.85)",
          padding: "40px",
          borderRadius: "24px",
          border: "2px solid #f4c400",
          boxShadow:
            "0 0 35px rgba(255,215,0,0.3)"
        }}
      >

        {/* TOP */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "35px"
          }}
        >

          <div
            style={{
              fontSize: "55px",
              marginBottom: "10px"
            }}
          >
            🔐
          </div>

          <h1
            style={{
              color: "#f4c400",
              fontSize: "42px",
              marginBottom: "10px",
              fontWeight: "bold"
            }}
          >
            Admin Login
          </h1>

          <p
            style={{
              color: "#fff",
              fontSize: "18px"
            }}
          >
            NIMAD ZAYKA SPICES
          </p>

        </div>

        {/* USERNAME */}
        <div
          style={{
            marginBottom: "20px"
          }}
        >

          <label
            style={{
              color: "#fff",
              display: "block",
              marginBottom: "8px",
              fontWeight: "bold"
            }}
          >
            Username
          </label>

          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e)=>
              setUsername(e.target.value)
            }
            style={inputStyle}
          />

        </div>

        {/* PASSWORD */}
        <div
          style={{
            marginBottom: "25px"
          }}
        >

          <label
            style={{
              color: "#fff",
              display: "block",
              marginBottom: "8px",
              fontWeight: "bold"
            }}
          >
            Password
          </label>

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e)=>
              setPassword(e.target.value)
            }
            style={inputStyle}
          />

        </div>

        {/* LOGIN BUTTON */}
        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "16px",
            background: "#f4c400",
            border: "none",
            borderRadius: "14px",
            fontWeight: "bold",
            fontSize: "18px",
            cursor: "pointer"
          }}
        >
          Login to Dashboard
        </button>

      </div>

    </div>

  );

}

const inputStyle = {

  width: "100%",

  padding: "15px",

  borderRadius: "12px",

  border: "1px solid #666",

  background: "#222",

  color: "#fff",

  fontSize: "16px",

  outline: "none"

};

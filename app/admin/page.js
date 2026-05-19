"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {

  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

    if (username === "admin" && password === "1234") {

      localStorage.setItem("nimad-admin-login", "true");

      router.push("/admin/dashboard");

    } else {

      alert("Invalid Username or Password");

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
          "linear-gradient(to right, #2a120d, #5a2415)"
      }}
    >

      <div
        style={{
          width: "420px",
          background: "#1f1f1f",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 0 25px rgba(255,215,0,0.3)",
          border: "2px solid #f4c400"
        }}
      >

        <div
          style={{
            textAlign: "center",
            marginBottom: "30px"
          }}
        >

          <h1
            style={{
              color: "#f4c400",
              fontSize: "42px",
              marginBottom: "10px"
            }}
          >
            Admin Login
          </h1>

          <p
            style={{
              color: "white",
              fontSize: "18px"
            }}
          >
            NIMAD ZAYKA SPICES
          </p>

        </div>

        <div style={{ marginBottom: "20px" }}>

          <label
            style={{
              color: "white",
              display: "block",
              marginBottom: "8px"
            }}
          >
            Username
          </label>

          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "10px",
              border: "1px solid #555",
              fontSize: "16px"
            }}
          />

        </div>

        <div style={{ marginBottom: "25px" }}>

          <label
            style={{
              color: "white",
              display: "block",
              marginBottom: "8px"
            }}
          >
            Password
          </label>

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "10px",
              border: "1px solid #555",
              fontSize: "16px"
            }}
          />

        </div>

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "12px",
            border: "none",
            background: "#f4c400",
            color: "#111",
            fontWeight: "bold",
            fontSize: "18px",
            cursor: "pointer"
          }}
        >
          Login to Dashboard
        </button>

        <div
          style={{
            marginTop: "25px",
            textAlign: "center",
            color: "#bbb",
            fontSize: "14px"
          }}
        >
          Username: admin <br />
          Password: 1234
        </div>

      </div>

    </div>

  );

}

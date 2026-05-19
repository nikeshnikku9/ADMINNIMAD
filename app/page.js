"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminPage() {

  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {

    if (
      username === "admin" &&
      password === "nikesh@09"
    ) {

      localStorage.setItem(
        "nimad-admin-login",
        "true"
      );

      router.push("/admin/dashboard");

    } else {

      alert("Wrong Username or Password");

    }

  };

  return (

    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#2a120d"
      }}
    >

      <div
        style={{
          width: "400px",
          background: "#111",
          padding: "40px",
          borderRadius: "20px",
          border: "2px solid gold"
        }}
      >

        <h1
          style={{
            color: "gold",
            textAlign: "center",
            marginBottom: "30px"
          }}
        >
          Admin Login
        </h1>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
          style={{
            width: "100%",
            padding: "15px",
            marginBottom: "20px",
            borderRadius: "10px"
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          style={{
            width: "100%",
            padding: "15px",
            marginBottom: "20px",
            borderRadius: "10px"
          }}
        />

        <button
          onClick={login}
          style={{
            width: "100%",
            padding: "15px",
            background: "gold",
            border: "none",
            borderRadius: "10px",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          LOGIN
        </button>

      </div>

    </div>

  );

}

"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { Lock, LogIn } from "lucide-react";

export default function AdminLoginPage() {
  const searchParams = useSearchParams();
  const next = searchParams.get("next") || "/admin/dashboard";
  const [email, setEmail] = useState("admin@nimadzayka.com");
  const [password, setPassword] = useState("admin12345");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function login(event) {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Login failed.");
      }

      window.location.href = next;
    } catch (loginError) {
      setError(loginError.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="login-page">
      <form className="login-card" onSubmit={login}>
        <div className="login-mark">
          <Lock size={26} />
        </div>
        <p className="eyebrow">Nimad Zayka ERP</p>
        <h1>Admin Login</h1>
        <p className="login-copy">
          Secure access for Super Admin, Inventory Staff and Billing Staff.
        </p>

        {error && <div className="message">{error}</div>}

        <label>
          Email
          <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" required />
        </label>
        <label>
          Password
          <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" required />
        </label>

        <button className="gold-btn" disabled={loading}>
          <LogIn size={18} />
          {loading ? "Logging in..." : "Login"}
        </button>

        <div className="demo-logins">
          <strong>Starter logins:</strong>
          <span>Super Admin: admin@nimadzayka.com / admin12345</span>
          <span>Inventory: inventory@nimadzayka.com / stock12345</span>
          <span>Billing: billing@nimadzayka.com / billing12345</span>
        </div>
      </form>
    </main>
  );
}

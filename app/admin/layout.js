"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

export default function AdminLayout({ children }) {

  const router = useRouter();
  const pathname = usePathname();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {

    const login = localStorage.getItem("nimad-admin-login");

    if (login === "true") {
      setIsLoggedIn(true);
    } else {

      // LOGIN PAGE ALLOW
      if (pathname !== "/admin") {
        router.push("/admin");
      }

    }

  }, [pathname, router]);

  // LOGOUT
  const logout = () => {

    localStorage.removeItem("nimad-admin-login");

    router.push("/admin");

  };

  // ONLY LOGIN PAGE
  if (pathname === "/admin") {
    return children;
  }

  // BLOCK DIRECT ACCESS
  if (!isLoggedIn) {
    return null;
  }

  // ADMIN PANEL
  return (

    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#2a120d"
      }}
    >

      {/* SIDEBAR */}
      <div
        style={{
          width: "250px",
          background: "#f7f2ea",
          padding: "20px",
          borderRight: "4px solid #5a2415"
        }}
      >

        <h1
          style={{
            color: "#6b1d1d",
            fontSize: "36px",
            fontWeight: "bold",
            marginBottom: "30px"
          }}
        >
          ADMIN
        </h1>

        <SidebarButton
          href="/admin/dashboard"
          text="Dashboard"
        />

        <SidebarButton
          href="/admin/products"
          text="Products"
        />

        <SidebarButton
          href="/admin/qrcode"
          text="QR Generator"
        />

        <SidebarButton
          href="/admin/barcode"
          text="Barcode Studio"
        />

        <SidebarButton
          href="/admin/enquiries"
          text="Enquiries"
        />

        <button
          onClick={logout}
          style={{
            width: "100%",
            padding: "16px",
            marginTop: "25px",
            border: "none",
            borderRadius: "12px",
            background: "#8b0000",
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "16px"
          }}
        >
          Logout
        </button>

      </div>

      {/* MAIN CONTENT */}
      <div
        style={{
          flex: 1,
          padding: "30px"
        }}
      >
        {children}
      </div>

    </div>

  );

}

function SidebarButton({ href, text }) {

  return (

    <Link
      href={href}
      style={{
        textDecoration: "none"
      }}
    >

      <div
        style={{
          background: "#f4c400",
          color: "#222",
          padding: "16px",
          borderRadius: "14px",
          marginBottom: "16px",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "18px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
        }}
      >
        {text}
      </div>

    </Link>

  );

}

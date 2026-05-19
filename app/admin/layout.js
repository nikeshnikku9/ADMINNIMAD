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

      if (pathname !== "/admin") {
        router.push("/admin");
      }

    }

  }, [pathname, router]);

  const logout = () => {
    localStorage.removeItem("nimad-admin-login");
    router.push("/admin");
  };

  if (pathname === "/admin") {
    return children;
  }

  if (!isLoggedIn) {
    return null;
  }

  return (

    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#2a120d"
      }}
    >

      <div
        style={{
          width: "260px",
          background: "#f7f2ea",
          padding: "20px",
          borderRight: "4px solid #5a2415"
        }}
      >

        <h1
          style={{
            color: "#6b1d1d",
            fontSize: "42px",
            fontWeight: "bold",
            marginBottom: "30px"
          }}
        >
          ADMIN PORTAL
        </h1>

        <SidebarButton href="/admin/dashboard" text="Dashboard" />
        <SidebarButton href="/admin/products" text="Products" />
        <SidebarButton href="/admin/qrcode" text="QR Generator" />
        <SidebarButton href="/admin/barcode" text="Barcode Studio" />
        <SidebarButton href="/admin/enquiries" text="Enquiries" />

        <button
          onClick={logout}
          style={{
            marginTop: "30px",
            width: "100%",
            padding: "15px",
            borderRadius: "12px",
            border: "none",
            background: "#8b0000",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          Logout
        </button>

      </div>

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

    <Link href={href} style={{ textDecoration: "none" }}>

      <div
        style={{
          background: "#f4c400",
          color: "#222",
          padding: "18px",
          borderRadius: "14px",
          marginBottom: "18px",
          fontWeight: "bold",
          fontSize: "20px",
          textAlign: "center",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
        }}
      >
        {text}
      </div>

    </Link>

  );

}

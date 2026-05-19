"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminLayout({ children }) {

  const pathname = usePathname();

  // LOGIN PAGE PAR SIDEBAR HIDE
  if (pathname === "/admin") {
    return children;
  }

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

      </div>

      {/* MAIN

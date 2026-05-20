"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardLayout({
  children,
}) {

  const router = useRouter();

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const login =
      localStorage.getItem(
        "nimad-admin-login"
      );

    if (login === "true") {

      setLoading(false);

    } else {

      router.push("/admin");

    }

  }, []);

  if (loading) {

    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#1a0d08",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        Loading Dashboard...
      </div>
    );

  }

  return children;

}

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLayout({ children }) {

  const router = useRouter();

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const isLoggedIn =
      localStorage.getItem("nimad-admin-login");

    if (isLoggedIn !== "true") {

      router.push("/admin");

    } else {

      setLoading(false);

    }

  }, []);

  if (loading) {

    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#1a0d08",
          color: "white",
          fontSize: "22px",
          fontWeight: "bold",
        }}
      >
        Loading Admin Panel...
      </div>
    );

  }

  return children;

}

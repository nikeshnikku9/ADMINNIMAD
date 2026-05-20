"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function AdminLayout({ children }) {

  const router = useRouter();

  const pathname = usePathname();

  const [allowed, setAllowed] = useState(false);

  useEffect(() => {

    // LOGIN PAGE KO ALLOW KARO
    if (pathname === "/admin") {

      setAllowed(true);

      return;

    }

    // LOGIN CHECK
    const login =
      localStorage.getItem("nimad-admin-login");

    if (login === "true") {

      setAllowed(true);

    } else {

      router.push("/admin");

    }

  }, [pathname]);

  if (!allowed) {

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
        Loading...
      </div>
    );

  }

  return children;

}

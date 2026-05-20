"use client";

export default function AdminLayout({
  children,
}) {

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#1a0d08",
      }}
    >

      {children}

    </div>

  );

}

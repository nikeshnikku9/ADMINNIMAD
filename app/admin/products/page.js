"use client";

import { useState } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "HALDI POWDER",
      price: 45,
      barcode: "9206234110026",
    },
  ]);

  const addProduct = () => {
    const newProduct = {
      id: Date.now(),
      name: "NEW PRODUCT",
      price: 100,
      barcode: Math.floor(Math.random() * 1000000000000).toString(),
    };

    setProducts([...products, newProduct]);
  };

  return (
    <div
      style={{
        background: "#3b241d",
        minHeight: "100vh",
        padding: "40px",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "40px", marginBottom: "30px" }}>
        NIMAD ZAYKA PRODUCTS
      </h1>

      <button
        onClick={addProduct}
        style={{
          background: "#facc15",
          color: "black",
          border: "none",
          padding: "15px 25px",
          borderRadius: "10px",
          fontSize: "18px",
          cursor: "pointer",
          marginBottom: "30px",
        }}
      >
        + Add Product
      </button>

      <div style={{ display: "grid", gap: "20px" }}>
        {products.map((item) => (
          <div
            key={item.id}
            style={{
              background: "#5a382d",
              padding: "20px",
              borderRadius: "15px",
            }}
          >
            <h2>{item.name}</h2>

            <p>₹ {item.price}</p>

            <p>{item.barcode}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

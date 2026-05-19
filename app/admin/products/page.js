"use client";

import { useEffect, useState } from "react";

export default function ProductsPage() {

  const defaultProducts = [
    {
      id: 1,
      name: "Meat Masala",
      size: "20g",
      price: 45,
      stock: 50,
      barcode: "920100000001"
    },
    {
      id: 2,
      name: "Meat Masala",
      size: "50g",
      price: 90,
      stock: 40,
      barcode: "920100000002"
    },
    {
      id: 3,
      name: "Meat Masala",
      size: "100g",
      price: 170,
      stock: 30,
      barcode: "920100000003"
    },
    {
      id: 4,
      name: "Garam Masala",
      size: "50g",
      price: 80,
      stock: 40,
      barcode: "920100000004"
    },
    {
      id: 5,
      name: "Garam Masala",
      size: "100g",
      price: 150,
      stock: 35,
      barcode: "920100000005"
    },
    {
      id: 6,
      name: "Shahi Paneer Masala",
      size: "50g",
      price: 85,
      stock: 30,
      barcode: "920100000006"
    },
    {
      id: 7,
      name: "Shahi Paneer Masala",
      size: "100g",
      price: 160,
      stock: 25,
      barcode: "920100000007"
    },
    {
      id: 8,
      name: "Dal Bati Masala",
      size: "50g",
      price: 75,
      stock: 35,
      barcode: "920100000008"
    },
    {
      id: 9,
      name: "Dal Bati Masala",
      size: "100g",
      price: 145,
      stock: 25,
      barcode: "920100000009"
    },
    {
      id: 10,
      name: "Khada Masala",
      size: "50g",
      price: 95,
      stock: 20,
      barcode: "920100000010"
    },
    {
      id: 11,
      name: "Khada Masala",
      size: "100g",
      price: 180,
      stock: 20,
      barcode: "920100000011"
    },
    {
      id: 12,
      name: "Chicken Masala",
      size: "20g",
      price: 40,
      stock: 50,
      barcode: "920100000012"
    },
    {
      id: 13,
      name: "Chicken Masala",
      size: "50g",
      price: 85,
      stock: 40,
      barcode: "920100000013"
    },
    {
      id: 14,
      name: "Chicken Masala",
      size: "100g",
      price: 160,
      stock: 30,
      barcode: "920100000014"
    },
    {
      id: 15,
      name: "Haldi Powder",
      size: "50g",
      price: 20,
      stock: 100,
      barcode: "920100000015"
    },
    {
      id: 16,
      name: "Haldi Powder",
      size: "100g",
      price: 40,
      stock: 90,
      barcode: "920100000016"
    },
    {
      id: 17,
      name: "Mirchi Powder",
      size: "100g",
      price: 60,
      stock: 80,
      barcode: "920100000017"
    },
    {
      id: 18,
      name: "Dhaniya Powder",
      size: "100g",
      price: 50,
      stock: 70,
      barcode: "920100000018"
    }
  ];

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const savedProducts = localStorage.getItem("nimad-products");

    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    } else {
      setProducts(defaultProducts);
      localStorage.setItem(
        "nimad-products",
        JSON.stringify(defaultProducts)
      );
    }
  }, []);

  const deleteProduct = (id) => {
    const updatedProducts = products.filter(
      (product) => product.id !== id
    );

    setProducts(updatedProducts);

    localStorage.setItem(
      "nimad-products",
      JSON.stringify(updatedProducts)
    );
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#3b170b",
        padding: "30px",
        color: "white"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px"
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            fontWeight: "bold"
          }}
        >
          NIMAD ZAYKA PRODUCTS
        </h1>

        <a
          href="/admin/products/new"
          style={{
            background: "#facc15",
            color: "#000",
            padding: "12px 22px",
            borderRadius: "10px",
            fontWeight: "bold",
            textDecoration: "none"
          }}
        >
          + Add Product
        </a>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "20px"
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              background: "#5b2c1d",
              borderRadius: "20px",
              padding: "25px",
              border: "1px solid rgba(255,255,255,0.1)"
            }}
          >
            <h2
              style={{
                fontSize: "28px",
                fontWeight: "bold",
                marginBottom: "10px"
              }}
            >
              {product.name}
            </h2>

            <p
              style={{
                marginBottom: "8px",
                fontSize: "18px"
              }}
            >
              Size: {product.size}
            </p>

            <p
              style={{
                marginBottom: "8px",
                fontSize: "18px"
              }}
            >
              Price: ₹{product.price}
            </p>

            <p
              style={{
                marginBottom: "8px",
                fontSize: "18px"
              }}
            >
              Stock: {product.stock}
            </p>

            <p
              style={{
                marginBottom: "20px",
                fontSize: "16px",
                wordBreak: "break-all"
              }}
            >
              Barcode: {product.barcode}
            </p>

            <div
              style={{
                display: "flex",
                gap: "10px"
              }}
            >
              <button
                style={{
                  background: "#facc15",
                  border: "none",
                  padding: "10px 16px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontWeight: "bold"
                }}
              >
                Edit
              </button>

              <button
                onClick={() => deleteProduct(product.id)}
                style={{
                  background: "#dc2626",
                  color: "white",
                  border: "none",
                  padding: "10px 16px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontWeight: "bold"
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

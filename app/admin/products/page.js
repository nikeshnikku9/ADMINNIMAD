"use client"

import Link from "next/link"
import { useState } from "react"

export default function ProductsPage() {

  const [products, setProducts] = useState([

    {
      name: "Meat Masala",
      size: "20g",
      price: 45,
      barcode: "920100000001"
    },

    {
      name: "Meat Masala",
      size: "50g",
      price: 90,
      barcode: "920100000002"
    },

    {
      name: "Meat Masala",
      size: "100g",
      price: 160,
      barcode: "920100000003"
    },

    {
      name: "Garam Masala",
      size: "50g",
      price: 80,
      barcode: "920100000004"
    },

    {
      name: "Garam Masala",
      size: "100g",
      price: 150,
      barcode: "920100000005"
    },

    {
      name: "Shahi Paneer Masala",
      size: "50g",
      price: 85,
      barcode: "920100000006"
    },

    {
      name: "Shahi Paneer Masala",
      size: "100g",
      price: 160,
      barcode: "920100000007"
    },

    {
      name: "Dal Bati Masala",
      size: "50g",
      price: 70,
      barcode: "920100000008"
    },

    {
      name: "Dal Bati Masala",
      size: "100g",
      price: 140,
      barcode: "920100000009"
    },

    {
      name: "Khada Masala",
      size: "50g",
      price: 95,
      barcode: "920100000010"
    },

    {
      name: "Khada Masala",
      size: "100g",
      price: 180,
      barcode: "920100000011"
    },

    {
      name: "Chicken Masala",
      size: "20g",
      price: 40,
      barcode: "920100000012"
    },

    {
      name: "Chicken Masala",
      size: "50g",
      price: 85,
      barcode: "920100000013"
    },

    {
      name: "Chicken Masala",
      size: "100g",
      price: 155,
      barcode: "920100000014"
    },

    {
      name: "Haldi Powder",
      size: "50g",
      price: 25,
      barcode: "920100000015"
    },

    {
      name: "Haldi Powder",
      size: "100g",
      price: 45,
      barcode: "920100000016"
    },

    {
      name: "Haldi Powder",
      size: "200g",
      price: 80,
      barcode: "920100000017"
    },

    {
      name: "Haldi Powder",
      size: "500g",
      price: 180,
      barcode: "920100000018"
    },

    {
      name: "Haldi Powder",
      size: "1kg",
      price: 320,
      barcode: "920100000019"
    },

    {
      name: "Mirchi Powder",
      size: "50g",
      price: 35,
      barcode: "920100000020"
    },

    {
      name: "Mirchi Powder",
      size: "100g",
      price: 65,
      barcode: "920100000021"
    },

    {
      name: "Mirchi Powder",
      size: "200g",
      price: 120,
      barcode: "920100000022"
    },

    {
      name: "Mirchi Powder",
      size: "500g",
      price: 280,
      barcode: "920100000023"
    },

    {
      name: "Mirchi Powder",
      size: "1kg",
      price: 520,
      barcode: "920100000024"
    },

    {
      name: "Dhaniya Powder",
      size: "50g",
      price: 30,
      barcode: "920100000025"
    },

    {
      name: "Dhaniya Powder",
      size: "100g",
      price: 55,
      barcode: "920100000026"
    },

    {
      name: "Dhaniya Powder",
      size: "200g",
      price: 100,
      barcode: "920100000027"
    },

    {
      name: "Dhaniya Powder",
      size: "500g",
      price: 220,
      barcode: "920100000028"
    },

    {
      name: "Dhaniya Powder",
      size: "1kg",
      price: 400,
      barcode: "920100000029"
    }

  ])

  return (

    <div
      style={{
        background: "#3b1308",
        minHeight: "100vh",
        padding: "40px",
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
            fontSize: "50px",
            fontWeight: "bold"
          }}
        >
          NIMAD ZAYKA PRODUCTS
        </h1>

        <Link href="/admin/products/new">

          <button
            style={{
              background: "#facc15",
              color: "black",
              padding: "15px 30px",
              borderRadius: "12px",
              fontWeight: "bold",
              border: "none",
              cursor: "pointer",
              fontSize: "18px"
            }}
          >
            + Add Product
          </button>

        </Link>

      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "25px"
        }}
      >

        {products.map((item, index) => (

          <div
            key={index}
            style={{
              background: "#5b2a1d",
              padding: "25px",
              borderRadius: "20px",
              border: "1px solid #8b5e3c"
            }}
          >

            <h2
              style={{
                fontSize: "35px",
                fontWeight: "bold",
                marginBottom: "15px"
              }}
            >
              {item.name}
            </h2>

            <p
              style={{
                fontSize: "22px",
                marginBottom: "10px"
              }}
            >
              Size: {item.size}
            </p>

            <p
              style={{
                fontSize: "24px",
                marginBottom: "10px",
                color: "#facc15",
                fontWeight: "bold"
              }}
            >
              ₹ {item.price}
            </p>

            <p
              style={{
                fontSize: "20px",
                letterSpacing: "2px"
              }}
            >
              {item.barcode}
            </p>

          </div>

        ))}

      </div>

    </div>

  )

}

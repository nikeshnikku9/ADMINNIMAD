"use client"

import { useState } from "react"
import Barcode from "react-barcode"

export default function BarcodePage() {

  const products = [

    {
      name: "Meat Masala 20g",
      barcode: "920100000001",
      price: 45
    },

    {
      name: "Meat Masala 50g",
      barcode: "920100000002",
      price: 90
    },

    {
      name: "Meat Masala 100g",
      barcode: "920100000003",
      price: 160
    },

    {
      name: "Garam Masala 50g",
      barcode: "920100000004",
      price: 85
    },

    {
      name: "Garam Masala 100g",
      barcode: "920100000005",
      price: 150
    },

    {
      name: "Shahi Paneer Masala 50g",
      barcode: "920100000006",
      price: 95
    },

    {
      name: "Dal Bati Masala 50g",
      barcode: "920100000008",
      price: 80
    },

    {
      name: "Khada Masala 50g",
      barcode: "920100000010",
      price: 110
    },

    {
      name: "Chicken Masala 50g",
      barcode: "920100000013",
      price: 85
    },

    {
      name: "Haldi Powder 100g",
      barcode: "920100000016",
      price: 45
    },

    {
      name: "Mirchi Powder 100g",
      barcode: "920100000021",
      price: 65
    },

    {
      name: "Dhaniya Powder 100g",
      barcode: "920100000026",
      price: 55
    }

  ]

  const [selectedProduct, setSelectedProduct] =
    useState(products[0])

  return (

    <div
      style={{
        background: "#2b1308",
        minHeight: "100vh",
        padding: "40px",
        color: "white"
      }}
    >

      <h1
        style={{
          fontSize: "55px",
          fontWeight: "bold",
          marginBottom: "10px"
        }}
      >
        Barcode Studio
      </h1>

      <p
        style={{
          color: "#f5d0a9",
          fontSize: "20px",
          marginBottom: "40px"
        }}
      >
        Professional Print Ready Barcode System
      </p>

      <div
        style={{
          background: "#5a2414",
          padding: "30px",
          borderRadius: "25px",
          maxWidth: "900px"
        }}
      >

        <h2
          style={{
            marginBottom: "15px",
            fontSize: "24px"
          }}
        >
          Select Product
        </h2>

        <select
          value={selectedProduct.name}
          onChange={(e) => {

            const product = products.find(
              item => item.name === e.target.value
            )

            setSelectedProduct(product)

          }}
          style={{
            width: "100%",
            padding: "18px",
            borderRadius: "14px",
            border: "none",
            fontSize: "18px",
            marginBottom: "35px"
          }}
        >

          {products.map((item, index) => (

            <option key={index}>
              {item.name}
            </option>

          ))}

        </select>

        <div
          id="barcode-print"
          style={{
            background: "white",
            padding: "50px",
            borderRadius: "20px",
            textAlign: "center"
          }}
        >

          <h1
            style={{
              color: "black",
              fontSize: "38px",
              marginBottom: "20px"
            }}
          >
            NIMAD ZAYKA
          </h1>

          <Barcode
            value={selectedProduct.barcode}
            format="EAN13"
            width={2.5}
            height={120}
            fontSize={22}
            margin={10}
          />

          <h2
            style={{
              color: "black",
              marginTop: "25px",
              fontSize: "30px"
            }}
          >
            {selectedProduct.name}
          </h2>

          <p
            style={{
              color: "#444",
              fontSize: "24px",
              marginTop: "10px"
            }}
          >
            ₹ {selectedProduct.price}
          </p>

          <p
            style={{
              color: "#666",
              marginTop: "20px",
              fontSize: "18px"
            }}
          >
            MUKESH AND SONS MASALA UDHYOG
          </p>

          <p
            style={{
              color: "#666",
              fontSize: "16px"
            }}
          >
            GSTIN: 23MUCPS2534K1ZA
          </p>

        </div>

        <div
          style={{
            display: "flex",
            gap: "15px",
            marginTop: "30px",
            flexWrap: "wrap"
          }}
        >

          <button
            onClick={() => window.print()}
            style={btn}
          >
            Print Barcode
          </button>

          <button
            style={btn}
          >
            Download PNG
          </button>

          <button
            style={btn}
          >
            Download SVG
          </button>

        </div>

      </div>

    </div>

  )

}

const btn = {

  background: "#facc15",
  color: "black",
  border: "none",
  padding: "15px 25px",
  borderRadius: "12px",
  fontWeight: "bold",
  cursor: "pointer",
  fontSize: "18px"

}

"use client"

import { useState } from "react"
import Barcode from "react-barcode"

export default function BarcodePage() {

  const products = [
    "Meat Masala 20g",
    "Meat Masala 50g",
    "Meat Masala 100g",
    "Garam Masala 50g",
    "Garam Masala 100g",
    "Shahi Paneer Masala 50g",
    "Shahi Paneer Masala 100g",
    "Dal Bati Masala 50g",
    "Dal Bati Masala 100g",
    "Khada Masala 50g",
    "Khada Masala 100g",
    "Chicken Masala 20g",
    "Chicken Masala 50g",
    "Chicken Masala 100g",
    "Haldi Powder 50g",
    "Haldi Powder 100g",
    "Haldi Powder 200g",
    "Haldi Powder 500g",
    "Haldi Powder 1kg",
    "Mirchi Powder 50g",
    "Mirchi Powder 100g",
    "Mirchi Powder 200g",
    "Mirchi Powder 500g",
    "Mirchi Powder 1kg",
    "Dhaniya Powder 50g",
    "Dhaniya Powder 100g",
    "Dhaniya Powder 200g",
    "Dhaniya Powder 500g",
    "Dhaniya Powder 1kg"
  ]

  const [barcodeValue, setBarcodeValue] = useState("920100000001")
  const [selectedProduct, setSelectedProduct] = useState(products[0])

  return (

    <div
      style={{
        background: "#3b1308",
        minHeight: "100vh",
        padding: "40px",
        color: "white"
      }}
    >

      <h1
        style={{
          fontSize: "50px",
          marginBottom: "10px",
          fontWeight: "bold"
        }}
      >
        Barcode Studio
      </h1>

      <p
        style={{
          color: "#f5d0a9",
          marginBottom: "40px",
          fontSize: "18px"
        }}
      >
        Generate Code128 / EAN13 barcodes with GS1-style workflow
      </p>

      <div
        style={{
          background: "#5b2a1d",
          padding: "30px",
          borderRadius: "20px",
          maxWidth: "700px"
        }}
      >

        <div
          style={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
            marginBottom: "25px"
          }}
        >

          <input
            type="text"
            value={barcodeValue}
            onChange={(e)=>setBarcodeValue(e.target.value)}
            placeholder="Enter Barcode Number"
            style={{
              padding: "15px",
              borderRadius: "10px",
              border: "none",
              width: "250px",
              fontSize: "16px"
            }}
          />

          <select
            value={selectedProduct}
            onChange={(e)=>setSelectedProduct(e.target.value)}
            style={{
              padding: "15px",
              borderRadius: "10px",
              border: "none",
              width: "250px",
              fontSize: "16px"
            }}
          >

            {products.map((item,index)=>(

              <option key={index}>
                {item}
              </option>

            ))}

          </select>

        </div>

        <div
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "20px",
            textAlign: "center"
          }}
        >

          <Barcode
            value={barcodeValue}
            format="EAN13"
            width={2}
            height={120}
          />

          <h2
            style={{
              color: "black",
              marginTop: "20px",
              fontSize: "24px"
            }}
          >
            {selectedProduct}
          </h2>

        </div>

        <div
          style={{
            display: "flex",
            gap: "15px",
            marginTop: "25px",
            flexWrap: "wrap"
          }}
        >

          <button
            style={{
              background: "#facc15",
              color: "black",
              border: "none",
              padding: "14px 25px",
              borderRadius: "10px",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            PNG
          </button>

          <button
            style={{
              background: "#facc15",
              color: "black",
              border: "none",
              padding: "14px 25px",
              borderRadius: "10px",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            SVG
          </button>

          <button
            onClick={()=>window.print()}
            style={{
              background: "#facc15",
              color: "black",
              border: "none",
              padding: "14px 25px",
              borderRadius: "10px",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            Print
          </button>

        </div>

      </div>

    </div>

  )

}

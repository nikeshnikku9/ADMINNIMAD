"use client";

import { useState } from "react";
import Barcode from "react-barcode";

export default function BarcodeStudio() {

  const products = [

    {
      id: 1,
      name: "HALDI POWDER 50G",
      sku: "NZ-HP-50",
      barcode: "920100000001",
      mrp: 45,
      stock: 120,
      gst: "5%",
      category: "Standard Plastic Packaging"
    },

    {
      id: 2,
      name: "LAL MIRCH 100G",
      sku: "NZ-LM-100",
      barcode: "920100000002",
      mrp: 90,
      stock: 80,
      gst: "5%",
      category: "Standard Plastic Packaging"
    },

    {
      id: 3,
      name: "MEAT MASALA 100G",
      sku: "NZ-MM-100",
      barcode: "920100000003",
      mrp: 150,
      stock: 50,
      gst: "12%",
      category: "Premium Box Packaging"
    }

  ];

  const [selectedId, setSelectedId] = useState(1);

  const selectedProduct =
    products.find((p) => p.id === Number(selectedId));

  return (

    <div
      style={{
        padding: "30px",
        background: "#3d1717",
        minHeight: "100vh",
        color: "white"
      }}
    >

      <h1
        style={{
          fontSize: "40px",
          marginBottom: "30px"
        }}
      >
        Barcode Studio
      </h1>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "20px",
          color: "black",
          marginBottom: "20px"
        }}
      >

        <select
          value={selectedId}
          onChange={(e) => setSelectedId(e.target.value)}
          style={{
            width: "100%",
            padding: "15px",
            fontSize: "18px",
            borderRadius: "10px"
          }}
        >

          {products.map((product) => (

            <option
              key={product.id}
              value={product.id}
            >
              {product.name}
            </option>

          ))}

        </select>

      </div>

      {selectedProduct && (

        <div
          style={{
            background: "white",
            color: "black",
            padding: "30px",
            borderRadius: "20px"
          }}
        >

          <h2>{selectedProduct.name}</h2>

          <p>
            <strong>SKU:</strong>
            {" "}
            {selectedProduct.sku}
          </p>

          <p>
            <strong>MRP:</strong>
            {" "}
            ₹{selectedProduct.mrp}
          </p>

          <p>
            <strong>Stock:</strong>
            {" "}
            {selectedProduct.stock}
          </p>

          <p>
            <strong>GST:</strong>
            {" "}
            {selectedProduct.gst}
          </p>

          <p>
            <strong>Category:</strong>
            {" "}
            {selectedProduct.category}
          </p>

          <div
            style={{
              marginTop: "30px",
              background: "white",
              padding: "20px",
              textAlign: "center"
            }}
          >

            <Barcode
              value={selectedProduct.barcode}
              width={2}
              height={100}
              fontSize={20}
            />

          </div>

          <button
            onClick={() => window.print()}
            style={{
              marginTop: "20px",
              padding: "12px 25px",
              background: "#f4b400",
              border: "none",
              borderRadius: "10px",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            Print Barcode
          </button>

        </div>

      )}

    </div>

  );

}

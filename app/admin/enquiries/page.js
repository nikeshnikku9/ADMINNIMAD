"use client";

import { useState } from "react";
import Barcode from "react-barcode";

export default function BarcodeStudio() {

  const [products, setProducts] = useState([

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
      name: "DHANIYA POWDER 200G",
      sku: "NZ-DP-200",
      barcode: "920100000003",
      mrp: 120,
      stock: 55,
      gst: "5%",
      category: "Standard Plastic Packaging"
    },

    {
      id: 4,
      name: "MEAT MASALA 100G",
      sku: "NZ-MM-100",
      barcode: "920100000004",
      mrp: 150,
      stock: 40,
      gst: "12%",
      category: "Premium Box Packaging"
    }

  ]);

  const [selectedProduct, setSelectedProduct] = useState(products[0]);

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
          fontWeight: "bold",
          marginBottom: "30px"
        }}
      >
        Barcode Studio
      </h1>

      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "20px",
          color: "black",
          marginBottom: "30px"
        }}
      >

        <h2 style={{ marginBottom: "20px" }}>
          Select Product
        </h2>

        <select
          style={{
            width: "100%",
            padding: "15px",
            fontSize: "18px",
            borderRadius: "10px",
            marginBottom: "20px"
          }}
          onChange={(e) => {
            const product = products.find(
              (p) => p.id === Number(e.target.value)
            );
            setSelectedProduct(product);
          }}
        >

          {products.map((product) => (

            <option key={product.id} value={product.id}>
              {product.name}
            </option>

          ))}

        </select>

      </div>

      <div
        style={{
          background: "white",
          borderRadius: "25px",
          padding: "30px",
          color: "black"
        }}
      >

        <h2
          style={{
            fontSize: "35px",
            marginBottom: "20px",
            fontWeight: "bold"
          }}
        >
          {selectedProduct.name}
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
            marginBottom: "30px"
          }}
        >

          <div>
            <strong>SKU:</strong>
            <br />
            {selectedProduct.sku}
          </div>

          <div>
            <strong>MRP:</strong>
            <br />
            ₹ {selectedProduct.mrp}
          </div>

          <div>
            <strong>Stock:</strong>
            <br />
            {selectedProduct.stock}
          </div>

          <div>
            <strong>GST:</strong>
            <br />
            {selectedProduct.gst}
          </div>

          <div>
            <strong>Category:</strong>
            <br />
            {selectedProduct.category}
          </div>

          <div>
            <strong>Barcode Number:</strong>
            <br />
            {selectedProduct.barcode}
          </div>

        </div>

        <div
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "20px",
            textAlign: "center",
            border: "3px solid #ddd"
          }}
        >

          <Barcode
            value={selectedProduct.barcode}
            width={2}
            height={100}
            fontSize={22}
            displayValue={true}
            background="#ffffff"
          />

        </div>

        <div
          style={{
            marginTop: "30px",
            display: "flex",
            gap: "20px"
          }}
        >

          <button
            onClick={() => window.print()}
            style={{
              padding: "15px 30px",
              borderRadius: "12px",
              border: "none",
              background: "#f4b400",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "18px"
            }}
          >
            Print Barcode
          </button>

          <button
            style={{
              padding: "15px 30px",
              borderRadius: "12px",
              border: "none",
              background: "#1e88e5",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "18px"
            }}
          >
            Download PNG
          </button>

        </div>

      </div>

    </div>

  );

}

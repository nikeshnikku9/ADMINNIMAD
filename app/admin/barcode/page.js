"use client";

import { useState } from "react";
import Barcode from "react-barcode";

export default function BarcodeStudio() {

  const products = [

    // PREMIUM BOX PACKAGING

    {
      id: 1,
      name: "MEAT MASALA 20G",
      sku: "NZ-MM-20",
      barcode: "920100000001",
      mrp: 30,
      stock: 120,
      gst: "12%",
      category: "Premium Box Packaging"
    },

    {
      id: 2,
      name: "MEAT MASALA 50G",
      sku: "NZ-MM-50",
      barcode: "920100000002",
      mrp: 60,
      stock: 90,
      gst: "12%",
      category: "Premium Box Packaging"
    },

    {
      id: 3,
      name: "MEAT MASALA 100G",
      sku: "NZ-MM-100",
      barcode: "920100000003",
      mrp: 120,
      stock: 60,
      gst: "12%",
      category: "Premium Box Packaging"
    },

    {
      id: 4,
      name: "GARAM MASALA 50G",
      sku: "NZ-GM-50",
      barcode: "920100000004",
      mrp: 55,
      stock: 100,
      gst: "12%",
      category: "Premium Box Packaging"
    },

    {
      id: 5,
      name: "GARAM MASALA 100G",
      sku: "NZ-GM-100",
      barcode: "920100000005",
      mrp: 110,
      stock: 70,
      gst: "12%",
      category: "Premium Box Packaging"
    },

    {
      id: 6,
      name: "SHAHI PANEER MASALA 50G",
      sku: "NZ-SPM-50",
      barcode: "920100000006",
      mrp: 65,
      stock: 90,
      gst: "12%",
      category: "Premium Box Packaging"
    },

    {
      id: 7,
      name: "SHAHI PANEER MASALA 100G",
      sku: "NZ-SPM-100",
      barcode: "920100000007",
      mrp: 125,
      stock: 50,
      gst: "12%",
      category: "Premium Box Packaging"
    },

    {
      id: 8,
      name: "DAL BATI MASALA 50G",
      sku: "NZ-DBM-50",
      barcode: "920100000008",
      mrp: 50,
      stock: 80,
      gst: "12%",
      category: "Premium Box Packaging"
    },

    {
      id: 9,
      name: "DAL BATI MASALA 100G",
      sku: "NZ-DBM-100",
      barcode: "920100000009",
      mrp: 100,
      stock: 70,
      gst: "12%",
      category: "Premium Box Packaging"
    },

    {
      id: 10,
      name: "KHADA MASALA 50G",
      sku: "NZ-KM-50",
      barcode: "920100000010",
      mrp: 70,
      stock: 60,
      gst: "12%",
      category: "Premium Box Packaging"
    },

    {
      id: 11,
      name: "KHADA MASALA 100G",
      sku: "NZ-KM-100",
      barcode: "920100000011",
      mrp: 140,
      stock: 40,
      gst: "12%",
      category: "Premium Box Packaging"
    },

    {
      id: 12,
      name: "CHICKEN MASALA 20G",
      sku: "NZ-CM-20",
      barcode: "920100000012",
      mrp: 35,
      stock: 120,
      gst: "12%",
      category: "Premium Box Packaging"
    },

    {
      id: 13,
      name: "CHICKEN MASALA 50G",
      sku: "NZ-CM-50",
      barcode: "920100000013",
      mrp: 70,
      stock: 90,
      gst: "12%",
      category: "Premium Box Packaging"
    },

    {
      id: 14,
      name: "CHICKEN MASALA 100G",
      sku: "NZ-CM-100",
      barcode: "920100000014",
      mrp: 140,
      stock: 50,
      gst: "12%",
      category: "Premium Box Packaging"
    },

    // STANDARD PACKAGING

    {
      id: 15,
      name: "HALDI POWDER 50G",
      sku: "NZ-HP-50",
      barcode: "920100000015",
      mrp: 25,
      stock: 200,
      gst: "5%",
      category: "Standard Plastic Packaging"
    },

    {
      id: 16,
      name: "HALDI POWDER 100G",
      sku: "NZ-HP-100",
      barcode: "920100000016",
      mrp: 45,
      stock: 170,
      gst: "5%",
      category: "Standard Plastic Packaging"
    },

    {
      id: 17,
      name: "HALDI POWDER 200G",
      sku: "NZ-HP-200",
      barcode: "920100000017",
      mrp: 80,
      stock: 140,
      gst: "5%",
      category: "Standard Plastic Packaging"
    }

  ];

  const [selectedId, setSelectedId] = useState(1);

  const selectedProduct =
    products.find(
      (p) => p.id === Number(selectedId)
    );

  const printBarcodeOnly = () => {

    const printContents =
      document.getElementById(
        "barcode-only"
      ).innerHTML;

    const win =
      window.open("", "", "width=800,height=600");

    win.document.write(`
      <html>
        <head>
          <title>Print Barcode</title>
        </head>
        <body style="display:flex;justify-content:center;align-items:center;height:100vh;">
          ${printContents}
        </body>
      </html>
    `);

    win.document.close();

    win.print();

  };

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
          fontSize: "42px",
          marginBottom: "30px",
          fontWeight: "bold"
        }}
      >
        Barcode Studio
      </h1>

      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "20px",
          color: "black",
          marginBottom: "25px"
        }}
      >

        <h2
          style={{
            marginBottom: "15px"
          }}
        >
          Select Product
        </h2>

        <select
          value={selectedId}
          onChange={(e)=>
            setSelectedId(e.target.value)
          }
          style={{
            width: "100%",
            padding: "15px",
            fontSize: "18px",
            borderRadius: "10px"
          }}
        >

          {products.map((product)=>(

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

          <h2
            style={{
              fontSize: "35px",
              marginBottom: "20px"
            }}
          >
            {selectedProduct.name}
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "1fr 1fr",
              gap: "15px",
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
              ₹{selectedProduct.mrp}
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
              <strong>Barcode:</strong>
              <br />
              {selectedProduct.barcode}
            </div>

          </div>

          <div
            id="barcode-only"
            style={{
              background: "white",
              textAlign: "center",
              padding: "25px",
              border: "2px solid #ddd",
              borderRadius: "15px"
            }}
          >

            <Barcode
              value={selectedProduct.barcode}
              width={2}
              height={100}
              fontSize={18}
            />

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
              onClick={printBarcodeOnly}
              style={{
                padding: "14px 24px",
                border: "none",
                borderRadius: "12px",
                background: "#f4b400",
                color: "black",
                fontWeight: "bold",
                cursor: "pointer",
                fontSize: "16px"
              }}
            >
              Print Barcode Only
            </button>

            <button
              onClick={() => window.print()}
              style={{
                padding: "14px 24px",
                border: "none",
                borderRadius: "12px",
                background: "#1e88e5",
                color: "white",
                fontWeight: "bold",
                cursor: "pointer",
                fontSize: "16px"
              }}
            >
              Print Full Product Sheet
            </button>

          </div>

        </div>

      )}

    </div>

  );

}

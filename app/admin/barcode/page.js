"use client";

import { useState, useEffect } from "react";
import Barcode from "react-barcode";
import QRCode from "react-qr-code";

export default function BarcodeStudio() {

  // ALL PRODUCTS

  const defaultProducts = [

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
      stock: 100,
      gst: "12%",
      category: "Premium Box Packaging"
    },

    {
      id: 3,
      name: "MEAT MASALA 100G",
      sku: "NZ-MM-100",
      barcode: "920100000003",
      mrp: 120,
      stock: 80,
      gst: "12%",
      category: "Premium Box Packaging"
    },

    {
      id: 4,
      name: "GARAM MASALA 50G",
      sku: "NZ-GM-50",
      barcode: "920100000004",
      mrp: 55,
      stock: 90,
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
      stock: 100,
      gst: "12%",
      category: "Premium Box Packaging"
    },

    {
      id: 7,
      name: "SHAHI PANEER MASALA 100G",
      sku: "NZ-SPM-100",
      barcode: "920100000007",
      mrp: 125,
      stock: 80,
      gst: "12%",
      category: "Premium Box Packaging"
    },

    {
      id: 8,
      name: "DAL BATI MASALA 50G",
      sku: "NZ-DBM-50",
      barcode: "920100000008",
      mrp: 50,
      stock: 100,
      gst: "12%",
      category: "Premium Box Packaging"
    },

    {
      id: 9,
      name: "DAL BATI MASALA 100G",
      sku: "NZ-DBM-100",
      barcode: "920100000009",
      mrp: 100,
      stock: 90,
      gst: "12%",
      category: "Premium Box Packaging"
    },

    {
      id: 10,
      name: "KHADA MASALA 50G",
      sku: "NZ-KM-50",
      barcode: "920100000010",
      mrp: 70,
      stock: 70,
      gst: "12%",
      category: "Premium Box Packaging"
    },

    {
      id: 11,
      name: "KHADA MASALA 100G",
      sku: "NZ-KM-100",
      barcode: "920100000011",
      mrp: 140,
      stock: 60,
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
      stock: 70,
      gst: "12%",
      category: "Premium Box Packaging"
    },

    {
      id: 15,
      name: "HAND MADE PAPAD 200G",
      sku: "NZ-HMP-200",
      barcode: "920100000015",
      mrp: 90,
      stock: 150,
      gst: "5%",
      category: "Premium Box Packaging"
    },

    // STANDARD PACKAGING

    {
      id: 16,
      name: "HALDI POWDER 50G",
      sku: "NZ-HP-50",
      barcode: "920100000016",
      mrp: 25,
      stock: 200,
      gst: "5%",
      category: "Standard Plastic Packaging"
    },

    {
      id: 17,
      name: "HALDI POWDER 100G",
      sku: "NZ-HP-100",
      barcode: "920100000017",
      mrp: 45,
      stock: 170,
      gst: "5%",
      category: "Standard Plastic Packaging"
    },

    {
      id: 18,
      name: "HALDI POWDER 200G",
      sku: "NZ-HP-200",
      barcode: "920100000018",
      mrp: 80,
      stock: 140,
      gst: "5%",
      category: "Standard Plastic Packaging"
    },

    {
      id: 19,
      name: "HALDI POWDER 500G",
      sku: "NZ-HP-500",
      barcode: "920100000019",
      mrp: 180,
      stock: 100,
      gst: "5%",
      category: "Standard Plastic Packaging"
    },

    {
      id: 20,
      name: "HALDI POWDER 1KG",
      sku: "NZ-HP-1KG",
      barcode: "920100000020",
      mrp: 340,
      stock: 80,
      gst: "5%",
      category: "Standard Plastic Packaging"
    },

    {
      id: 21,
      name: "MIRCHI POWDER 50G",
      sku: "NZ-MP-50",
      barcode: "920100000021",
      mrp: 35,
      stock: 180,
      gst: "5%",
      category: "Standard Plastic Packaging"
    },

    {
      id: 22,
      name: "MIRCHI POWDER 100G",
      sku: "NZ-MP-100",
      barcode: "920100000022",
      mrp: 65,
      stock: 160,
      gst: "5%",
      category: "Standard Plastic Packaging"
    },

    {
      id: 23,
      name: "MIRCHI POWDER 200G",
      sku: "NZ-MP-200",
      barcode: "920100000023",
      mrp: 120,
      stock: 130,
      gst: "5%",
      category: "Standard Plastic Packaging"
    },

    {
      id: 24,
      name: "MIRCHI POWDER 500G",
      sku: "NZ-MP-500",
      barcode: "920100000024",
      mrp: 280,
      stock: 100,
      gst: "5%",
      category: "Standard Plastic Packaging"
    },

    {
      id: 25,
      name: "MIRCHI POWDER 1KG",
      sku: "NZ-MP-1KG",
      barcode: "920100000025",
      mrp: 520,
      stock: 70,
      gst: "5%",
      category: "Standard Plastic Packaging"
    },

    {
      id: 26,
      name: "DHANIYA POWDER 50G",
      sku: "NZ-DP-50",
      barcode: "920100000026",
      mrp: 20,
      stock: 190,
      gst: "5%",
      category: "Standard Plastic Packaging"
    },

    {
      id: 27,
      name: "DHANIYA POWDER 100G",
      sku: "NZ-DP-100",
      barcode: "920100000027",
      mrp: 40,
      stock: 170,
      gst: "5%",
      category: "Standard Plastic Packaging"
    },

    {
      id: 28,
      name: "DHANIYA POWDER 200G",
      sku: "NZ-DP-200",
      barcode: "920100000028",
      mrp: 75,
      stock: 140,
      gst: "5%",
      category: "Standard Plastic Packaging"
    },

    {
      id: 29,
      name: "DHANIYA POWDER 500G",
      sku: "NZ-DP-500",
      barcode: "920100000029",
      mrp: 160,
      stock: 100,
      gst: "5%",
      category: "Standard Plastic Packaging"
    },

    {
      id: 30,
      name: "DHANIYA POWDER 1KG",
      sku: "NZ-DP-1KG",
      barcode: "920100000030",
      mrp: 300,
      stock: 80,
      gst: "5%",
      category: "Standard Plastic Packaging"
    },

    {
      id: 31,
      name: "GARAM MASALA 50G",
      sku: "NZ-GMS-50",
      barcode: "920100000031",
      mrp: 45,
      stock: 150,
      gst: "5%",
      category: "Standard Plastic Packaging"
    },

    {
      id: 32,
      name: "GARAM MASALA 100G",
      sku: "NZ-GMS-100",
      barcode: "920100000032",
      mrp: 85,
      stock: 130,
      gst: "5%",
      category: "Standard Plastic Packaging"
    },

    {
      id: 33,
      name: "GARAM MASALA 200G",
      sku: "NZ-GMS-200",
      barcode: "920100000033",
      mrp: 160,
      stock: 100,
      gst: "5%",
      category: "Standard Plastic Packaging"
    },

    {
      id: 34,
      name: "GARAM MASALA 500G",
      sku: "NZ-GMS-500",
      barcode: "920100000034",
      mrp: 360,
      stock: 80,
      gst: "5%",
      category: "Standard Plastic Packaging"
    },

    {
      id: 35,
      name: "GARAM MASALA 1KG",
      sku: "NZ-GMS-1KG",
      barcode: "920100000035",
      mrp: 680,
      stock: 60,
      gst: "5%",
      category: "Standard Plastic Packaging"
    }

  ];

  const [products, setProducts] =
    useState(defaultProducts);

  return (

    <div
      style={{
        padding: "30px",
        background: "#3d1717",
        minHeight: "100vh",
        color: "white",
        fontFamily: "Arial"
      }}
    >

      <h1
        style={{
          fontSize: "42px",
          marginBottom: "30px"
        }}
      >
        NIMAD ZAYKA PRODUCT DATABASE
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(350px,1fr))",
          gap: "20px"
        }}
      >

        {products.map((product)=>(

          <div
            key={product.id}
            style={{
              background: "white",
              color: "black",
              padding: "20px",
              borderRadius: "20px"
            }}
          >

            <h2>
              {product.name}
            </h2>

            <p>
              <strong>SKU:</strong>
              {" "}
              {product.sku}
            </p>

            <p>
              <strong>MRP:</strong>
              {" "}
              ₹{product.mrp}
            </p>

            <p>
              <strong>GST:</strong>
              {" "}
              {product.gst}
            </p>

            <p>
              <strong>Stock:</strong>
              {" "}
              {product.stock}
            </p>

            <p>
              <strong>Category:</strong>
              {" "}
              {product.category}
            </p>

            <p>
              <strong>Barcode:</strong>
              {" "}
              {product.barcode}
            </p>

            <div
              style={{
                background: "white",
                padding: "15px",
                textAlign: "center",
                borderRadius: "12px",
                marginTop: "20px"
              }}
            >

              <Barcode
                value={product.barcode}
                width={1.5}
                height={70}
                fontSize={14}
              />

            </div>

            <div
              style={{
                marginTop: "20px",
                textAlign: "center"
              }}
            >

              <QRCode
                size={120}
                value={`https://nimadzayka.com/product/${product.barcode}`}
              />

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}

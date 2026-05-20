"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const Barcode = dynamic(
  () => import("react-barcode"),
  { ssr: false }
);

export default function BarcodeStudio() {

  const [products] = useState([

    // PREMIUM BOX PACKAGING

    {
      id: 1,
      name: "MEAT MASALA 20G",
      barcode: "920100000001",
      mrp: 30,
      gst: "12%",
      category: "Premium Box Packaging"
    },

    {
      id: 2,
      name: "MEAT MASALA 50G",
      barcode: "920100000002",
      mrp: 60,
      gst: "12%",
      category: "Premium Box Packaging"
    },

    {
      id: 3,
      name: "MEAT MASALA 100G",
      barcode: "920100000003",
      mrp: 120,
      gst: "12%",
      category: "Premium Box Packaging"
    },

    {
      id: 4,
      name: "GARAM MASALA 50G",
      barcode: "920100000004",
      mrp: 55,
      gst: "12%",
      category: "Premium Box Packaging"
    },

    {
      id: 5,
      name: "GARAM MASALA 100G",
      barcode: "920100000005",
      mrp: 110,
      gst: "12%",
      category: "Premium Box Packaging"
    },

    {
      id: 6,
      name: "SHAHI PANEER MASALA 50G",
      barcode: "920100000006",
      mrp: 65,
      gst: "12%",
      category: "Premium Box Packaging"
    },

    {
      id: 7,
      name: "SHAHI PANEER MASALA 100G",
      barcode: "920100000007",
      mrp: 125,
      gst: "12%",
      category: "Premium Box Packaging"
    },

    {
      id: 8,
      name: "DAL BATI MASALA 50G",
      barcode: "920100000008",
      mrp: 50,
      gst: "12%",
      category: "Premium Box Packaging"
    },

    {
      id: 9,
      name: "DAL BATI MASALA 100G",
      barcode: "920100000009",
      mrp: 100,
      gst: "12%",
      category: "Premium Box Packaging"
    },

    {
      id: 10,
      name: "KHADA MASALA 50G",
      barcode: "920100000010",
      mrp: 70,
      gst: "12%",
      category: "Premium Box Packaging"
    },

    {
      id: 11,
      name: "KHADA MASALA 100G",
      barcode: "920100000011",
      mrp: 140,
      gst: "12%",
      category: "Premium Box Packaging"
    },

    {
      id: 12,
      name: "CHICKEN MASALA 20G",
      barcode: "920100000012",
      mrp: 35,
      gst: "12%",
      category: "Premium Box Packaging"
    },

    {
      id: 13,
      name: "CHICKEN MASALA 50G",
      barcode: "920100000013",
      mrp: 70,
      gst: "12%",
      category: "Premium Box Packaging"
    },

    {
      id: 14,
      name: "CHICKEN MASALA 100G",
      barcode: "920100000014",
      mrp: 140,
      gst: "12%",
      category: "Premium Box Packaging"
    },

    {
      id: 15,
      name: "HAND MADE PAPAD 200G",
      barcode: "920100000015",
      mrp: 90,
      gst: "5%",
      category: "Premium Box Packaging"
    },

    // HALDI POWDER

    {
      id: 16,
      name: "HALDI POWDER 50G",
      barcode: "920100000016",
      mrp: 25,
      gst: "5%",
      category: "Standard Plastic Packaging"
    },

    {
      id: 17,
      name: "HALDI POWDER 100G",
      barcode: "920100000017",
      mrp: 45,
      gst: "5%",
      category: "Standard Plastic Packaging"
    },

    {
      id: 18,
      name: "HALDI POWDER 200G",
      barcode: "920100000018",
      mrp: 80,
      gst: "5%",
      category: "Standard Plastic Packaging"
    },

    {
      id: 19,
      name: "HALDI POWDER 500G",
      barcode: "920100000019",
      mrp: 180,
      gst: "5%",
      category: "Standard Plastic Packaging"
    },

    {
      id: 20,
      name: "HALDI POWDER 1KG",
      barcode: "920100000020",
      mrp: 340,
      gst: "5%",
      category: "Standard Plastic Packaging"
    },

    // MIRCHI POWDER

    {
      id: 21,
      name: "MIRCHI POWDER 50G",
      barcode: "920100000021",
      mrp: 35,
      gst: "5%",
      category: "Standard Plastic Packaging"
    },

    {
      id: 22,
      name: "MIRCHI POWDER 100G",
      barcode: "920100000022",
      mrp: 65,
      gst: "5%",
      category: "Standard Plastic Packaging"
    },

    {
      id: 23,
      name: "MIRCHI POWDER 200G",
      barcode: "920100000023",
      mrp: 120,
      gst: "5%",
      category: "Standard Plastic Packaging"
    },

    {
      id: 24,
      name: "MIRCHI POWDER 500G",
      barcode: "920100000024",
      mrp: 280,
      gst: "5%",
      category: "Standard Plastic Packaging"
    },

    {
      id: 25,
      name: "MIRCHI POWDER 1KG",
      barcode: "920100000025",
      mrp: 520,
      gst: "5%",
      category: "Standard Plastic Packaging"
    },

    // DHANIYA POWDER

    {
      id: 26,
      name: "DHANIYA POWDER 50G",
      barcode: "920100000026",
      mrp: 20,
      gst: "5%",
      category: "Standard Plastic Packaging"
    },

    {
      id: 27,
      name: "DHANIYA POWDER 100G",
      barcode: "920100000027",
      mrp: 40,
      gst: "5%",
      category: "Standard Plastic Packaging"
    },

    {
      id: 28,
      name: "DHANIYA POWDER 200G",
      barcode: "920100000028",
      mrp: 75,
      gst: "5%",
      category: "Standard Plastic Packaging"
    },

    {
      id: 29,
      name: "DHANIYA POWDER 500G",
      barcode: "920100000029",
      mrp: 160,
      gst: "5%",
      category: "Standard Plastic Packaging"
    },

    {
      id: 30,
      name: "DHANIYA POWDER 1KG",
      barcode: "920100000030",
      mrp: 300,
      gst: "5%",
      category: "Standard Plastic Packaging"
    },

    // STANDARD GARAM MASALA

    {
      id: 31,
      name: "GARAM MASALA 50G",
      barcode: "920100000031",
      mrp: 45,
      gst: "5%",
      category: "Standard Plastic Packaging"
    },

    {
      id: 32,
      name: "GARAM MASALA 100G",
      barcode: "920100000032",
      mrp: 85,
      gst: "5%",
      category: "Standard Plastic Packaging"
    },

    {
      id: 33,
      name: "GARAM MASALA 200G",
      barcode: "920100000033",
      mrp: 160,
      gst: "5%",
      category: "Standard Plastic Packaging"
    },

    {
      id: 34,
      name: "GARAM MASALA 500G",
      barcode: "920100000034",
      mrp: 360,
      gst: "5%",
      category: "Standard Plastic Packaging"
    },

    {
      id: 35,
      name: "GARAM MASALA 1KG",
      barcode: "920100000035",
      mrp: 680,
      gst: "5%",
      category: "Standard Plastic Packaging"
    }

  ]);

  const [selectedId, setSelectedId] =
    useState(1);

  const selectedProduct =
    products.find(
      (p) =>
        p.id === Number(selectedId)
    );

  return (

    <div
      style={{
        minHeight:"100vh",
        background:
          "linear-gradient(135deg,#2b0f0f,#4b1d1d)",
        padding:"40px",
        fontFamily:"Arial"
      }}
    >

      <h1
        style={{
          color:"white",
          fontSize:"58px",
          fontWeight:"bold",
          marginBottom:"35px"
        }}
      >
        Barcode Studio
      </h1>

      {/* SELECT */}

      <div
        style={{
          background:"white",
          borderRadius:"25px",
          padding:"30px",
          marginBottom:"30px"
        }}
      >

        <h2
          style={{
            fontSize:"40px",
            marginBottom:"20px"
          }}
        >
          Select Product
        </h2>

        <select
          value={selectedId}
          onChange={(e)=>
            setSelectedId(
              Number(e.target.value)
            )
          }
          style={{
            width:"100%",
            padding:"18px",
            fontSize:"22px",
            borderRadius:"15px",
            background:"white",
            color:"black",
            border:"2px solid #ccc"
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

      {/* PRODUCT CARD */}

      {selectedProduct && (

        <div
          style={{
            background:"white",
            borderRadius:"25px",
            padding:"35px"
          }}
        >

          <h2
            style={{
              fontSize:"48px",
              marginBottom:"25px"
            }}
          >
            {selectedProduct.name}
          </h2>

          <p
            style={{
              fontSize:"26px",
              marginBottom:"12px"
            }}
          >
            <strong>Barcode:</strong>
            {" "}
            {selectedProduct.barcode}
          </p>

          <p
            style={{
              fontSize:"26px",
              marginBottom:"12px"
            }}
          >
            <strong>MRP:</strong>
            {" "}
            ₹{selectedProduct.mrp}
          </p>

          <p
            style={{
              fontSize:"26px",
              marginBottom:"12px"
            }}
          >
            <strong>GST:</strong>
            {" "}
            {selectedProduct.gst}
          </p>

          <p
            style={{
              fontSize:"26px",
              marginBottom:"30px"
            }}
          >
            <strong>Category:</strong>
            {" "}
            {selectedProduct.category}
          </p>

          <div
            style={{
              border:"2px solid #ddd",
              borderRadius:"20px",
              padding:"40px",
              textAlign:"center"
            }}
          >

            <Barcode
              value={
                selectedProduct.barcode
              }
              width={3}
              height={120}
              fontSize={24}
            />

          </div>

        </div>

      )}

    </div>

  );

}

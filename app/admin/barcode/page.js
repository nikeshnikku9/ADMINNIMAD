"use client";

import { useState, useRef } from "react";
import dynamic from "next/dynamic";

const Barcode = dynamic(
  () => import("react-barcode"),
  { ssr: false }
);

export default function BarcodeStudio() {

  const barcodeRef = useRef(null);

  const defaultProducts = [

    // PREMIUM BOX PACKAGING

    {
      id: 1,
      name: "MEAT MASALA 20G",
      barcode: "920100000001",
      mrp: 30,
      gst: "12%",
      stock: 120,
      category: "Premium Box Packaging"
    },

    {
      id: 2,
      name: "MEAT MASALA 50G",
      barcode: "920100000002",
      mrp: 60,
      gst: "12%",
      stock: 100,
      category: "Premium Box Packaging"
    },

    {
      id: 3,
      name: "MEAT MASALA 100G",
      barcode: "920100000003",
      mrp: 120,
      gst: "12%",
      stock: 80,
      category: "Premium Box Packaging"
    },

    {
      id: 4,
      name: "GARAM MASALA 50G",
      barcode: "920100000004",
      mrp: 55,
      gst: "12%",
      stock: 100,
      category: "Premium Box Packaging"
    },

    {
      id: 5,
      name: "GARAM MASALA 100G",
      barcode: "920100000005",
      mrp: 110,
      gst: "12%",
      stock: 80,
      category: "Premium Box Packaging"
    },

    {
      id: 6,
      name: "SHAHI PANEER MASALA 50G",
      barcode: "920100000006",
      mrp: 65,
      gst: "12%",
      stock: 90,
      category: "Premium Box Packaging"
    },

    {
      id: 7,
      name: "SHAHI PANEER MASALA 100G",
      barcode: "920100000007",
      mrp: 125,
      gst: "12%",
      stock: 70,
      category: "Premium Box Packaging"
    },

    {
      id: 8,
      name: "DAL BATI MASALA 50G",
      barcode: "920100000008",
      mrp: 50,
      gst: "12%",
      stock: 100,
      category: "Premium Box Packaging"
    },

    {
      id: 9,
      name: "DAL BATI MASALA 100G",
      barcode: "920100000009",
      mrp: 100,
      gst: "12%",
      stock: 80,
      category: "Premium Box Packaging"
    },

    {
      id: 10,
      name: "KHADA MASALA 50G",
      barcode: "920100000010",
      mrp: 70,
      gst: "12%",
      stock: 60,
      category: "Premium Box Packaging"
    },

    {
      id: 11,
      name: "KHADA MASALA 100G",
      barcode: "920100000011",
      mrp: 140,
      gst: "12%",
      stock: 50,
      category: "Premium Box Packaging"
    },

    {
      id: 12,
      name: "CHICKEN MASALA 20G",
      barcode: "920100000012",
      mrp: 35,
      gst: "12%",
      stock: 120,
      category: "Premium Box Packaging"
    },

    {
      id: 13,
      name: "CHICKEN MASALA 50G",
      barcode: "920100000013",
      mrp: 70,
      gst: "12%",
      stock: 90,
      category: "Premium Box Packaging"
    },

    {
      id: 14,
      name: "CHICKEN MASALA 100G",
      barcode: "920100000014",
      mrp: 140,
      gst: "12%",
      stock: 70,
      category: "Premium Box Packaging"
    },

    {
      id: 15,
      name: "HAND MADE PAPAD 200G",
      barcode: "920100000015",
      mrp: 90,
      gst: "5%",
      stock: 100,
      category: "Premium Box Packaging"
    },

    // HALDI POWDER

    {
      id: 16,
      name: "HALDI POWDER 50G",
      barcode: "920100000016",
      mrp: 25,
      gst: "5%",
      stock: 200,
      category: "Standard Plastic Packaging"
    },

    {
      id: 17,
      name: "HALDI POWDER 100G",
      barcode: "920100000017",
      mrp: 45,
      gst: "5%",
      stock: 180,
      category: "Standard Plastic Packaging"
    },

    {
      id: 18,
      name: "HALDI POWDER 200G",
      barcode: "920100000018",
      mrp: 80,
      gst: "5%",
      stock: 150,
      category: "Standard Plastic Packaging"
    },

    {
      id: 19,
      name: "HALDI POWDER 500G",
      barcode: "920100000019",
      mrp: 180,
      gst: "5%",
      stock: 120,
      category: "Standard Plastic Packaging"
    },

    {
      id: 20,
      name: "HALDI POWDER 1KG",
      barcode: "920100000020",
      mrp: 340,
      gst: "5%",
      stock: 80,
      category: "Standard Plastic Packaging"
    },

    // MIRCHI POWDER

    {
      id: 21,
      name: "MIRCHI POWDER 50G",
      barcode: "920100000021",
      mrp: 35,
      gst: "5%",
      stock: 180,
      category: "Standard Plastic Packaging"
    },

    {
      id: 22,
      name: "MIRCHI POWDER 100G",
      barcode: "920100000022",
      mrp: 65,
      gst: "5%",
      stock: 160,
      category: "Standard Plastic Packaging"
    },

    {
      id: 23,
      name: "MIRCHI POWDER 200G",
      barcode: "920100000023",
      mrp: 120,
      gst: "5%",
      stock: 130,
      category: "Standard Plastic Packaging"
    },

    {
      id: 24,
      name: "MIRCHI POWDER 500G",
      barcode: "920100000024",
      mrp: 280,
      gst: "5%",
      stock: 100,
      category: "Standard Plastic Packaging"
    },

    {
      id: 25,
      name: "MIRCHI POWDER 1KG",
      barcode: "920100000025",
      mrp: 520,
      gst: "5%",
      stock: 70,
      category: "Standard Plastic Packaging"
    },

    // DHANIYA POWDER

    {
      id: 26,
      name: "DHANIYA POWDER 50G",
      barcode: "920100000026",
      mrp: 20,
      gst: "5%",
      stock: 190,
      category: "Standard Plastic Packaging"
    },

    {
      id: 27,
      name: "DHANIYA POWDER 100G",
      barcode: "920100000027",
      mrp: 40,
      gst: "5%",
      stock: 170,
      category: "Standard Plastic Packaging"
    },

    {
      id: 28,
      name: "DHANIYA POWDER 200G",
      barcode: "920100000028",
      mrp: 75,
      gst: "5%",
      stock: 150,
      category: "Standard Plastic Packaging"
    },

    {
      id: 29,
      name: "DHANIYA POWDER 500G",
      barcode: "920100000029",
      mrp: 160,
      gst: "5%",
      stock: 100,
      category: "Standard Plastic Packaging"
    },

    {
      id: 30,
      name: "DHANIYA POWDER 1KG",
      barcode: "920100000030",
      mrp: 300,
      gst: "5%",
      stock: 80,
      category: "Standard Plastic Packaging"
    },

    // GARAM MASALA STANDARD

    {
      id: 31,
      name: "GARAM MASALA 50G",
      barcode: "920100000031",
      mrp: 45,
      gst: "5%",
      stock: 150,
      category: "Standard Plastic Packaging"
    },

    {
      id: 32,
      name: "GARAM MASALA 100G",
      barcode: "920100000032",
      mrp: 85,
      gst: "5%",
      stock: 130,
      category: "Standard Plastic Packaging"
    },

    {
      id: 33,
      name: "GARAM MASALA 200G",
      barcode: "920100000033",
      mrp: 160,
      gst: "5%",
      stock: 100,
      category: "Standard Plastic Packaging"
    },

    {
      id: 34,
      name: "GARAM MASALA 500G",
      barcode: "920100000034",
      mrp: 360,
      gst: "5%",
      stock: 70,
      category: "Standard Plastic Packaging"
    },

    {
      id: 35,
      name: "GARAM MASALA 1KG",
      barcode: "920100000035",
      mrp: 680,
      gst: "5%",
      stock: 50,
      category: "Standard Plastic Packaging"
    }

  ];

  const [products, setProducts] =
    useState([...defaultProducts]);

  const [selectedId, setSelectedId] =
    useState(1);

  const selectedProduct =
    products.find(
      (p) =>
        p.id === Number(selectedId)
    );

  const updateField = (
    field,
    value
  ) => {

    const updated =
      products.map((product) =>

        product.id === selectedProduct.id

          ? {
              ...product,
              [field]: value
            }

          : product

      );

    setProducts(updated);

  };

  const addProduct = () => {

    const newProduct = {

      id: Date.now(),

      name: "NEW PRODUCT",

      barcode:
        "92" +
        Math.floor(
          1000000000 +
          Math.random() * 9000000000
        ),

      mrp: 0,

      gst: "5%",

      stock: 0,

      category: "New Category"

    };

    setProducts([
      ...products,
      newProduct
    ]);

    setSelectedId(newProduct.id);

  };

  const deleteProduct = () => {

    const updated =
      products.filter(
        (p) =>
          p.id !== selectedProduct.id
      );

    setProducts(updated);

    if(updated.length > 0){

      setSelectedId(updated[0].id);

    }

  };

  const printBarcode = () => {

    window.print();

  };

  const downloadBarcode = () => {

    const svg =
      barcodeRef.current.querySelector("svg");

    const svgData =
      new XMLSerializer()
        .serializeToString(svg);

    const canvas =
      document.createElement("canvas");

    const ctx =
      canvas.getContext("2d");

    const img =
      new Image();

    img.onload = () => {

      canvas.width = img.width;

      canvas.height = img.height;

      ctx.drawImage(
        img,
        0,
        0
      );

      const pngFile =
        canvas.toDataURL("image/png");

      const downloadLink =
        document.createElement("a");

      downloadLink.download =
        `${selectedProduct.name}.png`;

      downloadLink.href =
        pngFile;

      downloadLink.click();

    };

    img.src =
      "data:image/svg+xml;base64," +
      btoa(svgData);

  };

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

      <div
        style={{
          background:"white",
          padding:"30px",
          borderRadius:"25px",
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
            marginBottom:"20px"
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

        <div
          style={{
            display:"flex",
            gap:"15px"
          }}
        >

          <button
            onClick={addProduct}
            style={{
              background:"#1e88e5",
              color:"white",
              border:"none",
              padding:"14px 25px",
              borderRadius:"12px",
              cursor:"pointer",
              fontSize:"18px"
            }}
          >
            Add Product
          </button>

          <button
            onClick={deleteProduct}
            style={{
              background:"#e53935",
              color:"white",
              border:"none",
              padding:"14px 25px",
              borderRadius:"12px",
              cursor:"pointer",
              fontSize:"18px"
            }}
          >
            Delete Product
          </button>

        </div>

      </div>

      {selectedProduct && (

        <div
          style={{
            background:"white",
            borderRadius:"25px",
            padding:"35px"
          }}
        >

          <input
            value={selectedProduct.name}
            onChange={(e)=>
              updateField(
                "name",
                e.target.value
              )
            }
            style={{
              width:"100%",
              padding:"18px",
              fontSize:"38px",
              fontWeight:"bold",
              borderRadius:"15px",
              marginBottom:"30px"
            }}
          />

          <div
            style={{
              display:"grid",
              gridTemplateColumns:
                "1fr 1fr",
              gap:"20px",
              marginBottom:"30px"
            }}
          >

            <div>

              <h3>MRP</h3>

              <input
                value={selectedProduct.mrp}
                onChange={(e)=>
                  updateField(
                    "mrp",
                    e.target.value
                  )
                }
                style={{
                  width:"100%",
                  padding:"12px"
                }}
              />

            </div>

            <div>

              <h3>GST</h3>

              <input
                value={selectedProduct.gst}
                onChange={(e)=>
                  updateField(
                    "gst",
                    e.target.value
                  )
                }
                style={{
                  width:"100%",
                  padding:"12px"
                }}
              />

            </div>

            <div>

              <h3>Stock</h3>

              <input
                value={selectedProduct.stock}
                onChange={(e)=>
                  updateField(
                    "stock",
                    e.target.value
                  )
                }
                style={{
                  width:"100%",
                  padding:"12px"
                }}
              />

            </div>

            <div>

              <h3>Category</h3>

              <input
                value={
                  selectedProduct.category
                }
                onChange={(e)=>
                  updateField(
                    "category",
                    e.target.value
                  )
                }
                style={{
                  width:"100%",
                  padding:"12px"
                }}
              />

            </div>

          </div>

          <div
            ref={barcodeRef}
            style={{
              border:"2px solid #ddd",
              borderRadius:"20px",
              padding:"40px",
              textAlign:"center",
              marginBottom:"30px"
            }}
          >

            <Barcode
              value={
                selectedProduct.barcode
              }
              width={3}
              height={120}
              fontSize={22}
            />

          </div>

          <div
            style={{
              display:"flex",
              gap:"15px"
            }}
          >

            <button
              onClick={printBarcode}
              style={{
                background:"#f4b400",
                border:"none",
                padding:"16px 30px",
                borderRadius:"12px",
                fontSize:"18px",
                fontWeight:"bold",
                cursor:"pointer"
              }}
            >
              Print Barcode
            </button>

            <button
              onClick={downloadBarcode}
              style={{
                background:"#1e88e5",
                color:"white",
                border:"none",
                padding:"16px 30px",
                borderRadius:"12px",
                fontSize:"18px",
                fontWeight:"bold",
                cursor:"pointer"
              }}
            >
              Download PNG
            </button>

          </div>

        </div>

      )}

    </div>

  );

}

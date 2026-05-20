"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const Barcode = dynamic(
  () => import("react-barcode"),
  { ssr: false }
);

export default function BarcodeStudio() {

  // FORCE LOAD PRODUCTS EVERY TIME

  const defaultProducts = [

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
      stock: 70,
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
      stock: 80,
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
      stock: 50,
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
      stock: 100,
      gst: "5%",
      category: "Premium Box Packaging"
    },

    // HALDI

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
      stock: 180,
      gst: "5%",
      category: "Standard Plastic Packaging"
    },

    {
      id: 18,
      name: "HALDI POWDER 200G",
      sku: "NZ-HP-200",
      barcode: "920100000018",
      mrp: 80,
      stock: 150,
      gst: "5%",
      category: "Standard Plastic Packaging"
    },

    {
      id: 19,
      name: "HALDI POWDER 500G",
      sku: "NZ-HP-500",
      barcode: "920100000019",
      mrp: 180,
      stock: 120,
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

    // MIRCHI

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

    // DHANIYA

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
      stock: 150,
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

    // GARAM MASALA STANDARD

    {
      id: 31,
      name: "GARAM MASALA 50G",
      sku: "NZ-SGM-50",
      barcode: "920100000031",
      mrp: 45,
      stock: 150,
      gst: "5%",
      category: "Standard Plastic Packaging"
    },

    {
      id: 32,
      name: "GARAM MASALA 100G",
      sku: "NZ-SGM-100",
      barcode: "920100000032",
      mrp: 85,
      stock: 130,
      gst: "5%",
      category: "Standard Plastic Packaging"
    },

    {
      id: 33,
      name: "GARAM MASALA 200G",
      sku: "NZ-SGM-200",
      barcode: "920100000033",
      mrp: 160,
      stock: 100,
      gst: "5%",
      category: "Standard Plastic Packaging"
    },

    {
      id: 34,
      name: "GARAM MASALA 500G",
      sku: "NZ-SGM-500",
      barcode: "920100000034",
      mrp: 360,
      stock: 70,
      gst: "5%",
      category: "Standard Plastic Packaging"
    },

    {
      id: 35,
      name: "GARAM MASALA 1KG",
      sku: "NZ-SGM-1KG",
      barcode: "920100000035",
      mrp: 680,
      stock: 50,
      gst: "5%",
      category: "Standard Plastic Packaging"
    }

  ];

  const [products, setProducts] =
    useState(defaultProducts);

  const [selectedId, setSelectedId] =
    useState(1);

  // FORCE RESET STORAGE

  useEffect(() => {

    localStorage.clear();

    localStorage.setItem(
      "products",
      JSON.stringify(defaultProducts)
    );

  }, []);

  const selectedProduct =
    products.find(
      (p)=>
        p.id === Number(selectedId)
    );

  const updateField = (
    field,
    value
  ) => {

    const updated =
      products.map((p)=>

        p.id === selectedProduct.id

          ? {
              ...p,
              [field]: value
            }

          : p

      );

    setProducts(updated);

  };

  const addProduct = () => {

    const newProduct = {

      id: Date.now(),

      name: "NEW PRODUCT",

      sku: "NZ-NEW",

      barcode:
        "92" +
        Math.floor(
          1000000000 +
          Math.random() * 9000000000
        ),

      mrp: 0,

      stock: 0,

      gst: "5%",

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
        (p)=>
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
          fontSize:"56px",
          marginBottom:"35px",
          fontWeight:"bold"
        }}
      >
        Barcode Studio
      </h1>

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
              e.target.value
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
              padding:"15px 30px",
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
              padding:"15px 30px",
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
              fontSize:"42px",
              fontWeight:"bold",
              marginBottom:"30px",
              padding:"18px",
              borderRadius:"15px"
            }}
          />

          <div
            style={{
              display:"grid",
              gridTemplateColumns:
                "1fr 1fr",
              gap:"25px",
              marginBottom:"35px"
            }}
          >

            <div>

              <h3>SKU</h3>

              <input
                value={selectedProduct.sku}
                onChange={(e)=>
                  updateField(
                    "sku",
                    e.target.value
                  )
                }
                style={{
                  width:"100%",
                  padding:"14px",
                  borderRadius:"10px"
                }}
              />

            </div>

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
                  padding:"14px",
                  borderRadius:"10px"
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
                  padding:"14px",
                  borderRadius:"10px"
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
                  padding:"14px",
                  borderRadius:"10px"
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
                  padding:"14px",
                  borderRadius:"10px"
                }}
              />

            </div>

            <div>

              <h3>Barcode Number</h3>

              <input
                value={
                  selectedProduct.barcode
                }
                onChange={(e)=>
                  updateField(
                    "barcode",
                    e.target.value
                  )
                }
                style={{
                  width:"100%",
                  padding:"14px",
                  borderRadius:"10px"
                }}
              />

            </div>

          </div>

          <div
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
              fontSize={24}
            />

          </div>

          <button
            onClick={printBarcode}
            style={{
              background:"#f4b400",
              color:"black",
              border:"none",
              padding:"18px 35px",
              borderRadius:"15px",
              fontSize:"20px",
              fontWeight:"bold",
              cursor:"pointer"
            }}
          >
            Print Barcode
          </button>

        </div>

      )}

    </div>

  );

}

"use client";

import { useState, useEffect } from "react";

export default function POSSystem() {

  const [products, setProducts] =
    useState([]);

  const [barcode, setBarcode] =
    useState("");

  const [cart, setCart] =
    useState([]);

  // LOAD PRODUCTS

  useEffect(() => {

    const saved =
      localStorage.getItem("products");

    if(saved){

      setProducts(
        JSON.parse(saved)
      );

    }

  }, []);

  // SCAN PRODUCT

  const scanBarcode = () => {

    const product =
      products.find(
        (p)=>
          p.barcode === barcode
      );

    if(!product){

      alert("Product Not Found");

      return;

    }

    setCart([
      ...cart,
      product
    ]);

    setBarcode("");

  };

  // TOTAL

  const total =
    cart.reduce(
      (sum,item)=>
        sum + Number(item.mrp),
      0
    );

  return (

    <div
      style={{
        background:"#121212",
        minHeight:"100vh",
        padding:"40px",
        color:"white",
        fontFamily:"Arial"
      }}
    >

      <h1
        style={{
          fontSize:"50px",
          marginBottom:"30px"
        }}
      >
        NIMAD ZAYKA POS
      </h1>

      {/* INPUT */}

      <div
        style={{
          display:"flex",
          gap:"15px",
          marginBottom:"30px"
        }}
      >

        <input
          value={barcode}
          onChange={(e)=>
            setBarcode(
              e.target.value
            )
          }
          placeholder="Scan Barcode"
          style={{
            flex:1,
            padding:"18px",
            borderRadius:"15px",
            fontSize:"22px",
            border:"none"
          }}
        />

        <button
          onClick={scanBarcode}
          style={{
            padding:"18px 30px",
            background:"#1e88e5",
            border:"none",
            borderRadius:"15px",
            color:"white",
            fontSize:"20px",
            cursor:"pointer"
          }}
        >
          Add
        </button>

      </div>

      {/* CART */}

      <div
        style={{
          background:"#1f1f1f",
          padding:"25px",
          borderRadius:"20px"
        }}
      >

        <h2
          style={{
            marginBottom:"20px"
          }}
        >
          Billing Cart
        </h2>

        {cart.length === 0 && (

          <p>
            No Products Added
          </p>

        )}

        {cart.map((item,index)=>(

          <div
            key={index}
            style={{
              borderBottom:
                "1px solid #333",
              padding:"15px 0"
            }}
          >

            <h3
              style={{
                fontSize:"28px"
              }}
            >
              {item.name}
            </h3>

            <p>
              Barcode:
              {" "}
              {item.barcode}
            </p>

            <p>
              Price:
              {" "}
              ₹{item.mrp}
            </p>

            <p>
              GST:
              {" "}
              {item.gst}
            </p>

          </div>

        ))}

        <h2
          style={{
            marginTop:"25px",
            fontSize:"36px"
          }}
        >
          Total:
          {" "}
          ₹{total}
        </h2>

      </div>

    </div>

  );

}

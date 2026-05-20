"use client";

import { useState } from "react";

export default function POSPage() {

  const products = [

    {
      barcode: "920100000016",
      name: "Haldi Powder 100g",
      price: 45
    },

    {
      barcode: "920100000021",
      name: "Mirchi Powder 100g",
      price: 65
    }

  ];

  const [barcode, setBarcode] =
    useState("");

  const [cart, setCart] =
    useState([]);

  const addProduct = () => {

    const found =
      products.find(
        item =>
          item.barcode === barcode
      );

    if (!found) {

      alert("Product Not Found");

      return;

    }

    setCart([
      ...cart,
      found
    ]);

    setBarcode("");

  };

  const total =
    cart.reduce(

      (sum,item)=>

        sum + item.price,

      0

    );

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#2a120d",
        padding: "30px",
        color: "white"
      }}
    >

      <h1
        style={{
          fontSize: "40px",
          color: "#f4c400",
          marginBottom: "30px"
        }}
      >
        POS Billing
      </h1>

      <div
        style={{
          display: "flex",
          gap: "15px",
          marginBottom: "30px"
        }}
      >

        <input
          value={barcode}
          onChange={(e)=>
            setBarcode(
              e.target.value
            )
          }
          placeholder="Enter Barcode"
          style={{
            flex: 1,
            padding: "16px",
            borderRadius: "10px",
            border: "none",
            fontSize: "18px"
          }}
        />

        <button
          onClick={addProduct}
          style={{
            background: "#f4c400",
            border: "none",
            padding: "16px 30px",
            borderRadius: "10px",
            fontWeight: "bold"
          }}
        >
          Add
        </button>

      </div>

      <div
        style={{
          background: "#4a1d12",
          padding: "20px",
          borderRadius: "15px"
        }}
      >

        {cart.map((item,index)=>(

          <div
            key={index}
            style={{
              display: "flex",
              justifyContent:
                "space-between",
              marginBottom: "15px",
              borderBottom:
                "1px solid rgba(255,255,255,0.1)",
              paddingBottom: "10px"
            }}
          >

            <div>

              <h3>
                {item.name}
              </h3>

              <p>
                {item.barcode}
              </p>

            </div>

            <h3>
              ₹{item.price}
            </h3>

          </div>

        ))}

        <h2
          style={{
            marginTop: "20px",
            color: "#f4c400"
          }}
        >
          Total: ₹{total}
        </h2>

      </div>

    </div>

  );

}

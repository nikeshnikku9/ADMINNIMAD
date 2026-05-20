"use client";

import { useState } from "react";

export default function POSPage() {

  const products = [

    {
      id: 1,
      name: "Haldi Powder 100g",
      price: 45,
      barcode: "920100000016"
    },

    {
      id: 2,
      name: "Mirchi Powder 100g",
      price: 65,
      barcode: "920100000021"
    },

    {
      id: 3,
      name: "Dhaniya Powder 100g",
      price: 55,
      barcode: "920100000026"
    },

    {
      id: 4,
      name: "Meat Masala 100g",
      price: 160,
      barcode: "920100000003"
    },

    {
      id: 5,
      name: "Chicken Masala 100g",
      price: 160,
      barcode: "920100000014"
    }

  ];

  const [cart, setCart] = useState([]);

  const [barcode, setBarcode] = useState("");

  const addProduct = () => {

    const product =
      products.find(
        p => p.barcode === barcode
      );

    if (!product) {

      alert("Product Not Found");

      return;

    }

    const existing =
      cart.find(
        item => item.id === product.id
      );

    if (existing) {

      const updated =
        cart.map(item =>

          item.id === product.id

            ? {
                ...item,
                qty: item.qty + 1
              }

            : item

        );

      setCart(updated);

    } else {

      setCart([
        ...cart,
        {
          ...product,
          qty: 1
        }
      ]);

    }

    setBarcode("");

  };

  const total = cart.reduce(

    (sum,item)=>

      sum + item.price * item.qty,

    0

  );

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#2a120d",
        color: "white",
        padding: "30px"
      }}
    >

      <h1
        style={{
          fontSize: "42px",
          marginBottom: "30px",
          color: "#f4c400"
        }}
      >
        POS Billing System
      </h1>

      {/* BARCODE INPUT */}
      <div
        style={{
          display: "flex",
          gap: "15px",
          marginBottom: "30px"
        }}
      >

        <input
          type="text"
          placeholder="Scan Barcode"
          value={barcode}
          onChange={(e)=>
            setBarcode(e.target.value)
          }
          style={{
            flex: 1,
            padding: "16px",
            borderRadius: "12px",
            border: "none",
            fontSize: "18px"
          }}
        />

        <button
          onClick={addProduct}
          style={{
            background: "#f4c400",
            border: "none",
            padding: "16px 28px",
            borderRadius: "12px",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          Add
        </button>

      </div>

      {/* PRODUCT LIST */}
      <div
        style={{
          background: "#4b1f14",
          padding: "25px",
          borderRadius: "20px"
        }}
      >

        <h2
          style={{
            marginBottom: "20px",
            fontSize: "28px"
          }}
        >
          Cart Items
        </h2>

        {cart.length === 0 && (

          <p>No products added</p>

        )}

        {cart.map((item,index)=>(

          <div
            key={index}
            style={{
              display: "flex",
              justifyContent:
                "space-between",
              background: "#5c2b1f",
              padding: "18px",
              borderRadius: "12px",
              marginBottom: "15px"
            }}
          >

            <div>

              <h3>
                {item.name}
              </h3>

              <p>
                Barcode:
                {item.barcode}
              </p>

            </div>

            <div
              style={{
                textAlign: "right"
              }}
            >

              <p>
                Qty: {item.qty}
              </p>

              <p>
                ₹
                {item.price * item.qty}
              </p>

            </div>

          </div>

        ))}

        {/* TOTAL */}
        <div
          style={{
            marginTop: "25px",
            borderTop:
              "2px solid rgba(255,255,255,0.2)",
            paddingTop: "20px"
          }}
        >

          <h2
            style={{
              fontSize: "32px",
              color: "#f4c400"
            }}
          >
            Total: ₹{total}
          </h2>

        </div>

        {/* PRINT */}
        <button
          onClick={()=>window.print()}
          style={{
            marginTop: "25px",
            background: "#f4c400",
            border: "none",
            padding: "16px 28px",
            borderRadius: "12px",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "18px"
          }}
        >
          Print Bill
        </button>

      </div>

    </div>

  );

}

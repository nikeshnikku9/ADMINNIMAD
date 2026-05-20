"use client";

import { useState } from "react";

export default function POSPage() {

  const products = [

    {
      barcode: "920100000016",
      name: "Haldi Powder 100g",
      price: 45,
      gst: 5
    },

    {
      barcode: "920100000021",
      name: "Mirchi Powder 100g",
      price: 65,
      gst: 5
    },

    {
      barcode: "920100000026",
      name: "Dhaniya Powder 100g",
      price: 55,
      gst: 5
    },

    {
      barcode: "920100000003",
      name: "Meat Masala 100g",
      price: 160,
      gst: 12
    }

  ];

  const [barcode,setBarcode] =
    useState("");

  const [cart,setCart] =
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

  const subtotal =
    cart.reduce(
      (sum,item)=>
        sum + item.price,
      0
    );

  const gstAmount =
    cart.reduce(
      (sum,item)=>
        sum +
        (item.price * item.gst)/100,
      0
    );

  const grandTotal =
    subtotal + gstAmount;

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
          fontSize: "42px",
          color: "#f4c400",
          marginBottom: "25px"
        }}
      >
        GST POS Billing
      </h1>

      {/* INPUT */}
      <div
        style={{
          display: "flex",
          gap: "15px",
          marginBottom: "25px"
        }}
      >

        <input
          value={barcode}
          onChange={(e)=>
            setBarcode(
              e.target.value
            )
          }
          placeholder="Scan or Enter Barcode"
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
          Add Product
        </button>

      </div>

      {/* GST BILL */}
      <div
        id="bill-area"
        style={{
          background: "white",
          color: "black",
          borderRadius: "15px",
          padding: "30px"
        }}
      >

        {/* HEADER */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "25px"
          }}
        >

          <h1
            style={{
              fontSize: "34px",
              marginBottom: "10px"
            }}
          >
            NIMAD ZAYKA SPICES
          </h1>

          <p>
            MUKESH AND SONS MASALA UDHYOG
          </p>

          <p>
            Julwaniya Road Rajpur 451447
          </p>

          <p>
            GSTIN:
            23MUCPS2534K1ZA
          </p>

          <p>
            Contact:
            6265996333
          </p>

        </div>

        {/* TABLE */}
        <table
          style={{
            width: "100%",
            borderCollapse:
              "collapse"
          }}
        >

          <thead>

            <tr
              style={{
                background: "#f4c400"
              }}
            >

              <th style={th}>
                Product
              </th>

              <th style={th}>
                Barcode
              </th>

              <th style={th}>
                GST
              </th>

              <th style={th}>
                Price
              </th>

            </tr>

          </thead>

          <tbody>

            {cart.map((item,index)=>(

              <tr key={index}>

                <td style={td}>
                  {item.name}
                </td>

                <td style={td}>
                  {item.barcode}
                </td>

                <td style={td}>
                  {item.gst}%
                </td>

                <td style={td}>
                  ₹{item.price}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

        {/* TOTALS */}
        <div
          style={{
            marginTop: "30px",
            textAlign: "right"
          }}
        >

          <h3>
            Subtotal:
            ₹{subtotal.toFixed(2)}
          </h3>

          <h3>
            GST:
            ₹{gstAmount.toFixed(2)}
          </h3>

          <h1
            style={{
              color: "green"
            }}
          >
            Total:
            ₹{grandTotal.toFixed(2)}
          </h1>

        </div>

      </div>

      {/* BUTTONS */}
      <div
        style={{
          display: "flex",
          gap: "15px",
          marginTop: "25px"
        }}
      >

        <button
          onClick={()=>
            window.print()
          }
          style={btn}
        >
          Print GST Bill
        </button>

        <button
          onClick={()=>
            alert(
              "Camera Scanner Next Upgrade"
            )
          }
          style={btn}
        >
          Open Camera Scanner
        </button>

      </div>

    </div>

  );

}

const th = {

  border:
    "1px solid #ccc",

  padding: "12px"

};

const td = {

  border:
    "1px solid #ccc",

  padding: "12px",

  textAlign: "center"

};

const btn = {

  background: "#f4c400",

  border: "none",

  padding: "16px 28px",

  borderRadius: "12px",

  fontWeight: "bold",

  cursor: "pointer",

  fontSize: "16px"

};

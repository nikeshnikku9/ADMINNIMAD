"use client";

import { useState } from "react";
import Barcode from "react-barcode";

export default function BarcodePage() {

  const products = [

    {
      name: "HALDI POWDER 100G",
      code: "920100000016",
      price: "₹45"
    },

    {
      name: "MIRCHI POWDER 100G",
      code: "920100000021",
      price: "₹65"
    },

    {
      name: "DHANIYA POWDER 100G",
      code: "920100000026",
      price: "₹55"
    },

    {
      name: "MEAT MASALA 100G",
      code: "920100000003",
      price: "₹160"
    }

  ];

  const [selected,setSelected] =
    useState(products[0]);

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#34150b",
        padding: "40px",
        color: "white"
      }}
    >

      <h1
        style={{
          fontSize: "40px",
          marginBottom: "30px"
        }}
      >
        Barcode Generator
      </h1>

      <div
        style={{
          background: "#542616",
          padding: "30px",
          borderRadius: "20px",
          maxWidth: "850px"
        }}
      >

        <select

          onChange={(e)=>{

            const item =
              products.find(
                p => p.code === e.target.value
              );

            setSelected(item);

          }}

          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "10px",
            marginBottom: "25px",
            fontSize: "18px"
          }}
        >

          {products.map((item,index)=>(

            <option
              key={index}
              value={item.code}
            >

              {item.name}

            </option>

          ))}

        </select>

        <div
          style={{
            background: "white",
            color: "black",
            padding: "40px",
            borderRadius: "20px",
            textAlign: "center"
          }}
        >

          <h2
            style={{
              fontSize: "35px"
            }}
          >
            {selected.name}
          </h2>

          <h3
            style={{
              marginBottom: "25px"
            }}
          >
            {selected.price}
          </h3>

          <Barcode
            value={selected.code}
            width={3}
            height={120}
            fontSize={22}
            background="#ffffff"
          />

          <div
            style={{
              marginTop: "25px",
              borderTop: "1px solid #ccc",
              paddingTop: "20px"
            }}
          >

            <h3>
              MUKESH AND SONS MASALA UDHYOG
            </h3>

            <p>
              GSTIN: 23MUCPS2534K1ZA
            </p>

            <p>
              Contact: 6265996333
            </p>

          </div>

        </div>

      </div>

    </div>

  );

}

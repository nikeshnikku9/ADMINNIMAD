"use client";

import { useState } from "react";

export default function BarcodePage() {

  const products = [

    // PREMIUM BOX PACKAGING

    {
      name: "Meat Masala",
      size: "20g",
      barcode: "920100000001",
      price: 45
    },

    {
      name: "Meat Masala",
      size: "50g",
      barcode: "920100000002",
      price: 90
    },

    {
      name: "Meat Masala",
      size: "100g",
      barcode: "920100000003",
      price: 160
    },

    {
      name: "Garam Masala",
      size: "50g",
      barcode: "920100000004",
      price: 80
    },

    {
      name: "Garam Masala",
      size: "100g",
      barcode: "920100000005",
      price: 150
    },

    {
      name: "Shahi Paneer Masala",
      size: "50g",
      barcode: "920100000006",
      price: 85
    },

    {
      name: "Shahi Paneer Masala",
      size: "100g",
      barcode: "920100000007",
      price: 160
    },

    {
      name: "Dal Bati Masala",
      size: "50g",
      barcode: "920100000008",
      price: 75
    },

    {
      name: "Dal Bati Masala",
      size: "100g",
      barcode: "920100000009",
      price: 145
    },

    {
      name: "Khada Masala",
      size: "50g",
      barcode: "920100000010",
      price: 95
    },

    {
      name: "Khada Masala",
      size: "100g",
      barcode: "920100000011",
      price: 180
    },

    {
      name: "Chicken Masala",
      size: "20g",
      barcode: "920100000012",
      price: 40
    },

    {
      name: "Chicken Masala",
      size: "50g",
      barcode: "920100000013",
      price: 85
    },

    {
      name: "Chicken Masala",
      size: "100g",
      barcode: "920100000014",
      price: 160
    },

    // STANDARD PLASTIC PACKAGING

    {
      name: "Haldi Powder",
      size: "50g",
      barcode: "920100000015",
      price: 25
    },

    {
      name: "Haldi Powder",
      size: "100g",
      barcode: "920100000016",
      price: 45
    },

    {
      name: "Haldi Powder",
      size: "200g",
      barcode: "920100000017",
      price: 80
    },

    {
      name: "Haldi Powder",
      size: "500g",
      barcode: "920100000018",
      price: 180
    },

    {
      name: "Haldi Powder",
      size: "1kg",
      barcode: "920100000019",
      price: 320
    },

    {
      name: "Mirchi Powder",
      size: "50g",
      barcode: "920100000020",
      price: 35
    },

    {
      name: "Mirchi Powder",
      size: "100g",
      barcode: "920100000021",
      price: 65
    },

    {
      name: "Mirchi Powder",
      size: "200g",
      barcode: "920100000022",
      price: 120
    },

    {
      name: "Mirchi Powder",
      size: "500g",
      barcode: "920100000023",
      price: 280
    },

    {
      name: "Mirchi Powder",
      size: "1kg",
      barcode: "920100000024",
      price: 520
    },

    {
      name: "Dhaniya Powder",
      size: "50g",
      barcode: "920100000025",
      price: 30
    },

    {
      name: "Dhaniya Powder",
      size: "100g",
      barcode: "920100000026",
      price: 55
    },

    {
      name: "Dhaniya Powder",
      size: "200g",
      barcode: "920100000027",
      price: 100
    },

    {
      name: "Dhaniya Powder",
      size: "500g",
      barcode: "920100000028",
      price: 220
    },

    {
      name: "Dhaniya Powder",
      size: "1kg",
      barcode: "920100000029",
      price: 400
    },

    {
      name: "Garam Masala",
      size: "50g",
      barcode: "920100000030",
      price: 40
    },

    {
      name: "Garam Masala",
      size: "100g",
      barcode: "920100000031",
      price: 75
    },

    {
      name: "Garam Masala",
      size: "200g",
      barcode: "920100000032",
      price: 140
    },

    {
      name: "Garam Masala",
      size: "500g",
      barcode: "920100000033",
      price: 320
    },

    {
      name: "Garam Masala",
      size: "1kg",
      barcode: "920100000034",
      price: 580
    }

  ];

  const [selectedProduct, setSelectedProduct] =
    useState(products[0]);

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#3b170b",
        color: "white",
        padding: "30px"
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
          background: "#5b2c1d",
          padding: "30px",
          borderRadius: "20px",
          maxWidth: "850px"
        }}
      >

        <h2
          style={{
            marginBottom: "20px",
            fontSize: "24px"
          }}
        >
          Select Product Variant
        </h2>

        <select
          onChange={(e) => {

            const product =
              products.find(
                item =>
                  item.barcode === e.target.value
              );

            setSelectedProduct(product);

          }}
          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "12px",
            marginBottom: "30px",
            fontSize: "18px"
          }}
        >

          {products.map((product,index)=>(
            <option
              key={index}
              value={product.barcode}
            >
              {product.name} - {product.size}
            </option>
          ))}

        </select>

        <div
          style={{
            background: "white",
            color: "black",
            padding: "35px",
            borderRadius: "18px",
            textAlign: "center"
          }}
        >

          <h2
            style={{
              fontSize: "34px",
              marginBottom: "10px"
            }}
          >
            {selectedProduct.name}
          </h2>

          <p
            style={{
              fontSize: "22px",
              marginBottom: "10px"
            }}
          >
            Size: {selectedProduct.size}
          </p>

          <p
            style={{
              fontSize: "26px",
              fontWeight: "bold",
              marginBottom: "30px"
            }}
          >
            ₹ {selectedProduct.price}
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
              gap: "2px",
              height: "140px",
              marginBottom: "20px"
            }}
          >

            {selectedProduct.barcode
              .split("")
              .map((num,index)=>(

              <div
                key={index}
                style={{
                  width:
                    index % 2 === 0
                      ? "5px"
                      : "3px",

                  height:
                    `${70 + Number(num) * 6}px`,

                  background: "black"
                }}
              />

            ))}

          </div>

          <div
            style={{
              fontSize: "28px",
              letterSpacing: "6px",
              fontWeight: "bold",
              marginBottom: "25px"
            }}
          >
            {selectedProduct.barcode}
          </div>

          <div
            style={{
              borderTop: "1px solid #ccc",
              paddingTop: "20px",
              fontSize: "16px",
              color: "#444"
            }}
          >

            <p>
              MUKESH AND SONS MASALA UDHYOG
            </p>

            <p>
              Julwaniya Road Rajpur 451447
            </p>

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

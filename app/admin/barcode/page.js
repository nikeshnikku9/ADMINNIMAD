"use client";

import { useState } from "react";

export default function BarcodePage() {

  const products = [

    {
      name: "Meat Masala 20g",
      barcode: "920100000001",
      price: 45
    },

    {
      name: "Meat Masala 50g",
      barcode: "920100000002",
      price: 90
    },

    {
      name: "Garam Masala 100g",
      barcode: "920100000005",
      price: 150
    },

    {
      name: "Haldi Powder 100g",
      barcode: "920100000016",
      price: 40
    },

    {
      name: "Mirchi Powder 100g",
      barcode: "920100000020",
      price: 60
    },

    {
      name: "Dhaniya Powder 100g",
      barcode: "920100000021",
      price: 50
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
          marginBottom: "30px"
        }}
      >
        Barcode Studio
      </h1>

      <div
        style={{
          background: "#5b2c1d",
          padding: "25px",
          borderRadius: "20px",
          maxWidth: "700px"
        }}
      >

        <h2
          style={{
            marginBottom: "20px"
          }}
        >
          Select Product
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
            borderRadius: "10px",
            marginBottom: "25px",
            fontSize: "18px"
          }}
        >

          {products.map((product,index)=>(
            <option
              key={index}
              value={product.barcode}
            >
              {product.name}
            </option>
          ))}

        </select>

        <div
          style={{
            background: "white",
            color: "black",
            padding: "30px",
            borderRadius: "15px",
            textAlign: "center"
          }}
        >

          <h2
            style={{
              fontSize: "30px",
              marginBottom: "15px"
            }}
          >
            {selectedProduct.name}
          </h2>

          <p
            style={{
              fontSize: "22px",
              marginBottom: "25px"
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
              height: "120px",
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
                      ? "4px"
                      : "2px",

                  height:
                    `${60 + Number(num) * 5}px`,

                  background: "black"
                }}
              />

            ))}

          </div>

          <div
            style={{
              fontSize: "24px",
              letterSpacing: "5px",
              fontWeight: "bold"
            }}
          >
            {selectedProduct.barcode}
          </div>

        </div>

      </div>

    </div>

  );

}

"use client";

import { useEffect, useState } from "react";

export default function BarcodePage() {

  const defaultProducts = [
    {
      id: 1,
      name: "Meat Masala",
      size: "20g",
      price: 45,
      stock: 50,
      barcode: "920100000001",
      category: "Premium Box"
    },
    {
      id: 2,
      name: "Meat Masala",
      size: "50g",
      price: 90,
      stock: 40,
      barcode: "920100000002",
      category: "Premium Box"
    },
    {
      id: 3,
      name: "Meat Masala",
      size: "100g",
      price: 170,
      stock: 30,
      barcode: "920100000003",
      category: "Premium Box"
    },
    {
      id: 4,
      name: "Garam Masala",
      size: "50g",
      price: 80,
      stock: 40,
      barcode: "920100000004",
      category: "Premium Box"
    },
    {
      id: 5,
      name: "Garam Masala",
      size: "100g",
      price: 150,
      stock: 35,
      barcode: "920100000005",
      category: "Premium Box"
    },
    {
      id: 6,
      name: "Shahi Paneer Masala",
      size: "50g",
      price: 85,
      stock: 30,
      barcode: "920100000006",
      category: "Premium Box"
    },
    {
      id: 7,
      name: "Shahi Paneer Masala",
      size: "100g",
      price: 160,
      stock: 25,
      barcode: "920100000007",
      category: "Premium Box"
    },
    {
      id: 8,
      name: "Dal Bati Masala",
      size: "50g",
      price: 75,
      stock: 35,
      barcode: "920100000008",
      category: "Premium Box"
    },
    {
      id: 9,
      name: "Dal Bati Masala",
      size: "100g",
      price: 145,
      stock: 25,
      barcode: "920100000009",
      category: "Premium Box"
    },
    {
      id: 10,
      name: "Khada Masala",
      size: "50g",
      price: 95,
      stock: 20,
      barcode: "920100000010",
      category: "Premium Box"
    },
    {
      id: 11,
      name: "Khada Masala",
      size: "100g",
      price: 180,
      stock: 20,
      barcode: "920100000011",
      category: "Premium Box"
    },
    {
      id: 12,
      name: "Chicken Masala",
      size: "20g",
      price: 40,
      stock: 50,
      barcode: "920100000012",
      category: "Premium Box"
    },
    {
      id: 13,
      name: "Chicken Masala",
      size: "50g",
      price: 85,
      stock: 40,
      barcode: "920100000013",
      category: "Premium Box"
    },
    {
      id: 14,
      name: "Chicken Masala",
      size: "100g",
      price: 160,
      stock: 30,
      barcode: "920100000014",
      category: "Premium Box"
    },
    {
      id: 15,
      name: "Haldi Powder",
      size: "50g",
      price: 20,
      stock: 100,
      barcode: "920100000015",
      category: "Standard Plastic"
    },
    {
      id: 16,
      name: "Haldi Powder",
      size: "100g",
      price: 40,
      stock: 90,
      barcode: "920100000016",
      category: "Standard Plastic"
    },
    {
      id: 17,
      name: "Haldi Powder",
      size: "200g",
      price: 75,
      stock: 70,
      barcode: "920100000017",
      category: "Standard Plastic"
    },
    {
      id: 18,
      name: "Haldi Powder",
      size: "500g",
      price: 170,
      stock: 60,
      barcode: "920100000018",
      category: "Standard Plastic"
    },
    {
      id: 19,
      name: "Haldi Powder",
      size: "1kg",
      price: 320,
      stock: 50,
      barcode: "920100000019",
      category: "Standard Plastic"
    },
    {
      id: 20,
      name: "Mirchi Powder",
      size: "100g",
      price: 60,
      stock: 80,
      barcode: "920100000020",
      category: "Standard Plastic"
    },
    {
      id: 21,
      name: "Dhaniya Powder",
      size: "100g",
      price: 50,
      stock: 70,
      barcode: "920100000021",
      category: "Standard Plastic"
    }
  ];

  const [products, setProducts] = useState([]);
  const [selectedBarcode, setSelectedBarcode] = useState("");

  useEffect(() => {

    const savedProducts = localStorage.getItem("nimad-products");

    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    } else {
      setProducts(defaultProducts);

      localStorage.setItem(
        "nimad-products",
        JSON.stringify(defaultProducts)
      );
    }

  }, []);

  const currentProduct =
    products.find(
      (item) => item.barcode === selectedBarcode
    ) || products[0];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#3b170b",
        padding: "30px",
        color: "white"
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
          marginBottom: "30px"
        }}
      >

        <h2
          style={{
            marginBottom: "20px"
          }}
        >
          Product Barcode Generator
        </h2>

        <select
          onChange={(e) =>
            setSelectedBarcode(e.target.value)
          }
          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "10px",
            marginBottom: "25px",
            fontSize: "18px"
          }}
        >

          {products.map((product) => (
            <option
              key={product.barcode}
              value={product.barcode}
            >
              {product.name} - {product.size}
            </option>
          ))}

        </select>

        {currentProduct && (
          <div>

            <div
              style={{
                background: "white",
                color: "black",
                padding: "25px",
                borderRadius: "15px",
                marginBottom: "25px"
              }}
            >

              <h2
                style={{
                  fontSize: "30px",
                  marginBottom: "15px"
                }}
              >
                {currentProduct.name}
              </h2>

              <p><b>Category:</b> {currentProduct.category}</p>

              <p><b>MRP:</b> ₹{currentProduct.price}</p>

              <p><b>Stock:</b> {currentProduct.stock}</p>

              <p><b>SKU:</b> NZ-{currentProduct.id}</p>

              <p><b>GST:</b> 5%</p>

              <p><b>Inventory:</b> Active</p>

              <p><b>Barcode:</b> {currentProduct.barcode}</p>

              <hr style={{ margin: "20px 0" }} />

              <h3>MUKESH AND SONS MASALA UDHYOG</h3>

              <p>Julwaniya Road Rajpur 451447</p>

              <p>GSTIN: 23MUCPS2534K1ZA</p>

              <p>Contact: 6265996333</p>

            </div>

            <div
              style={{
                background: "white",
                padding: "30px",
                borderRadius: "15px",
                textAlign: "center"
              }}
            >

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

                {currentProduct.barcode
                  .split("")
                  .map((num, index) => (

                  <div
                    key={index}
                    style={{
                      width: index % 2 === 0 ? "4px" : "2px",
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
                  color: "black",
                  letterSpacing: "6px",
                  fontWeight: "bold"
                }}
              >
                {currentProduct.barcode}
              </div>

            </div>

          </div>
        )}

      </div>

    </div>
  );
}

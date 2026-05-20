"use client";

import { useState, useEffect } from "react";
import Barcode from "react-barcode";
import QRCode from "react-qr-code";

export default function BarcodeStudio() {

  // DEFAULT PRODUCTS

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
      stock: 90,
      gst: "12%",
      category: "Premium Box Packaging"
    },

    {
      id: 3,
      name: "HALDI POWDER 100G",
      sku: "NZ-HP-100",
      barcode: "920100000003",
      mrp: 45,
      stock: 170,
      gst: "5%",
      category: "Standard Packaging"
    }

  ];

  // STATES

  const [products, setProducts] =
    useState([]);

  const [selectedId, setSelectedId] =
    useState(1);

  // LOAD DATA

  useEffect(() => {

    const saved =
      localStorage.getItem("products");

    if (saved) {

      setProducts(JSON.parse(saved));

    } else {

      setProducts(defaultProducts);

    }

  }, []);

  // AUTO SAVE

  useEffect(() => {

    if (products.length > 0) {

      localStorage.setItem(
        "products",
        JSON.stringify(products)
      );

    }

  }, [products]);

  // FIND PRODUCT

  const selectedProduct =
    products.find(
      (p) => p.id === Number(selectedId)
    );

  // UPDATE FIELD

  const updateField = (
    field,
    value
  ) => {

    const updated =
      products.map((p) =>

        p.id === selectedProduct.id
          ? {
              ...p,
              [field]: value
            }
          : p

      );

    setProducts(updated);

  };

  // PRINT BARCODE

  const printBarcodeOnly = () => {

    const printContents =
      document.getElementById(
        "barcode-only"
      ).innerHTML;

    const win =
      window.open(
        "",
        "",
        "width=800,height=600"
      );

    win.document.write(`
      <html>
        <head>
          <title>Print Barcode</title>
        </head>

        <body
          style="
            display:flex;
            justify-content:center;
            align-items:center;
            height:100vh;
          "
        >

          ${printContents}

        </body>
      </html>
    `);

    win.document.close();

    win.print();

  };

  // ADD PRODUCT

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

  // DELETE PRODUCT

  const deleteProduct = () => {

    const filtered =
      products.filter(
        (p) =>
          p.id !== selectedProduct.id
      );

    setProducts(filtered);

    if (filtered.length > 0) {

      setSelectedId(filtered[0].id);

    }

  };

  return (

    <div
      style={{
        padding: "30px",
        background: "#3d1717",
        minHeight: "100vh",
        color: "white",
        fontFamily: "Arial"
      }}
    >

      {/* HEADER */}

      <h1
        style={{
          fontSize: "45px",
          marginBottom: "30px",
          fontWeight: "bold"
        }}
      >
        NIMAD ZAYKA BARCODE STUDIO
      </h1>

      {/* TOP PANEL */}

      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "20px",
          marginBottom: "25px",
          color: "black"
        }}
      >

        <h2
          style={{
            marginBottom: "15px"
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
            width: "100%",
            padding: "15px",
            borderRadius: "12px",
            fontSize: "18px",
            marginBottom: "20px"
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
            display: "flex",
            gap: "15px",
            flexWrap: "wrap"
          }}
        >

          <button
            onClick={addProduct}
            style={{
              padding: "14px 22px",
              border: "none",
              borderRadius: "12px",
              background: "#1e88e5",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            Add Product
          </button>

          <button
            onClick={deleteProduct}
            style={{
              padding: "14px 22px",
              border: "none",
              borderRadius: "12px",
              background: "#e53935",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            Delete Product
          </button>

        </div>

      </div>

      {/* PRODUCT CARD */}

      {selectedProduct && (

        <div
          style={{
            background: "white",
            color: "black",
            padding: "30px",
            borderRadius: "20px"
          }}
        >

          {/* NAME */}

          <input
            value={selectedProduct.name}
            onChange={(e)=>
              updateField(
                "name",
                e.target.value
              )
            }
            style={{
              width: "100%",
              fontSize: "35px",
              fontWeight: "bold",
              marginBottom: "25px",
              border: "2px solid #ddd",
              borderRadius: "12px",
              padding: "15px"
            }}
          />

          {/* GRID */}

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "1fr 1fr",
              gap: "20px",
              marginBottom: "30px"
            }}
          >

            {/* SKU */}

            <div>

              <strong>SKU</strong>

              <input
                value={selectedProduct.sku}
                onChange={(e)=>
                  updateField(
                    "sku",
                    e.target.value
                  )
                }
                style={{
                  width: "100%",
                  padding: "12px",
                  marginTop: "8px",
                  borderRadius: "10px"
                }}
              />

            </div>

            {/* MRP */}

            <div>

              <strong>MRP</strong>

              <input
                type="number"
                value={selectedProduct.mrp}
                onChange={(e)=>
                  updateField(
                    "mrp",
                    e.target.value
                  )
                }
                style={{
                  width: "100%",
                  padding: "12px",
                  marginTop: "8px",
                  borderRadius: "10px"
                }}
              />

            </div>

            {/* STOCK */}

            <div>

              <strong>Stock</strong>

              <input
                type="number"
                value={selectedProduct.stock}
                onChange={(e)=>
                  updateField(
                    "stock",
                    e.target.value
                  )
                }
                style={{
                  width: "100%",
                  padding: "12px",
                  marginTop: "8px",
                  borderRadius: "10px"
                }}
              />

            </div>

            {/* GST */}

            <div>

              <strong>GST</strong>

              <input
                value={selectedProduct.gst}
                onChange={(e)=>
                  updateField(
                    "gst",
                    e.target.value
                  )
                }
                style={{
                  width: "100%",
                  padding: "12px",
                  marginTop: "8px",
                  borderRadius: "10px"
                }}
              />

            </div>

            {/* CATEGORY */}

            <div>

              <strong>Category</strong>

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
                  width: "100%",
                  padding: "12px",
                  marginTop: "8px",
                  borderRadius: "10px"
                }}
              />

            </div>

            {/* BARCODE */}

            <div>

              <strong>Barcode</strong>

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
                  width: "100%",
                  padding: "12px",
                  marginTop: "8px",
                  borderRadius: "10px"
                }}
              />

            </div>

          </div>

          {/* BARCODE */}

          <div
            id="barcode-only"
            style={{
              background: "white",
              textAlign: "center",
              padding: "30px",
              border: "2px solid #ddd",
              borderRadius: "20px",
              marginBottom: "30px"
            }}
          >

            <Barcode
              value={
                selectedProduct.barcode
              }
              width={2}
              height={100}
              fontSize={18}
            />

          </div>

          {/* QR CODE */}

          <div
            style={{
              textAlign: "center",
              marginBottom: "30px"
            }}
          >

            <h2
              style={{
                marginBottom: "15px"
              }}
            >
              Product QR Code
            </h2>

            <QRCode
              size={180}
              value={`https://nimadzayka.com/product/${selectedProduct.barcode}`}
            />

          </div>

          {/* BUTTONS */}

          <div
            style={{
              display: "flex",
              gap: "15px",
              flexWrap: "wrap"
            }}
          >

            <button
              onClick={
                printBarcodeOnly
              }
              style={{
                padding: "14px 24px",
                border: "none",
                borderRadius: "12px",
                background: "#f4b400",
                color: "black",
                fontWeight: "bold",
                cursor: "pointer",
                fontSize: "16px"
              }}
            >
              Print Barcode Only
            </button>

            <button
              onClick={() =>
                window.print()
              }
              style={{
                padding: "14px 24px",
                border: "none",
                borderRadius: "12px",
                background: "#1e88e5",
                color: "white",
                fontWeight: "bold",
                cursor: "pointer",
                fontSize: "16px"
              }}
            >
              Print Full Product Sheet
            </button>

          </div>

        </div>

      )}

    </div>

  );

}

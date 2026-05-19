"use client";

import { useEffect, useState } from "react";

export default function BarcodeStudio() {

  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [barcode, setBarcode] = useState("");

  useEffect(() => {
    const savedProducts = localStorage.getItem("nimad-products");

    if (savedProducts) {
      const parsed = JSON.parse(savedProducts);
      setProducts(parsed);

      if (parsed.length > 0) {
        setSelectedProduct(parsed[0]);
        setBarcode(parsed[0].barcode);
      }
    }
  }, []);

  const handleProductChange = (e) => {
    const product = products.find(
      (p) => p.barcode === e.target.value
    );

    setSelectedProduct(product);
    setBarcode(product.barcode);
  };

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
          fontWeight: "bold",
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
            fontSize: "24px",
            marginBottom: "20px"
          }}
        >
          Generate Barcode
        </h2>

        <select
          onChange={handleProductChange}
          value={barcode}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "10px",
            marginBottom: "20px",
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

        {selectedProduct && (
          <div
            style={{
              background: "#3b170b",
              padding: "25px",
              borderRadius: "20px"
            }}
          >

            <div
              style={{
                background: "white",
                padding: "20px",
                borderRadius: "12px",
                color: "black",
                marginBottom: "20px"
              }}
            >
              <h2
                style={{
                  fontSize: "30px",
                  fontWeight: "bold",
                  marginBottom: "15px"
                }}
              >
                {selectedProduct.name}
              </h2>

              <p><b>Size:</b> {selectedProduct.size}</p>

              <p><b>MRP:</b> ₹{selectedProduct.price}</p>

              <p><b>Stock:</b> {selectedProduct.stock}</p>

              <p><b>SKU:</b> NZ-{selectedProduct.id}</p>

              <p><b>Category:</b> Spices</p>

              <p><b>GST:</b> 5%</p>

              <p><b>Inventory Status:</b> In Stock</p>

              <p><b>Barcode:</b> {selectedProduct.barcode}</p>

              <hr style={{ margin: "20px 0" }} />

              <h3>MUKESH AND SONS MASALA UDHYOG</h3>

              <p>Julwaniya Road Rajpur 451447</p>

              <p>GSTIN: 23MUCPS2534K1ZA</p>

              <p>Contact: 6265996333</p>

            </div>

            <div
              style={{
                background: "white",
                padding: "25px",
                borderRadius: "10px",
                textAlign: "center"
              }}
            >
              <svg
                id="barcode"
                width="100%"
                height="120"
              ></svg>

              <div
                style={{
                  marginTop: "15px",
                  fontSize: "22px",
                  color: "black",
                  letterSpacing: "4px"
                }}
              >
                {selectedProduct.barcode}
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}

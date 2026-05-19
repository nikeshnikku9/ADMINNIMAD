"use client"

import { useState } from "react"

export default function ProductsPage() {

  const [products, setProducts] = useState([

    {
      id: 1,
      name: "Haldi Powder",
      size: "100g",
      price: 45,
      stock: 120,
      barcode: "920100000016"
    },

    {
      id: 2,
      name: "Mirchi Powder",
      size: "100g",
      price: 65,
      stock: 80,
      barcode: "920100000021"
    },

    {
      id: 3,
      name: "Dhaniya Powder",
      size: "100g",
      price: 55,
      stock: 95,
      barcode: "920100000026"
    },

    {
      id: 4,
      name: "Meat Masala",
      size: "50g",
      price: 90,
      stock: 40,
      barcode: "920100000002"
    }

  ])

  // ADD PRODUCT
  const addProduct = () => {

    const name = prompt("Enter Product Name")
    if (!name) return

    const size = prompt("Enter Product Size")
    if (!size) return

    const price = prompt("Enter Product Price")
    if (!price) return

    const stock = prompt("Enter Stock Quantity")
    if (!stock) return

    const barcode = prompt("Enter Barcode Number")
    if (!barcode) return

    const newProduct = {

      id: Date.now(),
      name,
      size,
      price,
      stock,
      barcode

    }

    setProducts([...products, newProduct])

  }

  // EDIT PRODUCT
  const editProduct = (id) => {

    const updatedProducts = products.map((item) => {

      if (item.id === id) {

        const newPrice = prompt(
          "Update Product Price",
          item.price
        )

        const newStock = prompt(
          "Update Stock",
          item.stock
        )

        return {

          ...item,
          price: newPrice,
          stock: newStock

        }

      }

      return item

    })

    setProducts(updatedProducts)

  }

  // DELETE PRODUCT
  const deleteProduct = (id) => {

    const filteredProducts = products.filter(
      item => item.id !== id
    )

    setProducts(filteredProducts)

  }

  return (

    <div
      style={{
        background: "#2b1308",
        minHeight: "100vh",
        padding: "40px",
        color: "white"
      }}
    >

      {/* TOP HEADER */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "40px",
          flexWrap: "wrap",
          gap: "20px"
        }}
      >

        <div>

          <h1
            style={{
              fontSize: "50px",
              fontWeight: "bold"
            }}
          >
            Product Management
          </h1>

          <p
            style={{
              color: "#f5d0a9",
              fontSize: "20px",
              marginTop: "10px"
            }}
          >
            MUKESH AND SONS MASALA UDHYOG
          </p>

        </div>

        <button
          onClick={addProduct}
          style={addBtn}
        >
          + Add Product
        </button>

      </div>

      {/* COMPANY DETAILS */}

      <div
        style={{
          background: "#5a2414",
          padding: "25px",
          borderRadius: "20px",
          marginBottom: "35px",
          border: "1px solid #8b5e3c"
        }}
      >

        <h2
          style={{
            marginBottom: "15px",
            color: "#facc15",
            fontSize: "28px"
          }}
        >
          Company Details
        </h2>

        <p style={detailText}>
          GSTIN: 23MUCPS2534K1ZA
        </p>

        <p style={detailText}>
          Address: Julwaniya Road Rajpur 451447
        </p>

        <p style={detailText}>
          Contact: 6265996333
        </p>

      </div>

      {/* PRODUCTS GRID */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "25px"
        }}
      >

        {products.map((item) => (

          <div
            key={item.id}
            style={{
              background: "#5a2414",
              padding: "25px",
              borderRadius: "20px",
              border: "1px solid #8b5e3c"
            }}
          >

            <h2
              style={{
                fontSize: "34px",
                fontWeight: "bold",
                marginBottom: "15px"
              }}
            >
              {item.name}
            </h2>

            <p style={productText}>
              Size: {item.size}
            </p>

            <p
              style={{
                fontSize: "24px",
                color: "#facc15",
                marginBottom: "10px",
                fontWeight: "bold"
              }}
            >
              ₹ {item.price}
            </p>

            <p style={productText}>
              Stock: {item.stock}
            </p>

            <p
              style={{
                letterSpacing: "2px",
                marginBottom: "20px",
                color: "#f5d0a9"
              }}
            >
              Barcode: {item.barcode}
            </p>

            <div
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap"
              }}
            >

              <button
                onClick={() => editProduct(item.id)}
                style={btn}
              >
                Edit
              </button>

              <button
                onClick={() => deleteProduct(item.id)}
                style={deleteBtn}
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>

  )

}

const addBtn = {

  background: "#facc15",
  color: "black",
  border: "none",
  padding: "15px 25px",
  borderRadius: "12px",
  fontWeight: "bold",
  cursor: "pointer",
  fontSize: "18px"

}

const btn = {

  background: "#facc15",
  color: "black",
  border: "none",
  padding: "12px 20px",
  borderRadius: "10px",
  cursor: "pointer",
  fontWeight: "bold"

}

const deleteBtn = {

  background: "#7f1d1d",
  color: "white",
  border: "none",
  padding: "12px 20px",
  borderRadius: "10px",
  cursor: "pointer",
  fontWeight: "bold"

}

const detailText = {

  fontSize: "18px",
  marginBottom: "10px",
  color: "#f5d0a9"

}

const productText = {

  fontSize: "20px",
  marginBottom: "10px"

}

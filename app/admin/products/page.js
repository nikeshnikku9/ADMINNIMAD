"use client"

import { useEffect, useState } from "react"

export default function ProductsPage() {

  const defaultProducts = [

    {
      id: 1,
      name: "Haldi Powder",
      size: "100g",
      price: 45,
      stock: 180,
      barcode: "920100000016"
    },

    {
      id: 2,
      name: "Mirchi Powder",
      size: "100g",
      price: 65,
      stock: 160,
      barcode: "920100000021"
    }

  ]

  const [products, setProducts] = useState([])

  // LOAD PRODUCTS
  useEffect(() => {

    const savedProducts =
      localStorage.getItem("nimad-products")

    if (savedProducts) {

      setProducts(JSON.parse(savedProducts))

    } else {

      setProducts(defaultProducts)

    }

  }, [])

  // SAVE PRODUCTS
  useEffect(() => {

    if (products.length > 0) {

      localStorage.setItem(
        "nimad-products",
        JSON.stringify(products)
      )

    }

  }, [products])

  // ADD PRODUCT
  const addProduct = () => {

    const name =
      prompt("Enter Product Name")

    if (!name) return

    const size =
      prompt("Enter Product Size")

    if (!size) return

    const price =
      prompt("Enter Product Price")

    if (!price) return

    const stock =
      prompt("Enter Stock Quantity")

    if (!stock) return

    const barcode =
      prompt("Enter Barcode Number")

    if (!barcode) return

    const newProduct = {

      id: Date.now(),
      name,
      size,
      price,
      stock,
      barcode

    }

    setProducts([
      ...products,
      newProduct
    ])

  }

  // EDIT PRODUCT
  const editProduct = (id) => {

    const updatedProducts =
      products.map((item) => {

        if (item.id === id) {

          const newPrice = prompt(
            "Update Price",
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

    const filteredProducts =
      products.filter(
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

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(320px,1fr))",
          gap: "25px"
        }}
      >

        {products.map((item) => (

          <div
            key={item.id}
            style={{
              background: "#5a2414",
              padding: "25px",
              borderRadius: "20px"
            }}
          >

            <h2
              style={{
                fontSize: "32px",
                marginBottom: "15px"
              }}
            >
              {item.name}
            </h2>

            <p style={text}>
              Size: {item.size}
            </p>

            <p
              style={{
                fontSize: "24px",
                color: "#facc15",
                marginBottom: "10px"
              }}
            >
              ₹ {item.price}
            </p>

            <p style={text}>
              Stock: {item.stock}
            </p>

            <p
              style={{
                color: "#f5d0a9",
                marginBottom: "20px",
                letterSpacing: "2px"
              }}
            >
              {item.barcode}
            </p>

            <div
              style={{
                display: "flex",
                gap: "12px"
              }}
            >

              <button
                onClick={() =>
                  editProduct(item.id)
                }
                style={btn}
              >
                Edit
              </button>

              <button
                onClick={() =>
                  deleteProduct(item.id)
                }
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

const text = {

  fontSize: "18px",
  marginBottom: "10px"

}

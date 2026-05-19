"use client"

import { useEffect, useState } from "react"

export default function ProductsPage() {

  const defaultProducts = [

    // PREMIUM BOX PACKAGING

    {
      id: 1,
      name: "Meat Masala",
      size: "20g",
      price: 45,
      stock: 120,
      barcode: "920100000001"
    },

    {
      id: 2,
      name: "Meat Masala",
      size: "50g",
      price: 90,
      stock: 80,
      barcode: "920100000002"
    },

    {
      id: 3,
      name: "Meat Masala",
      size: "100g",
      price: 160,
      stock: 50,
      barcode: "920100000003"
    },

    {
      id: 4,
      name: "Garam Masala",
      size: "50g",
      price: 85,
      stock: 100,
      barcode: "920100000004"
    },

    {
      id: 5,
      name: "Garam Masala",
      size: "100g",
      price: 150,
      stock: 60,
      barcode: "920100000005"
    },

    {
      id: 6,
      name: "Shahi Paneer Masala",
      size: "50g",
      price: 95,
      stock: 75,
      barcode: "920100000006"
    },

    {
      id: 7,
      name: "Shahi Paneer Masala",
      size: "100g",
      price: 170,
      stock: 45,
      barcode: "920100000007"
    },

    {
      id: 8,
      name: "Dal Bati Masala",
      size: "50g",
      price: 80,
      stock: 90,
      barcode: "920100000008"
    },

    {
      id: 9,
      name: "Dal Bati Masala",
      size: "100g",
      price: 145,
      stock: 55,
      barcode: "920100000009"
    },

    {
      id: 10,
      name: "Khada Masala",
      size: "50g",
      price: 110,
      stock: 40,
      barcode: "920100000010"
    },

    {
      id: 11,
      name: "Khada Masala",
      size: "100g",
      price: 200,
      stock: 25,
      barcode: "920100000011"
    },

    {
      id: 12,
      name: "Chicken Masala",
      size: "20g",
      price: 40,
      stock: 120,
      barcode: "920100000012"
    },

    {
      id: 13,
      name: "Chicken Masala",
      size: "50g",
      price: 85,
      stock: 80,
      barcode: "920100000013"
    },

    {
      id: 14,
      name: "Chicken Masala",
      size: "100g",
      price: 155,
      stock: 50,
      barcode: "920100000014"
    },

    // STANDARD PLASTIC PACKAGING

    {
      id: 15,
      name: "Haldi Powder",
      size: "50g",
      price: 25,
      stock: 200,
      barcode: "920100000015"
    },

    {
      id: 16,
      name: "Haldi Powder",
      size: "100g",
      price: 45,
      stock: 180,
      barcode: "920100000016"
    },

    {
      id: 17,
      name: "Haldi Powder",
      size: "200g",
      price: 80,
      stock: 140,
      barcode: "920100000017"
    },

    {
      id: 18,
      name: "Haldi Powder",
      size: "500g",
      price: 180,
      stock: 90,
      barcode: "920100000018"
    },

    {
      id: 19,
      name: "Haldi Powder",
      size: "1kg",
      price: 320,
      stock: 40,
      barcode: "920100000019"
    },

    {
      id: 20,
      name: "Mirchi Powder",
      size: "50g",
      price: 35,
      stock: 180,
      barcode: "920100000020"
    },

    {
      id: 21,
      name: "Mirchi Powder",
      size: "100g",
      price: 65,
      stock: 160,
      barcode: "920100000021"
    },

    {
      id: 22,
      name: "Mirchi Powder",
      size: "200g",
      price: 120,
      stock: 120,
      barcode: "920100000022"
    },

    {
      id: 23,
      name: "Mirchi Powder",
      size: "500g",
      price: 280,
      stock: 70,
      barcode: "920100000023"
    },

    {
      id: 24,
      name: "Mirchi Powder",
      size: "1kg",
      price: 520,
      stock: 30,
      barcode: "920100000024"
    },

    {
      id: 25,
      name: "Dhaniya Powder",
      size: "50g",
      price: 30,
      stock: 170,
      barcode: "920100000025"
    },

    {
      id: 26,
      name: "Dhaniya Powder",
      size: "100g",
      price: 55,
      stock: 150,
      barcode: "920100000026"
    },

    {
      id: 27,
      name: "Dhaniya Powder",
      size: "200g",
      price: 100,
      stock: 100,
      barcode: "920100000027"
    },

    {
      id: 28,
      name: "Dhaniya Powder",
      size: "500g",
      price: 220,
      stock: 60,
      barcode: "920100000028"
    },

    {
      id: 29,
      name: "Dhaniya Powder",
      size: "1kg",
      price: 400,
      stock: 25,
      barcode: "920100000029"
    },

    {
      id: 30,
      name: "Garam Masala",
      size: "50g",
      price: 40,
      stock: 150,
      barcode: "920100000030"
    },

    {
      id: 31,
      name: "Garam Masala",
      size: "100g",
      price: 75,
      stock: 120,
      barcode: "920100000031"
    },

    {
      id: 32,
      name: "Garam Masala",
      size: "200g",
      price: 140,
      stock: 80,
      barcode: "920100000032"
    },

    {
      id: 33,
      name: "Garam Masala",
      size: "500g",
      price: 320,
      stock: 45,
      barcode: "920100000033"
    },

    {
      id: 34,
      name: "Garam Masala",
      size: "1kg",
      price: 580,
      stock: 20,
      barcode: "920100000034"
    }

  ])

  const [products, setProducts] = useState([])

  useEffect(() => {

    const savedProducts =
      localStorage.getItem("nimad-products")

    if (savedProducts) {

      setProducts(JSON.parse(savedProducts))

    } else {

      setProducts(defaultProducts)

    }

  }, [])

  useEffect(() => {

    if (products.length > 0) {

      localStorage.setItem(
        "nimad-products",
        JSON.stringify(products)
      )

    }

  }, [products])

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

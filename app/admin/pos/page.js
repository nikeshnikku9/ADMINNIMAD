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

  const [customer,setCustomer] =
    useState({

      name: "",

      mobile: "",

      address: "",

      gst: ""

    });

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
      {
        ...found,
        qty: 1
      }
    ]);

    setBarcode("");

  };

  const updateGST = (
    index,
    value
  ) => {

    const updated =
      [...cart];

    updated[index].gst =
      Number(value);

    setCart(updated);

  };

  const subtotal =
    cart.reduce(

      (sum,item)=>

        sum +
        item.price *
        item.qty,

      0

    );

  const gstTotal =
    cart.reduce(

      (sum,item)=>

        sum +
        (
          item.price *
          item.qty *
          item.gst
        ) / 100,

      0

    );

  const grandTotal =
    subtotal + gstTotal;

  return (

    <div
      style={{
        minHeight: "100vh",
        background:
          "#2a120d",
        padding: "30px"
      }}
    >

      {/* TOP BAR */}

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
          placeholder="Enter Barcode"
          style={input}
        />

        <button
          onClick={addProduct}
          style={btn}
        >
          Add Product
        </button>

        <button
          onClick={()=>
            window.print()
          }
          style={btn}
        >
          Print Invoice
        </button>

      </div>

      {/* GST INVOICE */}

      <div
        id="invoice"
        style={{

          maxWidth: "1000px",

          margin: "auto",

          background: "white",

          padding: "40px",

          borderRadius: "15px",

          position: "relative",

          overflow: "hidden"

        }}
      >

        {/* FADED LOGO */}

        <img
          src="https://i.ibb.co/8DNnDDS7/LOGO-PNG.png"
          alt="logo"
          style={{

            position: "absolute",

            top: "50%",

            left: "50%",

            transform:
              "translate(-50%,-50%)",

            width: "350px",

            opacity: 0.06,

            zIndex: 0

          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1
          }}
        >

          {/* HEADER */}

          <div
            style={{
              display: "flex",
              justifyContent:
                "space-between",
              alignItems: "center",
              borderBottom:
                "4px solid #2d2a72",
              paddingBottom: "20px"
            }}
          >

            <div>

              <img
                src="https://i.ibb.co/8DNnDDS7/LOGO-PNG.png"
                alt="logo"
                style={{
                  width: "120px"
                }}
              />

            </div>

            <div
              style={{
                textAlign: "right",
                color: "#222"
              }}
            >

              <h2>
                MUKESH AND SONS
                MASALA UDHYOG
              </h2>

              <p>
                Julwaniya Road
                Rajpur 451447
              </p>

              <p>
                GSTIN:
                23MUCPS2534K1ZA
              </p>

              <p>
                6265996333
              </p>

            </div>

          </div>

          {/* TITLE */}

          <h1
            style={{
              textAlign: "center",
              margin: "30px 0",
              color: "#2d2a72"
            }}
          >
            GST INVOICE
          </h1>

          {/* CUSTOMER */}

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "1fr 1fr",
              gap: "20px",
              marginBottom: "30px"
            }}
          >

            <div>

              <h3>
                Buyer Details
              </h3>

              <input
                placeholder="Customer Name"
                value={customer.name}
                onChange={(e)=>
                  setCustomer({

                    ...customer,

                    name:
                      e.target.value

                  })
                }
                style={invoiceInput}
              />

              <input
                placeholder="Mobile Number"
                value={customer.mobile}
                onChange={(e)=>
                  setCustomer({

                    ...customer,

                    mobile:
                      e.target.value

                  })
                }
                style={invoiceInput}
              />

              <textarea
                placeholder="Address"
                value={customer.address}
                onChange={(e)=>
                  setCustomer({

                    ...customer,

                    address:
                      e.target.value

                  })
                }
                style={{
                  ...invoiceInput,
                  height: "80px"
                }}
              />

              <input
                placeholder="Customer GSTIN"
                value={customer.gst}
                onChange={(e)=>
                  setCustomer({

                    ...customer,

                    gst:
                      e.target.value

                  })
                }
                style={invoiceInput}
              />

            </div>

            <div>

              <h3>
                Seller Details
              </h3>

              <p>
                Nimad Zayka Spices
              </p>

              <p>
                Rajpur, Madhya Pradesh
              </p>

              <p>
                GST:
                23MUCPS2534K1ZA
              </p>

            </div>

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
                  background:
                    "#9fd2ea"
                }}
              >

                <th style={th}>
                  Item
                </th>

                <th style={th}>
                  Barcode
                </th>

                <th style={th}>
                  Qty
                </th>

                <th style={th}>
                  Price
                </th>

                <th style={th}>
                  GST %
                </th>

                <th style={th}>
                  GST Amount
                </th>

                <th style={th}>
                  Total
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
                    {item.qty}
                  </td>

                  <td style={td}>
                    ₹{item.price}
                  </td>

                  <td style={td}>

                    <input
                      type="number"
                      value={item.gst}
                      onChange={(e)=>
                        updateGST(
                          index,
                          e.target.value
                        )
                      }
                      style={{
                        width: "60px"
                      }}
                    />

                  </td>

                  <td style={td}>

                    ₹
                    {(
                      item.price *
                      item.qty *
                      item.gst
                    ) / 100}

                  </td>

                  <td style={td}>

                    ₹
                    {
                      item.price *
                      item.qty +
                      (
                        item.price *
                        item.qty *
                        item.gst
                      ) / 100
                    }

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

          {/* TOTAL */}

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
              ₹{gstTotal.toFixed(2)}
            </h3>

            <h1
              style={{
                color: "#2d2a72"
              }}
            >
              Grand Total:
              ₹{grandTotal.toFixed(2)}
            </h1>

          </div>

        </div>

      </div>

    </div>

  );

}

const input = {

  flex: 1,

  padding: "15px",

  borderRadius: "10px",

  border: "none",

  fontSize: "18px"

};

const btn = {

  background: "#f4c400",

  border: "none",

  padding: "15px 25px",

  borderRadius: "10px",

  fontWeight: "bold",

  cursor: "pointer"

};

const invoiceInput = {

  width: "100%",

  marginBottom: "12px",

  padding: "10px",

  border: "1px solid #ccc",

  borderRadius: "6px"

};

const th = {

  border: "1px solid #999",

  padding: "12px",

  fontSize: "14px"

};

const td = {

  border: "1px solid #999",

  padding: "12px",

  textAlign: "center"

};

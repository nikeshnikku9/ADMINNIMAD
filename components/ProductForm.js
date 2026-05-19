"use client";

export default function ProductForm() {

  return (

    <div
      style={{
        padding: "30px",
        background: "#4b1f14",
        borderRadius: "20px",
        color: "white"
      }}
    >

      <h1
        style={{
          fontSize: "35px",
          marginBottom: "20px"
        }}
      >
        Add Product
      </h1>

      <input
        placeholder="Product Name"
        style={{
          width: "100%",
          padding: "15px",
          marginBottom: "15px",
          borderRadius: "10px"
        }}
      />

      <input
        placeholder="Price"
        style={{
          width: "100%",
          padding: "15px",
          marginBottom: "15px",
          borderRadius: "10px"
        }}
      />

      <input
        placeholder="Barcode"
        style={{
          width: "100%",
          padding: "15px",
          marginBottom: "15px",
          borderRadius: "10px"
        }}
      />

      <button
        style={{
          padding: "15px 25px",
          background: "#f4b400",
          border: "none",
          borderRadius: "10px",
          fontWeight: "bold"
        }}
      >
        Save Product
      </button>

    </div>

  );

}

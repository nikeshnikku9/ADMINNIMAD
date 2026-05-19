"use client"

import { useState } from "react"
import QRCode from "react-qr-code"

export default function QRPage() {

  const [url, setUrl] = useState("https://nimadzayka.com")
  const [qrColor, setQrColor] = useState("#7c2d12")
  const [bgColor, setBgColor] = useState("#ffffff")

  return (

    <div
      style={{
        background: "#3b1308",
        minHeight: "100vh",
        padding: "40px",
        color: "white"
      }}
    >

      <h1
        style={{
          fontSize: "50px",
          marginBottom: "10px"
        }}
      >
        QR Generator
      </h1>

      <p
        style={{
          color: "#f5d0a9",
          marginBottom: "40px"
        }}
      >
        Generate beautiful QR codes for products, WhatsApp & more
      </p>

      <div
        style={{
          display: "flex",
          gap: "40px",
          flexWrap: "wrap"
        }}
      >

        <div
          style={{
            background: "#5b2a1d",
            padding: "30px",
            borderRadius: "20px",
            width: "400px"
          }}
        >

          <input
            value={url}
            onChange={(e)=>setUrl(e.target.value)}
            placeholder="Enter URL"
            style={{
              width: "100%",
              padding: "15px",
              marginBottom: "20px",
              borderRadius: "10px",
              border: "none",
              fontSize: "18px"
            }}
          />

          <label>QR Color</label>

          <input
            type="color"
            value={qrColor}
            onChange={(e)=>setQrColor(e.target.value)}
            style={{
              width: "100%",
              height: "50px",
              marginBottom: "20px"
            }}
          />

          <label>Background Color</label>

          <input
            type="color"
            value={bgColor}
            onChange={(e)=>setBgColor(e.target.value)}
            style={{
              width: "100%",
              height: "50px"
            }}
          />

        </div>

        <div
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "20px"
          }}
        >

          <QRCode
            value={url}
            size={300}
            fgColor={qrColor}
            bgColor={bgColor}
          />

        </div>

      </div>

    </div>

  )

}

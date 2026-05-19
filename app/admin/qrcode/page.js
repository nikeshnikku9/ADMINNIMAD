"use client";

import { useState } from "react";
import QRCode from "react-qr-code";

export default function QRCodePage() {

  const [qrValue, setQrValue] = useState(
    "https://adminnimad.vercel.app"
  );

  const [title, setTitle] = useState(
    "NIMAD ZAYKA"
  );

  const printQR = () => {

    const printContents =
      document.getElementById(
        "qr-print"
      ).innerHTML;

    const win =
      window.open("", "", "width=800,height=600");

    win.document.write(`
      <html>
        <head>
          <title>Print QR</title>
        </head>
        <body style="display:flex;justify-content:center;align-items:center;height:100vh;">
          ${printContents}
        </body>
      </html>
    `);

    win.document.close();

    win.print();

  };

  return (

    <div
      style={{
        padding: "30px",
        background: "#3d1717",
        minHeight: "100vh",
        color: "white"
      }}
    >

      <h1
        style={{
          fontSize: "42px",
          fontWeight: "bold",
          marginBottom: "30px"
        }}
      >
        QR Code Generator
      </h1>

      <div
        style={{
          background: "white",
          color: "black",
          padding: "25px",
          borderRadius: "20px",
          marginBottom: "25px"
        }}
      >

        <h2
          style={{
            marginBottom: "20px"
          }}
        >
          QR Settings
        </h2>

        <div
          style={{
            marginBottom: "20px"
          }}
        >

          <label>
            QR Title
          </label>

          <input
            value={title}
            onChange={(e)=>
              setTitle(e.target.value)
            }
            placeholder="Enter title"
            style={{
              width: "100%",
              padding: "15px",
              marginTop: "8px",
              borderRadius: "10px",
              border: "1px solid #ccc",
              fontSize: "16px"
            }}
          />

        </div>

        <div>

          <label>
            Home Layout Link / Website URL
          </label>

          <input
            value={qrValue}
            onChange={(e)=>
              setQrValue(e.target.value)
            }
            placeholder="https://yourwebsite.com"
            style={{
              width: "100%",
              padding: "15px",
              marginTop: "8px",
              borderRadius: "10px",
              border: "1px solid #ccc",
              fontSize: "16px"
            }}
          />

        </div>

      </div>

      <div
        style={{
          background: "white",
          color: "black",
          padding: "35px",
          borderRadius: "20px",
          textAlign: "center"
        }}
      >

        <div id="qr-print">

          <h2
            style={{
              fontSize: "32px",
              marginBottom: "20px"
            }}
          >
            {title}
          </h2>

          <div
            style={{
              background: "white",
              padding: "25px",
              display: "inline-block"
            }}
          >

            <QRCode
              value={qrValue}
              size={260}
            />

          </div>

          <p
            style={{
              marginTop: "20px",
              fontSize: "16px",
              wordBreak: "break-all"
            }}
          >
            {qrValue}
          </p>

          <div
            style={{
              marginTop: "25px",
              borderTop: "1px solid #ddd",
              paddingTop: "20px"
            }}
          >

            <h3>
              MUKESH AND SONS MASALA UDHYOG
            </h3>

            <p>
              GSTIN: 23MUCPS2534K1ZA
            </p>

            <p>
              Contact: 6265996333
            </p>

          </div>

        </div>

        <div
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginTop: "30px",
            flexWrap: "wrap"
          }}
        >

          <button
            onClick={printQR}
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
            Print QR
          </button>

          <button
            onClick={() =>
              window.open(qrValue, "_blank")
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
            Open Link
          </button>

        </div>

      </div>

    </div>

  );

}

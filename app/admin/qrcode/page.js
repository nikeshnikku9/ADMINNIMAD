"use client";

import QRCode from "react-qr-code";

export default function QRPage() {

  return (
    <div style={{ padding: 40 }}>

      <h1>QR Generator</h1>

      <QRCode value="https://nimadzayka.com" />

    </div>
  );

}

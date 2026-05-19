"use client";

import Barcode from "react-barcode";

export default function BarcodePage() {

  return (
    <div style={{ padding: 40 }}>

      <h1>Barcode Studio</h1>

      <Barcode value="920100000001" />

    </div>
  );

}

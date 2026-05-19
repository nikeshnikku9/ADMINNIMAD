"use client";

import { useState, useRef } from "react";

export default function BarcodeStudio() {

  const products = [

    {
      name: "HALDI POWDER 50G",
      barcode: "920100000015",
      price: "₹25"
    },

    {
      name: "HALDI POWDER 100G",
      barcode: "920100000016",
      price: "₹45"
    },

    {
      name: "MIRCHI POWDER 100G",
      barcode: "920100000021",
      price: "₹65"
    },

    {
      name: "DHANIYA POWDER 100G",
      barcode: "920100000026",
      price: "₹55"
    },

    {
      name: "MEAT MASALA 100G",
      barcode: "920100000003",
      price: "₹160"
    },

    {
      name: "CHICKEN MASALA 100G",
      barcode: "920100000014",
      price: "₹160"
    },

    {
      name: "KHADA MASALA 100G",
      barcode: "920100000011",
      price: "₹180"
    }

  ];

  const [selected, setSelected] = useState(products[0]);

  const printRef = useRef();

  const downloadPNG = () => {

    html2canvas(printRef.current).then((canvas) => {

      const link = document.createElement("a");

      link.download = `${selected.name}.png`;

      link.href = canvas.toDataURL();

      link.click();

    });

  };

  const downloadPDF = () => {

    html2canvas(printRef.current).then((canvas) => {

      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF("p", "mm", "a4");

      pdf.addImage(imgData, "PNG", 10, 10, 190, 120);

      pdf.save(`${selected.name}.pdf`);

    });

  };

  const printBarcode = () => {

    const printContents =
      printRef.current.innerHTML;

    const win = window.open();

    win.document.write(printContents);

    win.print();

    win.close();

  };

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#3b170b",
        padding: "30px",
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
        Barcode Studio
      </h1>

      <div
        style={{
          background: "#5a2d1d",
          padding: "25px",
          borderRadius: "20px",
          maxWidth: "900px"
        }}
      >

        <select
          onChange={(e)=>{

            const item = products.find(
              p => p.barcode === e.target.value
            );

            setSelected(item);

          }}
          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "10px",
            fontSize: "18px",
            marginBottom: "25px"
          }}
        >

          {products.map((item,index)=>(

            <option
              key={index}
              value={item.barcode}
            >
              {item.name}
            </option>

          ))}

        </select>

        <div
          ref={printRef}
          style={{
            background: "white",
            color: "black",
            borderRadius: "20px",
            padding: "30px"
          }}
        >

          <h2
            style={{
              textAlign: "center",
              fontSize: "35px",
              marginBottom: "10px"
            }}
          >
            {selected.name}
          </h2>

          <h3
            style={{
              textAlign: "center",
              marginBottom: "25px"
            }}
          >
            {selected.price}
          </h3>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
              gap: "2px",
              height: "180px",
              marginBottom: "20px"
            }}
          >

            {selected.barcode
              .split("")
              .map((num,index)=>(

              <div
                key={index}
                style={{

                  width:
                    index % 2 === 0
                      ? "8px"
                      : "4px",

                  height:
                    `${90 + Number(num) * 8}px`,

                  background: "black"

                }}
              />

            ))}

          </div>

          <div
            style={{
              textAlign: "center",
              fontSize: "30px",
              letterSpacing: "8px",
              fontWeight: "bold",
              marginBottom: "30px"
            }}
          >
            {selected.barcode}
          </div>

          <div
            style={{
              borderTop: "1px solid #ccc",
              paddingTop: "20px",
              textAlign: "center"
            }}
          >

            <h3>
              MUKESH AND SONS MASALA UDHYOG
            </h3>

            <p>
              Julwaniya Road Rajpur 451447
            </p>

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
            marginTop: "25px",
            flexWrap: "wrap"
          }}
        >

          <button
            onClick={downloadPNG}
            style={{
              padding: "14px 25px",
              background: "#f4b400",
              border: "none",
              borderRadius: "10px",
              fontSize: "18px",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            Download PNG
          </button>

          <button
            onClick={downloadPDF}
            style={{
              padding: "14px 25px",
              background: "#f4b400",
              border: "none",
              borderRadius: "10px",
              fontSize: "18px",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            Download PDF
          </button>

          <button
            onClick={printBarcode}
            style={{
              padding: "14px 25px",
              background: "#f4b400",
              border: "none",
              borderRadius: "10px",
              fontSize: "18px",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            Print Barcode
          </button>

        </div>

      </div>

    </div>

  );

}

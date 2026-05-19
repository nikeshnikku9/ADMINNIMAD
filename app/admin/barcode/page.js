"use client";

import { useEffect, useState, useRef } from "react";
import JsBarcode from "jsbarcode";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function BarcodePage() {

  const svgRef = useRef(null);
  const printRef = useRef(null);

  const products = [

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

  useEffect(() => {

    if (svgRef.current) {

      JsBarcode(svgRef.current, selected.barcode, {

        format: "CODE128",

        width: 3,

        height: 120,

        displayValue: true,

        fontSize: 22,

        margin: 20,

        background: "#ffffff",

        lineColor: "#000000"

      });

    }

  }, [selected]);

  const downloadPNG = async () => {

    const canvas =
      await html2canvas(printRef.current);

    const link =
      document.createElement("a");

    link.download =
      `${selected.name}.png`;

    link.href =
      canvas.toDataURL();

    link.click();

  };

  const downloadPDF = async () => {

    const canvas =
      await html2canvas(printRef.current);

    const imgData =
      canvas.toDataURL("image/png");

    const pdf =
      new jsPDF();

    pdf.addImage(
      imgData,
      "PNG",
      10,
      10,
      190,
      120
    );

    pdf.save(`${selected.name}.pdf`);

  };

  const downloadSVG = () => {

    const svgData =
      new XMLSerializer()
      .serializeToString(svgRef.current);

    const blob =
      new Blob([svgData], {
        type: "image/svg+xml"
      });

    const link =
      document.createElement("a");

    link.href =
      URL.createObjectURL(blob);

    link.download =
      `${selected.name}.svg`;

    link.click();

  };

  const printBarcode = () => {

    const printWindow =
      window.open("", "_blank");

    printWindow.document.write(
      printRef.current.innerHTML
    );

    printWindow.document.close();

    printWindow.print();

  };

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#2b0f08",
        padding: "40px",
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
          background: "#4b1f14",
          padding: "30px",
          borderRadius: "20px",
          maxWidth: "950px"
        }}
      >

        <select

          onChange={(e)=>{

            const product =
              products.find(
                p =>
                p.barcode ===
                e.target.value
              );

            setSelected(product);

          }}

          style={{

            width: "100%",

            padding: "15px",

            borderRadius: "12px",

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

            padding: "35px",

            textAlign: "center"

          }}

        >

          <h2
            style={{
              fontSize: "35px",
              marginBottom: "10px"
            }}
          >
            {selected.name}
          </h2>

          <h3
            style={{
              marginBottom: "20px"
            }}
          >
            {selected.price}
          </h3>

          <div
            style={{
              display: "flex",
              justifyContent: "center"
            }}
          >

            <svg ref={svgRef}></svg>

          </div>

          <div
            style={{
              marginTop: "20px",
              borderTop: "1px solid #ccc",
              paddingTop: "20px"
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
              padding: "14px 22px",
              background: "#f4b400",
              border: "none",
              borderRadius: "10px",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            Download PNG
          </button>

          <button
            onClick={downloadSVG}
            style={{
              padding: "14px 22px",
              background: "#f4b400",
              border: "none",
              borderRadius: "10px",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            Download SVG
          </button>

          <button
            onClick={downloadPDF}
            style={{
              padding: "14px 22px",
              background: "#f4b400",
              border: "none",
              borderRadius: "10px",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            Download PDF
          </button>

          <button
            onClick={printBarcode}
            style={{
              padding: "14px 22px",
              background: "#f4b400",
              border: "none",
              borderRadius: "10px",
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

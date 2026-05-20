"use client";

import { useState } from "react";
import BarcodeScanner from "react-qr-barcode-scanner";

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

  const [cart,setCart] = useState([]);

  const addProduct = (code) => {

    const found =
      products.find(
        p => p.barcode === code
      );

    if (!found) {

      alert("Product Not Found");

      return;

    }

    const existing =
      cart

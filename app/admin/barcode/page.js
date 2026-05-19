const [products, setProducts] = useState([

  // PREMIUM BOX PACKAGING

  {
    id: 1,
    name: "MEAT MASALA 20G",
    sku: "NZ-MM-20",
    barcode: "920100000001",
    mrp: 30,
    stock: 120,
    gst: "12%",
    category: "Premium Box Packaging"
  },

  {
    id: 2,
    name: "MEAT MASALA 50G",
    sku: "NZ-MM-50",
    barcode: "920100000002",
    mrp: 60,
    stock: 90,
    gst: "12%",
    category: "Premium Box Packaging"
  },

  {
    id: 3,
    name: "MEAT MASALA 100G",
    sku: "NZ-MM-100",
    barcode: "920100000003",
    mrp: 120,
    stock: 60,
    gst: "12%",
    category: "Premium Box Packaging"
  },

  {
    id: 4,
    name: "GARAM MASALA 50G",
    sku: "NZ-GM-50",
    barcode: "920100000004",
    mrp: 55,
    stock: 100,
    gst: "12%",
    category: "Premium Box Packaging"
  },

  {
    id: 5,
    name: "GARAM MASALA 100G",
    sku: "NZ-GM-100",
    barcode: "920100000005",
    mrp: 110,
    stock: 70,
    gst: "12%",
    category: "Premium Box Packaging"
  },

  {
    id: 6,
    name: "SHAHI PANEER MASALA 50G",
    sku: "NZ-SPM-50",
    barcode: "920100000006",
    mrp: 65,
    stock: 90,
    gst: "12%",
    category: "Premium Box Packaging"
  },

  {
    id: 7,
    name: "SHAHI PANEER MASALA 100G",
    sku: "NZ-SPM-100",
    barcode: "920100000007",
    mrp: 125,
    stock: 50,
    gst: "12%",
    category: "Premium Box Packaging"
  },

  {
    id: 8,
    name: "DAL BATI MASALA 50G",
    sku: "NZ-DBM-50",
    barcode: "920100000008",
    mrp: 50,
    stock: 80,
    gst: "12%",
    category: "Premium Box Packaging"
  },

  {
    id: 9,
    name: "DAL BATI MASALA 100G",
    sku: "NZ-DBM-100",
    barcode: "920100000009",
    mrp: 100,
    stock: 70,
    gst: "12%",
    category: "Premium Box Packaging"
  },

  {
    id: 10,
    name: "KHADA MASALA 50G",
    sku: "NZ-KM-50",
    barcode: "920100000010",
    mrp: 70,
    stock: 60,
    gst: "12%",
    category: "Premium Box Packaging"
  },

  {
    id: 11,
    name: "KHADA MASALA 100G",
    sku: "NZ-KM-100",
    barcode: "920100000011",
    mrp: 140,
    stock: 40,
    gst: "12%",
    category: "Premium Box Packaging"
  },

  {
    id: 12,
    name: "CHICKEN MASALA 20G",
    sku: "NZ-CM-20",
    barcode: "920100000012",
    mrp: 35,
    stock: 120,
    gst: "12%",
    category: "Premium Box Packaging"
  },

  {
    id: 13,
    name: "CHICKEN MASALA 50G",
    sku: "NZ-CM-50",
    barcode: "920100000013",
    mrp: 70,
    stock: 90,
    gst: "12%",
    category: "Premium Box Packaging"
  },

  {
    id: 14,
    name: "CHICKEN MASALA 100G",
    sku: "NZ-CM-100",
    barcode: "920100000014",
    mrp: 140,
    stock: 50,
    gst: "12%",
    category: "Premium Box Packaging"
  },

  // STANDARD PLASTIC PACKAGING

  {
    id: 15,
    name: "HALDI POWDER 50G",
    sku: "NZ-HP-50",
    barcode: "920100000015",
    mrp: 25,
    stock: 200,
    gst: "5%",
    category: "Standard Plastic Packaging"
  },

  {
    id: 16,
    name: "HALDI POWDER 100G",
    sku: "NZ-HP-100",
    barcode: "920100000016",
    mrp: 45,
    stock: 170,
    gst: "5%",
    category: "Standard Plastic Packaging"
  },

  {
    id: 17,
    name: "HALDI POWDER 200G",
    sku: "NZ-HP-200",
    barcode: "920100000017",
    mrp: 80,
    stock: 140,
    gst: "5%",
    category: "Standard Plastic Packaging"
  },

  {
    id: 18,
    name: "HALDI POWDER 500G",
    sku: "NZ-HP-500",
    barcode: "920100000018",
    mrp: 180,
    stock: 100,
    gst: "5%",
    category: "Standard Plastic Packaging"
  },

  {
    id: 19,
    name: "HALDI POWDER 1KG",
    sku: "NZ-HP-1KG",
    barcode: "920100000019",
    mrp: 350,
    stock: 70,
    gst: "5%",
    category: "Standard Plastic Packaging"
  },

  {
    id: 20,
    name: "LAL MIRCH POWDER 50G",
    sku: "NZ-LM-50",
    barcode: "920100000020",
    mrp: 35,
    stock: 180,
    gst: "5%",
    category: "Standard Plastic Packaging"
  },

  {
    id: 21,
    name: "LAL MIRCH POWDER 100G",
    sku: "NZ-LM-100",
    barcode: "920100000021",
    mrp: 70,
    stock: 160,
    gst: "5%",
    category: "Standard Plastic Packaging"
  },

  {
    id: 22,
    name: "DHANIYA POWDER 100G",
    sku: "NZ-DP-100",
    barcode: "920100000022",
    mrp: 40,
    stock: 150,
    gst: "5%",
    category: "Standard Plastic Packaging"
  },

  {
    id: 23,
    name: "DHANIYA POWDER 200G",
    sku: "NZ-DP-200",
    barcode: "920100000023",
    mrp: 75,
    stock: 110,
    gst: "5%",
    category: "Standard Plastic Packaging"
  },

  {
    id: 24,
    name: "GARAM MASALA 200G",
    sku: "NZ-GM-200",
    barcode: "920100000024",
    mrp: 160,
    stock: 90,
    gst: "12%",
    category: "Standard Plastic Packaging"
  }

]);

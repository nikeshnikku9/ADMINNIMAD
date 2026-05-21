"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  AlertTriangle,
  BarChart3,
  Boxes,
  Camera,
  Download,
  Edit3,
  FileDown,
  IndianRupee,
  Package,
  Plus,
  Printer,
  RefreshCcw,
  Save,
  Search,
  Trash2,
  X,
} from "lucide-react";

const Barcode = dynamic(() => import("react-barcode"), { ssr: false });

const emptyForm = {
  name: "",
  sku: "",
  barcode: "",
  category: "Premium Box Packaging",
  unit: "pcs",
  stock: 0,
  lowStockThreshold: 10,
  purchasePrice: 0,
  sellingPrice: 0,
  gst: 5,
  image: "/placeholder-spice.svg",
  description: "",
};

const categories = [
  "all",
  "Premium Box Packaging",
  "Standard Plastic Packaging",
  "Raw Material",
  "Combo Pack",
  "Other",
];

const stockTypes = [
  { value: "add", label: "Add Stock" },
  { value: "remove", label: "Remove Stock" },
  { value: "damage", label: "Damage Stock" },
  { value: "adjustment", label: "Manual Adjustment" },
];

function currency(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Number(value || 0));
}

function formatDate(value) {
  if (!value) {
    return "-";
  }

  return new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

function statusLabel(status) {
  if (status === "out-of-stock") {
    return "Out of Stock";
  }

  if (status === "low-stock") {
    return "Low Stock";
  }

  return "In Stock";
}

function downloadTextFile(filename, content, type = "text/csv;charset=utf-8;") {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

export default function InventoryPage() {
  const [products, setProducts] = useState([]);
  const [summary, setSummary] = useState(null);
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [status, setStatus] = useState("all");
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 1,
  });
  const [formOpen, setFormOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [stockProduct, setStockProduct] = useState(null);
  const [stockForm, setStockForm] = useState({
    type: "add",
    quantity: 1,
    reason: "",
    supplierNote: "",
    invoiceRef: "",
    adminName: "Inventory Staff",
  });
  const [scannerOpen, setScannerOpen] = useState(false);
  const [scannedProduct, setScannedProduct] = useState(null);
  const [barcodeProduct, setBarcodeProduct] = useState(null);
  const barcodeRef = useRef(null);

  const query = useMemo(() => {
    const params = new URLSearchParams({
      search,
      category,
      status,
      page: String(page),
      limit: "10",
    });

    return params.toString();
  }, [search, category, status, page]);

  async function loadInventory() {
    setLoading(true);
    setMessage("");

    try {
      const [productRes, summaryRes, logsRes] = await Promise.all([
        fetch(`/api/products?${query}`, { cache: "no-store" }),
        fetch("/api/inventory/summary", { cache: "no-store" }),
        fetch("/api/inventory/logs?limit=80", { cache: "no-store" }),
      ]);

      const productData = await productRes.json();
      const summaryData = await summaryRes.json();
      const logsData = await logsRes.json();

      if (!productRes.ok) {
        throw new Error(productData.error || "Products load failed.");
      }

      if (!summaryRes.ok) {
        throw new Error(summaryData.error || "Summary load failed.");
      }

      if (!logsRes.ok) {
        throw new Error(logsData.error || "Logs load failed.");
      }

      setProducts(productData.products || []);
      setPagination(productData.pagination || pagination);
      setSummary(summaryData);
      setLogs(logsData.logs || []);
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const timer = setTimeout(loadInventory, 250);
    return () => clearTimeout(timer);
  }, [query]);

  function openCreateForm() {
    setEditingProduct(null);
    setForm({
      ...emptyForm,
      barcode: `92${Math.floor(10000000000 + Math.random() * 89999999999)}`,
      sku: `NZ-${Date.now().toString().slice(-6)}`,
    });
    setFormOpen(true);
  }

  function openEditForm(product) {
    setEditingProduct(product);
    setForm({
      name: product.name || "",
      sku: product.sku || "",
      barcode: product.barcode || "",
      category: product.category || "Other",
      unit: product.unit || "pcs",
      stock: product.stock || 0,
      lowStockThreshold: product.lowStockThreshold || 10,
      purchasePrice: product.purchasePrice || 0,
      sellingPrice: product.sellingPrice || 0,
      gst: product.gst || 0,
      image: product.image || "/placeholder-spice.svg",
      description: product.description || "",
    });
    setFormOpen(true);
  }

  async function saveProduct(event) {
    event.preventDefault();
    setSaving(true);
    setMessage("");

    try {
      const url = editingProduct ? `/api/products/${editingProduct._id}` : "/api/products";
      const method = editingProduct ? "PUT" : "POST";
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Product save failed.");
      }

      setFormOpen(false);
      setMessage(editingProduct ? "Product updated successfully." : "Product created successfully.");
      await loadInventory();
    } catch (error) {
      setMessage(error.message);
    } finally {
      setSaving(false);
    }
  }

  async function deleteProduct(product) {
    const confirmDelete = window.confirm(
      `Delete ${product.name}? Stock logs for this product will also be removed.`
    );

    if (!confirmDelete) {
      return;
    }

    setSaving(true);
    setMessage("");

    try {
      const response = await fetch(`/api/products/${product._id}`, { method: "DELETE" });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Product delete failed.");
      }

      setMessage("Product deleted successfully.");
      await loadInventory();
    } catch (error) {
      setMessage(error.message);
    } finally {
      setSaving(false);
    }
  }

  async function updateStock(event) {
    event.preventDefault();

    if (!stockProduct) {
      return;
    }

    setSaving(true);
    setMessage("");

    try {
      const response = await fetch("/api/inventory/stock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...stockForm,
          productId: stockProduct._id,
        }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Stock update failed.");
      }

      setStockProduct(null);
      setStockForm({
        type: "add",
        quantity: 1,
        reason: "",
        supplierNote: "",
        invoiceRef: "",
        adminName: "Inventory Staff",
      });
      setMessage("Stock updated and history saved.");
      await loadInventory();
    } catch (error) {
      setMessage(error.message);
    } finally {
      setSaving(false);
    }
  }

  function exportCSV() {
    const headers = [
      "Product Name",
      "SKU",
      "Barcode",
      "Category",
      "Stock",
      "Unit",
      "Purchase Price",
      "Selling Price",
      "GST",
      "Status",
      "Last Updated",
    ];
    const rows = products.map((product) => [
      product.name,
      product.sku,
      product.barcode,
      product.category,
      product.stock,
      product.unit,
      product.purchasePrice,
      product.sellingPrice,
      product.gst,
      statusLabel(product.status),
      formatDate(product.updatedAt),
    ]);
    const csv = [headers, ...rows]
      .map((row) => row.map((cell) => `"${String(cell ?? "").replaceAll('"', '""')}"`).join(","))
      .join("\n");

    downloadTextFile("nimad-zayka-inventory.csv", csv);
  }

  async function exportExcel() {
    const headers = [
      "Product Name",
      "SKU",
      "Barcode",
      "Category",
      "Stock",
      "Unit",
      "Purchase Price",
      "Selling Price",
      "GST",
      "Status",
      "Last Updated",
    ];
    const bodyRows = products
      .map(
        (product) => `
          <tr>
            <td>${product.name}</td>
            <td>${product.sku}</td>
            <td>${product.barcode}</td>
            <td>${product.category}</td>
            <td>${product.stock}</td>
            <td>${product.unit}</td>
            <td>${product.purchasePrice}</td>
            <td>${product.sellingPrice}</td>
            <td>${product.gst}%</td>
            <td>${statusLabel(product.status)}</td>
            <td>${formatDate(product.updatedAt)}</td>
          </tr>`
      )
      .join("");
    const html = `
      <html>
        <head><meta charset="utf-8" /></head>
        <body>
          <table border="1">
            <thead><tr>${headers.map((header) => `<th>${header}</th>`).join("")}</tr></thead>
            <tbody>${bodyRows}</tbody>
          </table>
        </body>
      </html>
    `;

    downloadTextFile(
      "nimad-zayka-inventory.xls",
      html,
      "application/vnd.ms-excel;charset=utf-8;"
    );
  }

  async function exportPDF() {
    const rows = products
      .map(
        (product, index) => `
          <tr>
            <td>${index + 1}</td>
            <td>${product.name}</td>
            <td>${product.sku}</td>
            <td>${product.barcode}</td>
            <td>${product.stock} ${product.unit}</td>
            <td>${currency(product.purchasePrice)}</td>
            <td>${currency(product.sellingPrice)}</td>
            <td>${product.gst}%</td>
            <td>${statusLabel(product.status)}</td>
          </tr>`
      )
      .join("");
    const report = window.open("", "_blank", "width=1000,height=800");

    report.document.write(`
      <html>
        <head>
          <title>Nimad Zayka Inventory PDF</title>
          <style>
            body{font-family:Arial,sans-serif;margin:0;color:#1f1208;}
            header{background:#2a120d;color:#fff7d6;padding:18mm 14mm;}
            h1{margin:0;color:#facc15;font-size:24px;}
            p{margin:5px 0 0;}
            main{padding:12mm 14mm;}
            table{width:100%;border-collapse:collapse;}
            th,td{border:1px solid #2a120d;padding:7px;font-size:11px;text-align:left;}
            th{background:#f5e5bf;}
            @page{size:A4;margin:10mm;}
          </style>
        </head>
        <body>
          <header>
            <h1>NIMAD ZAYKA SPICES</h1>
            <p>Inventory Stock Report - ${formatDate(new Date())}</p>
          </header>
          <main>
            <table>
              <thead>
                <tr>
                  <th>#</th><th>Product</th><th>SKU</th><th>Barcode</th><th>Stock</th>
                  <th>Purchase</th><th>Selling</th><th>GST</th><th>Status</th>
                </tr>
              </thead>
              <tbody>${rows}</tbody>
            </table>
          </main>
        </body>
      </html>
    `);
    report.document.close();
    report.focus();
    report.print();
  }

  function exportLogsCSV() {
    const headers = [
      "Date",
      "Product",
      "SKU",
      "Barcode",
      "Type",
      "Quantity",
      "Previous Stock",
      "New Stock",
      "Admin",
      "Reason",
      "Supplier Note",
      "Invoice Ref",
    ];
    const rows = logs.map((log) => [
      formatDate(log.createdAt),
      log.productName,
      log.sku,
      log.barcode,
      log.type,
      log.quantity,
      log.previousStock,
      log.newStock,
      log.adminName,
      log.reason,
      log.supplierNote,
      log.invoiceRef,
    ]);
    const csv = [headers, ...rows]
      .map((row) => row.map((cell) => `"${String(cell ?? "").replaceAll('"', '""')}"`).join(","))
      .join("\n");

    downloadTextFile("nimad-zayka-stock-history.csv", csv);
  }

  async function handleDetectedBarcode(code) {
    if (!code) {
      return;
    }

    let product = products.find((item) => item.barcode === code);

    if (!product) {
      const response = await fetch(`/api/products?search=${encodeURIComponent(code)}&limit=10`, {
        cache: "no-store",
      });
      const data = await response.json();
      product = (data.products || []).find((item) => item.barcode === code);
    }

    if (product) {
      setScannedProduct(product);
      setStockProduct(product);
      setScannerOpen(false);
      setMessage(`Scanned product opened: ${product.name}`);
    } else {
      setMessage(`Barcode ${code} not found in current inventory page. Search all products by barcode.`);
      setSearch(code);
      setScannerOpen(false);
    }
  }

  function printBarcode() {
    window.print();
  }

  function downloadBarcode() {
    const svg = barcodeRef.current?.querySelector("svg");

    if (!svg || !barcodeProduct) {
      return;
    }

    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const image = new Image();

    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;
      ctx.drawImage(image, 0, 0);
      const link = document.createElement("a");
      link.download = `${barcodeProduct.sku}-barcode.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    };

    image.src = `data:image/svg+xml;base64,${window.btoa(svgData)}`;
  }

  const maxCategoryStock = Math.max(1, ...(summary?.categoryStock || []).map((item) => item.stock));

  return (
    <main className="inventory-page">
      <section className="inventory-hero">
        <div>
          <p className="eyebrow">Nimad Zayka ERP</p>
          <h1>Inventory & Stock Management</h1>
          <p className="hero-copy">
            Live stock control, barcode workflow, GST invoice deduction, low stock alerts and export-ready reports.
          </p>
        </div>

        <div className="hero-actions no-print">
          <button className="gold-btn" onClick={openCreateForm}>
            <Plus size={18} />
            Add Product
          </button>
          <button className="ghost-btn" onClick={() => setScannerOpen(true)}>
            <Camera size={18} />
            Scan Barcode
          </button>
          <button className="ghost-btn" onClick={loadInventory}>
            <RefreshCcw size={18} />
            Refresh
          </button>
        </div>
      </section>

      {message && <div className="message">{message}</div>}

      <section className="metric-grid">
        <MetricCard icon={<Package />} label="Total Products" value={summary?.cards?.totalProducts || 0} />
        <MetricCard icon={<Boxes />} label="Total Stock" value={summary?.cards?.totalStock || 0} />
        <MetricCard icon={<AlertTriangle />} label="Low Stock" value={summary?.cards?.lowStock || 0} danger />
        <MetricCard icon={<IndianRupee />} label="Inventory Value" value={currency(summary?.cards?.inventoryValue || 0)} />
      </section>

      <section className="analytics-grid">
        <div className="panel">
          <div className="panel-title">
            <BarChart3 size={20} />
            Category Stock Analytics
          </div>
          <div className="bar-list">
            {(summary?.categoryStock || []).map((item) => (
              <div className="bar-row" key={item.category}>
                <div className="bar-head">
                  <span>{item.category}</span>
                  <strong>{item.stock}</strong>
                </div>
                <div className="bar-track">
                  <div className="bar-fill" style={{ width: `${(item.stock / maxCategoryStock) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="panel">
          <div className="panel-title">
            <AlertTriangle size={20} />
            Stock Status
          </div>
          <div className="status-donut">
            <div>
              <span className="dot ok" /> In Stock: {summary?.stockStatus?.["in-stock"] || 0}
            </div>
            <div>
              <span className="dot warn" /> Low Stock: {summary?.stockStatus?.["low-stock"] || 0}
            </div>
            <div>
              <span className="dot danger" /> Out of Stock: {summary?.stockStatus?.["out-of-stock"] || 0}
            </div>
          </div>
        </div>
      </section>

      <section className="panel">
        <div className="table-toolbar no-print">
          <div className="search-box">
            <Search size={18} />
            <input
              value={search}
              onChange={(event) => {
                setPage(1);
                setSearch(event.target.value);
              }}
              placeholder="Search product, SKU, barcode or category"
            />
          </div>

          <select
            value={category}
            onChange={(event) => {
              setPage(1);
              setCategory(event.target.value);
            }}
          >
            {categories.map((item) => (
              <option value={item} key={item}>
                {item === "all" ? "All Categories" : item}
              </option>
            ))}
          </select>

          <select
            value={status}
            onChange={(event) => {
              setPage(1);
              setStatus(event.target.value);
            }}
          >
            <option value="all">All Status</option>
            <option value="in-stock">In Stock</option>
            <option value="low-stock">Low Stock</option>
            <option value="out-of-stock">Out of Stock</option>
          </select>

          <button className="ghost-btn small" onClick={exportCSV}>
            <Download size={16} />
            CSV
          </button>
          <button className="ghost-btn small" onClick={exportExcel}>
            <FileDown size={16} />
            Excel
          </button>
          <button className="ghost-btn small" onClick={exportPDF}>
            <Printer size={16} />
            PDF
          </button>
        </div>

        <div className="table-wrap">
          <table className="inventory-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Product Name</th>
                <th>SKU</th>
                <th>Barcode</th>
                <th>Category</th>
                <th>Stock</th>
                <th>Unit</th>
                <th>Purchase</th>
                <th>Selling</th>
                <th>GST</th>
                <th>Status</th>
                <th>Last Updated</th>
                <th className="no-print">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="13" className="empty-cell">
                    Loading inventory...
                  </td>
                </tr>
              ) : products.length === 0 ? (
                <tr>
                  <td colSpan="13" className="empty-cell">
                    No products found.
                  </td>
                </tr>
              ) : (
                products.map((product) => (
                  <tr key={product._id}>
                    <td>
                      <img className="product-image" src={product.image || "/placeholder-spice.svg"} alt={product.name} />
                    </td>
                    <td>
                      <strong>{product.name}</strong>
                      <span className="description-line">{product.description}</span>
                    </td>
                    <td>{product.sku}</td>
                    <td>{product.barcode}</td>
                    <td>{product.category}</td>
                    <td>
                      <strong>{product.stock}</strong>
                    </td>
                    <td>{product.unit}</td>
                    <td>{currency(product.purchasePrice)}</td>
                    <td>{currency(product.sellingPrice)}</td>
                    <td>{product.gst}%</td>
                    <td>
                      <span className={`status-badge ${product.status}`}>{statusLabel(product.status)}</span>
                    </td>
                    <td>{formatDate(product.updatedAt)}</td>
                    <td className="action-cell no-print">
                      <button title="Update stock" onClick={() => setStockProduct(product)}>
                        <Boxes size={16} />
                      </button>
                      <button title="Edit product" onClick={() => openEditForm(product)}>
                        <Edit3 size={16} />
                      </button>
                      <button title="Barcode" onClick={() => setBarcodeProduct(product)}>
                        <BarChart3 size={16} />
                      </button>
                      <button title="Delete product" onClick={() => deleteProduct(product)}>
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="pagination no-print">
          <button disabled={page <= 1} onClick={() => setPage((value) => Math.max(1, value - 1))}>
            Previous
          </button>
          <span>
            Page {pagination.page} of {pagination.totalPages} ({pagination.total} products)
          </span>
          <button
            disabled={page >= pagination.totalPages}
            onClick={() => setPage((value) => Math.min(pagination.totalPages, value + 1))}
          >
            Next
          </button>
        </div>
      </section>

      <section className="panel">
        <div className="table-toolbar">
          <div className="panel-title">Recent Stock History</div>
          <button className="ghost-btn small no-print" onClick={exportLogsCSV}>
            <Download size={16} />
            Export Logs
          </button>
        </div>

        <div className="log-list">
          {logs.slice(0, 12).map((log) => (
            <div className="log-row" key={log._id}>
              <div>
                <strong>{log.productName}</strong>
                <span>{log.reason}</span>
              </div>
              <div>
                <b>{log.type}</b> {log.quantity} units
              </div>
              <div>
                {log.previousStock} to {log.newStock}
              </div>
              <div>{log.adminName}</div>
              <div>{formatDate(log.createdAt)}</div>
            </div>
          ))}
        </div>
      </section>

      {formOpen && (
        <Modal title={editingProduct ? "Edit Product" : "Add Product"} onClose={() => setFormOpen(false)}>
          <form className="form-grid" onSubmit={saveProduct}>
            <Field label="Product Name" value={form.name} onChange={(value) => setForm({ ...form, name: value })} required />
            <Field label="SKU" value={form.sku} onChange={(value) => setForm({ ...form, sku: value })} required />
            <Field label="Barcode" value={form.barcode} onChange={(value) => setForm({ ...form, barcode: value })} required />
            <label>
              Category
              <select value={form.category} onChange={(event) => setForm({ ...form, category: event.target.value })}>
                {categories.filter((item) => item !== "all").map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
            <Field label="Unit" value={form.unit} onChange={(value) => setForm({ ...form, unit: value })} />
            <Field label="Stock" type="number" value={form.stock} onChange={(value) => setForm({ ...form, stock: value })} />
            <Field
              label="Low Stock Threshold"
              type="number"
              value={form.lowStockThreshold}
              onChange={(value) => setForm({ ...form, lowStockThreshold: value })}
            />
            <Field
              label="Purchase Price"
              type="number"
              value={form.purchasePrice}
              onChange={(value) => setForm({ ...form, purchasePrice: value })}
            />
            <Field
              label="Selling Price"
              type="number"
              value={form.sellingPrice}
              onChange={(value) => setForm({ ...form, sellingPrice: value })}
            />
            <Field label="GST %" type="number" value={form.gst} onChange={(value) => setForm({ ...form, gst: value })} />
            <Field label="Image URL" value={form.image} onChange={(value) => setForm({ ...form, image: value })} />
            <label className="full">
              Description
              <textarea value={form.description} onChange={(event) => setForm({ ...form, description: event.target.value })} />
            </label>
            <button className="gold-btn full" disabled={saving}>
              <Save size={18} />
              {saving ? "Saving..." : "Save Product"}
            </button>
          </form>
        </Modal>
      )}

      {stockProduct && (
        <Modal title={`Update Stock: ${stockProduct.name}`} onClose={() => setStockProduct(null)}>
          <form className="form-grid" onSubmit={updateStock}>
            <div className="stock-current full">
              Current Stock: <strong>{stockProduct.stock}</strong> {stockProduct.unit}
            </div>
            <label>
              Update Type
              <select value={stockForm.type} onChange={(event) => setStockForm({ ...stockForm, type: event.target.value })}>
                {stockTypes.map((item) => (
                  <option value={item.value} key={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </label>
            <Field
              label={stockForm.type === "adjustment" ? "Set Final Stock To" : "Quantity"}
              type="number"
              value={stockForm.quantity}
              onChange={(value) => setStockForm({ ...stockForm, quantity: value })}
              required
            />
            <Field label="Admin Name" value={stockForm.adminName} onChange={(value) => setStockForm({ ...stockForm, adminName: value })} />
            <Field
              label="Invoice Reference"
              value={stockForm.invoiceRef}
              onChange={(value) => setStockForm({ ...stockForm, invoiceRef: value })}
            />
            <label className="full">
              Reason
              <textarea
                value={stockForm.reason}
                onChange={(event) => setStockForm({ ...stockForm, reason: event.target.value })}
                placeholder="Example: Purchase from supplier, damaged during transport, stock correction"
              />
            </label>
            <label className="full">
              Supplier Notes
              <textarea
                value={stockForm.supplierNote}
                onChange={(event) => setStockForm({ ...stockForm, supplierNote: event.target.value })}
              />
            </label>
            <button className="gold-btn full" disabled={saving}>
              <Save size={18} />
              {saving ? "Updating..." : "Update Stock"}
            </button>
          </form>
        </Modal>
      )}

      {scannerOpen && (
        <Modal title="Camera Barcode Scanner" onClose={() => setScannerOpen(false)}>
          <BrowserBarcodeScanner onDetected={handleDetectedBarcode} />
        </Modal>
      )}

      {barcodeProduct && (
        <Modal title={`Barcode: ${barcodeProduct.name}`} onClose={() => setBarcodeProduct(null)}>
          <div className="barcode-card" ref={barcodeRef}>
            <h3>{barcodeProduct.name}</h3>
            <p>{barcodeProduct.sku}</p>
            <Barcode value={barcodeProduct.barcode} width={2} height={90} fontSize={16} />
          </div>
          <div className="modal-actions">
            <button className="gold-btn" onClick={printBarcode}>
              <Printer size={18} />
              Print
            </button>
            <button className="ghost-btn" onClick={downloadBarcode}>
              <Download size={18} />
              Download PNG
            </button>
          </div>
        </Modal>
      )}
    </main>
  );
}

function MetricCard({ icon, label, value, danger }) {
  return (
    <div className={`metric-card ${danger ? "danger-card" : ""}`}>
      <div className="metric-icon">{icon}</div>
      <div>
        <span>{label}</span>
        <strong>{value}</strong>
      </div>
    </div>
  );
}

function Field({ label, value, onChange, type = "text", required = false }) {
  return (
    <label>
      {label}
      <input type={type} value={value} onChange={(event) => onChange(event.target.value)} required={required} />
    </label>
  );
}

function Modal({ title, children, onClose }) {
  return (
    <div className="modal-backdrop no-print">
      <div className="modal">
        <div className="modal-header">
          <h2>{title}</h2>
          <button onClick={onClose} title="Close">
            <X size={20} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

function BrowserBarcodeScanner({ onDetected }) {
  const videoRef = useRef(null);
  const [error, setError] = useState("");
  const [manualCode, setManualCode] = useState("");

  useEffect(() => {
    let stream;
    let frameId;
    let stopped = false;

    async function startScanner() {
      if (!("BarcodeDetector" in window)) {
        setError("Camera barcode scanner is not supported in this browser. Use Chrome or enter barcode manually.");
        return;
      }

      if (!navigator.mediaDevices?.getUserMedia) {
        setError("Camera access is not available. Enter barcode manually.");
        return;
      }

      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "environment" },
          audio: false,
        });

        const video = videoRef.current;
        video.srcObject = stream;
        await video.play();

        const detector = new window.BarcodeDetector({
          formats: ["ean_13", "ean_8", "code_128", "code_39", "upc_a", "upc_e", "qr_code"],
        });

        async function scanFrame() {
          if (stopped) {
            return;
          }

          try {
            if (video.readyState >= 2) {
              const results = await detector.detect(video);
              const code = results?.[0]?.rawValue;

              if (code) {
                stopped = true;
                onDetected(code);
                return;
              }
            }
          } catch {
            setError("Scanner could not read this frame. Keep barcode inside camera box.");
          }

          frameId = requestAnimationFrame(scanFrame);
        }

        scanFrame();
      } catch {
        setError("Camera permission denied. Allow camera access or enter barcode manually.");
      }
    }

    startScanner();

    return () => {
      stopped = true;
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [onDetected]);

  function submitManual(event) {
    event.preventDefault();
    onDetected(manualCode.trim());
  }

  return (
    <div className="scanner-panel">
      <div className="scanner-box">
        <video ref={videoRef} muted playsInline />
      </div>
      {error && <div className="message">{error}</div>}
      <form className="manual-scan" onSubmit={submitManual}>
        <input
          value={manualCode}
          onChange={(event) => setManualCode(event.target.value)}
          placeholder="Enter barcode number manually"
        />
        <button className="gold-btn">Open Product</button>
      </form>
    </div>
  );
}

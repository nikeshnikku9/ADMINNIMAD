'use client';

import { useEffect, useState } from 'react';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  // LOAD PRODUCTS
  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(Array.isArray(data) ? data : []);
      });
  }, []);

  // ADD PRODUCT
  const addProduct = async () => {
    const res = await fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Jeera Powder',
        slug: 'jeera-powder',
        price: 80,
        barcode: '9201234567899',
      }),
    });

    const data = await res.json();

    setProducts((prev) => [...prev, data]);
  };

  // DELETE PRODUCT
  const deleteProduct = (id) => {
    const updated = products.filter((p) => p.id !== id);
    setProducts(updated);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#2b1810',
        color: 'white',
        padding: '40px',
      }}
    >
      {/* TOP BAR */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '40px',
        }}
      >
        <div>
          <h1
            style={{
              fontSize: '42px',
              marginBottom: '10px',
            }}
          >
            Product Catalog
          </h1>

          <p style={{ color: '#c9b09b' }}>
            Manage your spice collection
          </p>
        </div>

        <button
          onClick={addProduct}
          style={{
            background: '#f0b400',
            color: '#000',
            border: 'none',
            padding: '14px 22px',
            borderRadius: '14px',
            fontWeight: '700',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          + Add Product
        </button>
      </div>

      {/* PRODUCTS GRID */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
          gap: '20px',
        }}
      >
        {products.map((p) => (
          <div
            key={p.id}
            style={{
              background: '#3a2218',
              border: '1px solid #5a3a2c',
              borderRadius: '18px',
              padding: '20px',
            }}
          >
            {/* IMAGE */}
            <div
              style={{
                width: '80px',
                height: '80px',
                background: '#7a2e1f',
                borderRadius: '16px',
                marginBottom: '20px',
              }}
            />

            {/* PRODUCT INFO */}
            <h2
              style={{
                fontSize: '24px',
                marginBottom: '5px',
              }}
            >
              {p.name}
            </h2>

            <p
              style={{
                color: '#c9b09b',
                marginBottom: '10px',
              }}
            >
              /product/{p.slug}
            </p>

            <div
              style={{
                color: '#facc15',
                fontWeight: '700',
                fontSize: '18px',
              }}
            >
              ₹{p.price}
            </div>

            <div
              style={{
                marginTop: '8px',
                color: '#e7d3b7',
                fontSize: '14px',
              }}
            >
              Barcode: {p.barcode}
            </div>

            {/* BUTTONS */}
            <div
              style={{
                display: 'flex',
                gap: '10px',
                marginTop: '25px',
                flexWrap: 'wrap',
              }}
            >
              <button style={btn}>View</button>

              <button style={btn}>Edit</button>

              <button style={btn}>Copy</button>

              <button
                style={deleteBtn}
                onClick={() => deleteProduct(p.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const btn = {
  padding: '10px 16px',
  borderRadius: '10px',
  border: 'none',
  background: '#f5f1e8',
  cursor: 'pointer',
  fontWeight: '600',
};

const deleteBtn = {
  padding: '10px 16px',
  borderRadius: '10px',
  border: 'none',
  background: '#7f1d1d',
  color: 'white',
  cursor: 'pointer',
  fontWeight: '600',
};

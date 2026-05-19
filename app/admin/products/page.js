'use client';

import { useEffect, useState } from 'react';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts([
      {
        id: 1,
        name: 'Haldi Powder',
        slug: 'haldi-powder',
        price: 70,
        barcode: '9201234567890',
      },
      {
        id: 2,
        name: 'Lal Mirch Powder',
        slug: 'lal-mirch-powder',
        price: 90,
        barcode: '9201234567891',
      },
      {
        id: 3,
        name: 'Dhaniya Powder',
        slug: 'dhaniya-powder',
        price: 60,
        barcode: '9201234567892',
      },
    ]);
  }, []);

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#2b1810',
        color: 'white',
        padding: '40px',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '30px',
        }}
      >
        <div>
          <h1 style={{ fontSize: '42px' }}>Product Catalog</h1>
          <p style={{ color: '#c9b09b' }}>
            Manage your spice collection
          </p>
        </div>

        <button
          style={{
            background: '#f0b400',
            color: '#000',
            border: 'none',
            padding: '14px 20px',
            borderRadius: '12px',
            fontWeight: '700',
            cursor: 'pointer',
          }}
        >
          + Add Product
        </button>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3,1fr)',
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
            <div
              style={{
                width: '70px',
                height: '70px',
                background: '#6b1d14',
                borderRadius: '15px',
                marginBottom: '20px',
              }}
            />

            <h2 style={{ fontSize: '24px' }}>{p.name}</h2>

            <p style={{ color: '#d8b892' }}>
              /product/{p.slug}
            </p>

            <div style={{ marginTop: '10px' }}>
              ₹{p.price}
            </div>

            <div
              style={{
                marginTop: '10px',
                color: '#facc15',
                fontSize: '14px',
              }}
            >
              {p.barcode}
            </div>

            <div
              style={{
                display: 'flex',
                gap: '10px',
                marginTop: '20px',
              }}
            >
              <button style={btn}>View</button>
              <button style={btn}>Edit</button>
              <button style={btn}>Copy</button>
              <button style={deleteBtn}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const btn = {
  padding: '10px 14px',
  borderRadius: '10px',
  border: 'none',
  background: '#f5f1e8',
  cursor: 'pointer',
  fontWeight: '600',
};

const deleteBtn = {
  padding: '10px 14px',
  borderRadius: '10px',
  border: 'none',
  background: '#7f1d1d',
  color: 'white',
  cursor: 'pointer',
  fontWeight: '600',
};

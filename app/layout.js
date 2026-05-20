export const metadata = {
  title: "Nimad Zayka Spices",
  description: "Premium Indian Spices"
};

import "./globals.css";

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          fontFamily: "Arial, sans-serif",
          background: "#1a0d08"
        }}
      >
        {children}
      </body>
    </html>
  );
}

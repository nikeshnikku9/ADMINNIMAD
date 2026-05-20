import './globals.css'

export const metadata = {
  title: 'Nimad Zayka Spices',
  description: 'Premium Indian Spices',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: '#1a120b',
          color: 'white',
        }}
      >
        {children}
      </body>
    </html>
  )
}

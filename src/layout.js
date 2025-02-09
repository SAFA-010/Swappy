export default function Layout({ children }) {
    return (
      <html lang="en">
        <body>
          <nav className="bg-blue-600 text-white p-4">
            <h1 className="text-lg">Product Swap</h1>
          </nav>
          <main className="p-6">{children}</main>
        </body>
      </html>
    );
  }
  
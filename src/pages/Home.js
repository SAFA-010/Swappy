import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <div>
      <h1>Product Swap System</h1>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            {product.name} - Wants: {product.desiredSwap}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;

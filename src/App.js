import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [desiredSwap, setDesiredSwap] = useState('');
  const [products, setProducts] = useState([]);

  // Handle product addition
  const handleAddProduct = () => {
    if (productName.trim() === '' || desiredSwap.trim() === '') {
      alert('Product name and desired swap item are required!');
      return;
    }

    const newProduct = {
      name: productName,
      description: productDescription,
      desiredSwap: desiredSwap,
    };

    // Send the product data to the backend
    axios.post('http://localhost:5000/api/products', newProduct)
      .then((response) => {
        setProducts([...products, response.data]); // Add the new product to the list
        setProductName('');
        setProductDescription('');
        setDesiredSwap('');
      })
      .catch((error) => {
        console.error('There was an error adding the product:', error);
      });
  };

  // Fetch products from the backend
  const fetchProducts = () => {
    axios.get('http://localhost:5000/api/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the products:', error);
      });
  };

  // Handle finding a match
  const handleFindMatch = (item) => {
    axios.get(`http://localhost:5000/api/products/match/${item}`)
      .then((response) => {
        setProducts(response.data); // Display only the matching products
      })
      .catch((error) => {
        console.error('There was an error finding a match:', error);
      });
  };

  return (
    <div>
      <h1>Product Swap</h1>
      
      {/* Add Product Form */}
      <div>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          placeholder="Product Name"
        />
        <input
          type="text"
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
          placeholder="Product Description"
        />
        <input
          type="text"
          value={desiredSwap}
          onChange={(e) => setDesiredSwap(e.target.value)}
          placeholder="Desired Swap Item"
        />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>

      <h3>Available Products</h3>
      <div>
        <button onClick={() => fetchProducts()}>Refresh Products</button>
      </div>

      <ul>
        {products.map((product) => (
          <li key={product._id}>
            {product.name} - {product.description} (Looking for: {product.desiredSwap})
          </li>
        ))}
      </ul>

      <h3>Find Match</h3>
      <input
        type="text"
        onChange={(e) => handleFindMatch(e.target.value)}
        placeholder="Enter item to swap for"
      />
    </div>
  );
}

export default App;

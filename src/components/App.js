import './App.css';

import React, { useState } from 'react';
 // Import the CSS file for global styles

function App() {
  const [productName, setProductName] = useState('');

  const handleSwap = () => {
    console.log('Swapping product:', productName);
    // Add your functionality here
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="logo">Swappy</div>
        <div className="auth-buttons">
          <button className="auth-btn">Sign In</button>
          <button className="auth-btn">Sign Up</button>
        </div>
      </header>

      {/* Product Swap Section */}
      <div className="swap-section">
        <div className="swap-title">Swap Products</div>
        <div className="input-bar">
          <input 
            type="text" 
            className="product-input" 
            placeholder="Enter product name"
            value={productName} 
            onChange={(e) => setProductName(e.target.value)}
          />
          <button className="swap-btn" onClick={handleSwap}>Okay</button>
        </div>
      </div>
    </div>
  );
}

export default App;

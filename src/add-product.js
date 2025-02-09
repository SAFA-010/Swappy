import { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [owner, setOwner] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/add-product", { name, description, owner });
    alert("Product added!");
  };

  return (
    <div>
      <h2>Add a Product</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Product Name" onChange={(e) => setName(e.target.value)} required />
        <input type="text" placeholder="Description" onChange={(e) => setDescription(e.target.value)} required />
        <input type="text" placeholder="Your Name" onChange={(e) => setOwner(e.target.value)} required />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;

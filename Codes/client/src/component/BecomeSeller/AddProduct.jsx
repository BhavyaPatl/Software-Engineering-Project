import React, { useState } from 'react';
import './AddProduct.css';
import { addProduct } from "../../service/api";
import { useNavigate } from 'react-router-dom';


const AddProduct = () => {

  const navigate = useNavigate();

  const [product, setProduct] = useState({
    id: '',
    url: '',
    detailUrl: '',
    title: {
        shortTitle: '',
        longTitle: ''
    },
    price: {
        mrp: '',
        cost: '',
        discount: ''
    },
    quantity: '',
    description: '',
    discount: '',
    tagline: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setProduct((prevState) => ({
        ...prevState,
        [parent]: {
          ...prevState[parent],
          [child]: value,
        },
      }));
    } else {
      setProduct({ ...product, [name]: value });
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('Product details submitted:', product);
    // Call backend API to add product to database
    let response =  await addProduct(product);
    if(!response) return;
    navigate('./')
  };

  return (
    <div className="add-product-form">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <label>Product ID:</label>
        <input
          type="text"
          name="id"
          value={product.id}
          onChange={handleChange}
          required
          placeholder="Enter unique product ID"
        />

        <label>Image URL:</label>
        <input
          type="url"
          name="url"
          value={product.url}
          onChange={handleChange}
          required
          placeholder="Enter image URL"
        />

        <label>Detail Image URL:</label>
        <input
          type="url"
          name="detailUrl"
          value={product.detailUrl}
          onChange={handleChange}
          required
          placeholder="Enter detailed image URL"
        />

        <label>Short Title:</label>
        <input
          type="text"
          name="title.shortTitle"
          value={product.title.shortTitle}
          onChange={handleChange}
          required
          placeholder="Enter short title"
        />

        <label>Long Title:</label>
        <input
          type="text"
          name="title.longTitle"
          value={product.title.longTitle}
          onChange={handleChange}
          required
          placeholder="Enter long title"
        />

        <label>MRP:</label>
        <input
          type="number"
          name="price.mrp"
          value={product.price.mrp}
          onChange={handleChange}
          required
          placeholder="Enter MRP"
        />

        <label>Cost:</label>
        <input
          type="number"
          name="price.cost"
          value={product.price.cost}
          onChange={handleChange}
          required
          placeholder="Enter cost price"
        />

        <label>Discount Percentage:</label>
        <input
          type="text"
          name="price.discount"
          value={product.price.discount}
          onChange={handleChange}
          required
          placeholder="Enter discount percentage"
        />

        <label>Quantity:</label>
        <input
          type="Number"
          name="quantity"
          value={product.quantity}
          onChange={handleChange}
          required
          placeholder="Enter Quantity"
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
          required
          placeholder="Enter product description"
        />

        <label>Discount Tag:</label>
        <input
          type="text"
          name="discount"
          value={product.discount}
          onChange={handleChange}
          required
          placeholder="Enter discount tag (e.g., Grab Now)"
        />

        <label>Tagline:</label>
        <input
          type="text"
          name="tagline"
          value={product.tagline}
          onChange={handleChange}
          required
          placeholder="Enter product tagline"
        />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;

import React from "react";
import { createBrowserRouter, Outlet, NavLink, useParams } from 'react-router'
import { getProductById } from "../products.js";

const ProductDetailsView = () => {
  // Replace this static product id with a dynamic one retrieved from the router
  // See documentation on how to retrieve the id from the router
  // https://reactrouter.com/start/declarative/routing#dynamic-segments
  const params = useParams();

  // getProductById is a function to fetch product details from the products.js file.
  // In a real application, this would be an API call to the backend.
  const product = params.id ? getProductById(Number(params.id)): undefined;
   if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "20px" }}>
          <img src="http://via.placeholder.com/400x400" alt="Placeholder" />
        </div>
        <div>
          <h3>${product.price}</h3>
          <p>Description: {product.description}</p>
          <p>Category: {product.category}</p>
          <p>In Stock: {product.stock} pcs</p>
          <p>Rating: {product.rating} / 5.0</p>
          <div style={{ marginTop: "20px" }}>
            {/* No functionality is required for this button */}
            <button>Add to Cart</button>{" "}
          </div>
          <div style={{ marginTop: "20px" }}>
            {/* Replace anchor element with router Link */}
            <NavLink to="/">Back to Products</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsView;

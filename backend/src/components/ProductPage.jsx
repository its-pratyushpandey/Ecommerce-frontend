import React, { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { addToCart } from "../services/cartService";
import "./style.css";

const BASE_URL = 'http://localhost:9090/back1';

const ProductPage = ({ category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts(category || "");
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [category]);

  const handleAddToCart = async (product) => {
    try {
      await addToCart(product.id);
      alert("Product added to cart successfully!");
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  return (
    <div className="product-container">
      <h2>
        {category
          ? category.charAt(0).toUpperCase() + category.slice(1)
          : "All Products"}
      </h2>
      <div className="product-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={`${BASE_URL}/api/products/images/${product.imagePath}`}
                alt={product.name}
              />
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
              <button onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p>No products available in this category.</p>
        )}
      </div>
    </div>
  );
};

export default ProductPage;

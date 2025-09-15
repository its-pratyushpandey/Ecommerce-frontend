import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { getProducts } from "../services/productService";
import { useNavigate } from "react-router-dom";
import "./style.css";

const BASE_URL = 'http://localhost:9090/back1';

const Laptops = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts("laptops"); // Fetch only laptop category
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    navigate("/cart"); // Redirect to cart page after adding product
  };

  return (
    <div className="product-container">
      <h2>Laptops</h2>
      <div className="product-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={`${BASE_URL}/api/products/images/${product.imagePath}`}
                alt={product.name}
              />
              <h4>{product.name}</h4>
              <p>${product.price.toFixed(2)}</p>
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          ))
        ) : (
          <p>No laptops available.</p>
        )}
      </div>
    </div>
  );
};

export default Laptops;

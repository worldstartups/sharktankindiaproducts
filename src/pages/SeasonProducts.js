import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SeasonProducts.css"; // Make sure this file exists for styling

const SeasonProducts = () => {
  const { seasonId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/seasonsProducts.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data[`season${seasonId}`] || []);
      });
  }, [seasonId]);

  return (
    <div>
      <h1>Season {seasonId} Products</h1>
      <div className="product-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.category}</p>
              <a href={product.website} target="_blank" rel="noopener noreferrer">View Product</a>
            </div>
          ))
        ) : (
          <p>No products found for this season.</p>
        )}
      </div>
    </div>
  );
};

export default SeasonProducts;

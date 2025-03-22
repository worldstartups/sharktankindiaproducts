import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CategoryProducts = () => {
  const { category } = useParams(); // Get the category from URL params
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Sample data for products; replace with actual data or fetch request
    const allProducts = [
      { name: 'Tech Product 1', category: 'Technology', season: 1 },
      { name: 'Tech Product 2', category: 'Technology', season: 2 },
      { name: 'Fashion Product 1', category: 'Fashion', season: 1 },
      { name: 'Health Product 1', category: 'Health', season: 3 },
      // Add more product data here
    ];

    // Filter products based on the selected category
    const filteredProducts = allProducts.filter(
      (product) => product.category.toLowerCase() === category.toLowerCase()
    );

    setProducts(filteredProducts);
  }, [category]);

  return (
    <div>
      <h1>{category} Products</h1>
      <div>
        {products.length > 0 ? (
          products.map((product, index) => (
            <div key={index}>
              <h3>{product.name}</h3>
              <p>Season: {product.season}</p>
            </div>
          ))
        ) : (
          <p>No products found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryProducts;

import React, { useState, useEffect } from "react";
import "./Header.css";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

const Header = () => {
  const [showSeasonsDropdown, setShowSeasonsDropdown] = useState(false);
  const [showCategoriesDropdown, setShowCategoriesDropdown] = useState(false);
  const [categories, setCategories] = useState([]);

  // Fetch categories from a JSON file or API
  useEffect(() => {
    // Sample categories data, replace with your actual data source
    const categoriesData = [
      "Technology",
      "Fashion",
      "Health",
      "Food & Beverages",
      "Education",
      "Entertainment"
    ];

    setCategories(categoriesData);
  }, []);

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">Shark Tank India</div>

      {/* Navigation */}
      <nav className="nav-links">
        <a href="/">Home</a>
        
        {/* Categories with Hover Dropdown */}
        <div 
          className="categories-dropdown"
          onMouseEnter={() => setShowCategoriesDropdown(true)}
          onMouseLeave={() => setShowCategoriesDropdown(false)}
        >
          <a href="/categories">Categories</a>
          {showCategoriesDropdown && (
            <div className="dropdown-content">
              {categories.map((category, index) => (
                <a key={index} href={`/categories/${category.toLowerCase()}`}>
                  {category}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Investors */}
        <a href="/investors">Investors</a>

        {/* Seasons with Hover Dropdown */}
        <div 
          className="seasons-dropdown"
          onMouseEnter={() => setShowSeasonsDropdown(true)}
          onMouseLeave={() => setShowSeasonsDropdown(false)}
        >
          <a href="/seasons">Seasons</a>
          {showSeasonsDropdown && (
            <div className="dropdown-content">
              <a href="/season/1">Season 1</a>
              <a href="/season/2">Season 2</a>
              <a href="/season/3">Season 3</a>
              <a href="/season/4">Season 4</a>
            </div>
          )}
        </div>
      </nav>

      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search products..." />
        <FaSearch className="search-icon" />
      </div>

      {/* Cart & User Icons */}
      <div className="header-icons">
        <FaShoppingCart className="icon" />
        <FaUser className="icon" />
      </div>
    </header>
  );
};

export default Header;

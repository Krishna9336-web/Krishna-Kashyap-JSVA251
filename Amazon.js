// App.js
import React, { useState } from "react";
import "./App.css";

function App() {
  const products = [
    {
      id: 1,
      name: "iPhone 15",
      price: 79999,
      image:
        "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400",
    },
    {
      id: 2,
      name: "Samsung Galaxy S24",
      price: 69999,
      image:
        "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400",
    },
    {
      id: 3,
      name: "OnePlus 12",
      price: 58999,
      image:
        "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400",
    },
    {
      id: 4,
      name: "iPad Air",
      price: 54999,
      image:
        "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400",
    },
    {
      id: 5,
      name: "Samsung Tablet",
      price: 35999,
      image:
        "https://images.unsplash.com/photo-1589739900243-4b52cd9dd4d4?w=400",
    },
    {
      id: 6,
      name: "Boat Headphones",
      price: 2999,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    },
    {
      id: 7,
      name: "AirPods Pro",
      price: 24999,
      image:
        "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=400",
    },
    {
      id: 8,
      name: "Noise Smartwatch",
      price: 4999,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    },
    {
      id: 9,
      name: "HP Laptop",
      price: 55999,
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
    },
    {
      id: 10,
      name: "Canon Camera",
      price: 45999,
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400",
    },
    {
      id: 11,
      name: "JBL Speaker",
      price: 6999,
      image:
        "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=400",
    },
    {
      id: 12,
      name: "Gaming Keyboard",
      price: 2499,
      image:
        "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=400",
    },
    {
      id: 13,
      name: "Gaming Mouse",
      price: 1499,
      image:
        "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400",
    },
    {
      id: 14,
      name: "LG Monitor",
      price: 12999,
      image:
        "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400",
    },
    {
      id: 15,
      name: "PlayStation 5",
      price: 54999,
      image:
        "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400",
    },
  ];

  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const addToWishlist = (product) => {
    setWishlist([...wishlist, product]);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">Amazon Clone</h1>

        <div className="location">
          📍
          <select>
            <option>Delhi</option>
            <option>Mumbai</option>
            <option>Ghaziabad</option>
            <option>Noida</option>
          </select>
        </div>

        <input
          type="text"
          placeholder="Search products..."
          className="search-bar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          className="email-bar"
        />

        <div className="nav-items">
          <p>🛒 Cart ({cart.length})</p>
          <p>❤️ Wishlist ({wishlist.length})</p>
        </div>
      </nav>

      {/* Product Section */}
      <div className="products-container">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />

            <h2>{product.name}</h2>

            <p className="price">₹ {product.price}</p>

            <div className="buttons">
              <button onClick={() => addToCart(product)}>
                Add to Cart
              </button>

              <button
                className="wishlist-btn"
                onClick={() => addToWishlist(product)}
              >
                Add to Wishlist
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart & Wishlist */}
      <div className="details-section">

        <div className="cart-section">
          <h2>Cart Items</h2>

          {cart.map((item, index) => (
            <p key={index}>
              {item.name} - ₹ {item.price}
            </p>
          ))}
        </div>

        <div className="wishlist-section">
          <h2>Wishlist Items</h2>

          {wishlist.map((item, index) => (
            <p key={index}>
              {item.name} - ₹ {item.price}
            </p>
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;

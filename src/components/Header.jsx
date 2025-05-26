import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 20px",
      backgroundColor: "#4CAF50",
      color: "white"
    }}>
      <h2><Link to="/" style={{ color: "white", textDecoration: "none" }}>Leaf & Root</Link></h2>

      <nav style={{ display: "flex", gap: "20px" }}>
        <Link to="/products" style={{ color: "white", textDecoration: "none" }}>Products</Link>
        <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>
          🛒 Cart ({totalCount})
        </Link>
      </nav>
    </header>
  );
};

export default Header;

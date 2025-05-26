import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ 
      backgroundImage: 'url("/images/landing-background.jpg")', 
      backgroundSize: "cover", 
      minHeight: "100vh", 
      display: "flex", 
      flexDirection: "column", 
      justifyContent: "center", 
      alignItems: "center", 
      textAlign: "center",
      color: "white",
      padding: "20px"
    }}>
      <h1>Leaf & Root</h1>
      <p>Welcome to Leaf & Root, your one-stop shop for beautiful, healthy houseplants.</p>
      <button 
        onClick={() => navigate("/products")} 
        style={{ marginTop: 20, padding: "10px 20px", fontSize: 16 }}
      >
        Get Started
      </button>
    </div>
  );
};

export default LandingPage;

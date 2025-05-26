import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const ProductCard = ({ plant }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const isInCart = cartItems.find((item) => item.id === plant.id) !== undefined;

  const handleAddToCart = () => {
    dispatch(addToCart(plant));
  };

  return (
    <div className="product-card" style={{ border: "1px solid #ddd", padding: 10, margin: 10, width: 200 }}>
      <img src={plant.image} alt={plant.name} style={{ width: "100%", height: 150, objectFit: "cover" }} />
      <h3>{plant.name}</h3>
      <p>${plant.price}</p>
      <button disabled={isInCart} onClick={handleAddToCart}>
        {isInCart ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductCard;

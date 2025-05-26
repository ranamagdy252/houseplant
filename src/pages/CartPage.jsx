import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementQuantity, decrementQuantity, removeFromCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalCost = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div style={{ padding: 20 }}>
      <h1>Your Cart</h1>
      <p>Total items: {totalItems}</p>
      <p>Total cost: ${totalCost}</p>

      {cartItems.map((item) => (
        <div key={item.id} style={{ display: "flex", gap: 20, marginBottom: 20, alignItems: "center" }}>
          <img src={item.image} alt={item.name} style={{ width: 100, height: 100, objectFit: "cover" }} />
          <div>
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <div>
              <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
              <button onClick={() => dispatch(decrementQuantity(item.id))} disabled={item.quantity === 1}>-</button>
              <button onClick={() => dispatch(removeFromCart(item.id))}>Delete</button>
            </div>
          </div>
        </div>
      ))}

      <button onClick={() => alert("Checkout coming soon!")}>Checkout</button>
      <button onClick={() => navigate("/products")} style={{ marginLeft: 10 }}>
        Continue Shopping
      </button>
    </div>
  );
};

export default CartPage;

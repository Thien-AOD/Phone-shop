import React from "react";

const Cart = ({ cart, addToCart, removeFromCart }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => removeFromCart(item.id)}>-</button>
            <button onClick={() => addToCart(item)}>+</button>
          </div>
        ))
      )}
      <h3>
        Total: $
        {cart.reduce((total, item) => total + item.price * item.quantity, 0)}
      </h3>
    </div>
  );
};

export default Cart;

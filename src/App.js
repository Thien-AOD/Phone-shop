import React, { useState } from "react";
import products from "./data/products";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    const existingItem = cart.find((item) => item.id === id);
    if (existingItem.quantity === 1) {
      setCart(cart.filter((item) => item.id !== id));
    } else {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
  };

  return (
    <div>
      <h1>Phone Shop</h1>
      <ProductList products={products} addToCart={addToCart} />
      <Cart cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />
    </div>
  );
};

export default App;

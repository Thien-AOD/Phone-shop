import React from "react";

const ProductList = ({ products, addToCart }) => {
  return (
    <div>
      <h2>Product List</h2>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

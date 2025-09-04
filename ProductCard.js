import React from "react";

function ProductCard({ product, addToCart }) {
  return (
    <div className="border rounded-lg p-4 shadow bg-white">
      <img src={product.image} alt={product.name} className= {`${product.size} `}  />
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p>₹{product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;

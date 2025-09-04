import React from "react";
import ProductCard from "../components/ProductCard";

function Home({ addToCart }) {
  const products = [
    { id: 1, name: "Laptop", price: 50000, image: "https", size: "w-24 h-24"},
    { id: 2, name: "Phone", price: 20000, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Headphones", price: 2000, image: "https://via.placeholder.com/150" },
  ];
   
  

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default Home;

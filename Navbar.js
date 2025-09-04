import React from "react";

function Navbar({ cartCount }) {
  return (
    <nav className="flex justify-between items-center p-4 bg-blue-600 text-white">
      <h1 className="text-xl font-bold">E-Shop</h1>
      <div>
        🛒 Cart: <span>{cartCount}</span>
      </div>
    </nav>
  );
}

export default Navbar;

import React from "react";

function Checkout({ cart, removeFromCart }) {
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty 🛒</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} className="flex justify-between items-center border-b py-2">
              <span>{item.name}</span>
              <span>₹{item.price}</span>
              <button
                onClick={() => removeFromCart(index)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          ))}
          <h3 className="text-xl font-semibold mt-4">Total: ₹{total}</h3>
          <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-800">
            Place Order
          </button>
        </div>
      )}
    </div>
  );
}

export default Checkout;

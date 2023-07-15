import React, { useState } from "react";

const CheckoutPage = ({ product, onProceedPayment, onClose }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value, 10));
  };

  const totalPrice = product.price * quantity;

  const handlePayment = () => {
    onProceedPayment(product, quantity);
  };

  return (
    <div className="bg-white p-4 max-w-md mx-auto mt-10 rounded-md shadow-lg">
      <div className="bg-purple-600 rounded-lg p-4 mb-4 text-white">
        <h1 className="text-3xl font-bold"> Checkout </h1>{" "}
        <p className="text-lg">
          Please review your order before proceeding to payment.{" "}
        </p>{" "}
      </div>{" "}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold"> {product.name} </h2>{" "}
        <button onClick={onClose} className="text-red-600 hover:text-red-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 fill-current"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18">
              {" "}
            </line>{" "}
            <line x1="6" y1="6" x2="18" y2="18">
              {" "}
            </line>{" "}
          </svg>{" "}
        </button>{" "}
      </div>{" "}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover mb-4"
      />
      <p className="mb-4"> {product.description} </p>{" "}
      <div className="flex items-center mb-4">
        <label htmlFor="quantity" className="mr-2">
          Quantity:
        </label>{" "}
        <input
          type="number"
          id="quantity"
          value={quantity}
          min={1}
          max={10} // Set the maximum quantity as per your requirement
          onChange={handleQuantityChange}
          className="border rounded-md px-2 py-1 w-16"
        />
      </div>{" "}
      <p className="font-bold text-xl mb-4">
        {" "}
        Total: ₹{totalPrice.toFixed(2)}{" "}
      </p>{" "}
      <button
        onClick={handlePayment}
        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
      >
        Proceed to Payment{" "}
      </button>{" "}
    </div>
  );
};

export default CheckoutPage;

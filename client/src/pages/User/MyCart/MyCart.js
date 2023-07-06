import React, { useEffect, useState } from 'react';
import { getCartItems } from '../../../Services/APIs/UserAPI'; // Assuming you have an API function to fetch cart items

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  const fetchCartItems = async () => {
    try {
      const email = localStorage.getItem('userMail');
      const response = await getCartItems(email);
      setCartItems(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">My Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item._id} className="border border-gray-300 rounded p-4 mb-4 flex items-center">
              <img src={item.productId.image} className="h-24 w-24 object-cover rounded" alt="" />
              <div className="ml-4">
                <h2 className="text-lg font-semibold">{item.productId.name}</h2>
                <p className="text-gray-600 mb-2">{item.productId.description}</p>
                <p className="text-gray-700 font-semibold">Price: ₹ {item.productId.price}</p>
                <p className="text-gray-700 font-semibold">Quantity: {item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;

import React, { useEffect, useState } from 'react';
import { getCartItems } from '../../../Services/APIs/UserAPI'; // Assuming you have an API function to fetch cart items

const CartPage = () => {
  const [cartItems, setCartItems] = useState([""]);

  const fetchCartItems = async () => {
    try {
      const email = localStorage.getItem('userMail')
      const response = await getCartItems(email); // Fetch cart items from the backend API
      console.log(response.data)
      setCartItems(response.data.productId); // Set the fetched cart items to the state
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.productId} className="border border-gray-300 p-4 mb-4">
              <h2 className="text-lg font-semibold">{item.productName}</h2>
              <p>Price: ₹ {item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;

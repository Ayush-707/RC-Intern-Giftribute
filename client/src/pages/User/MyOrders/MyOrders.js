import React, { useState } from "react";
import "./MyOrders.css";

const MyOrders = () => {
  const [orders, setOrders] = useState([
    { id: 1, product: "Product 1", status: "Delivered" },
    {
      id: 2,
      product: "Product 2",
      status: "Delivery expected by June 30, 2023",
    },
  ]);

  const handleHelpButtonClick = (orderId) => {
    // Handle help button click logic
    console.log(`Help button clicked for order ID: ${orderId}`);
  };

  return (
    <div className="my-orders-container">
      <h2> My Orders </h2>{" "}
      <table className="order-table">
        <thead>
          <tr>
            <th> Order ID </th> <th> Product </th> <th> Status </th> <th> </th>{" "}
          </tr>{" "}
        </thead>{" "}
        <tbody>
          {" "}
          {orders.map((order) => (
            <tr key={order.id}>
              <td> {order.id} </td> <td> {order.product} </td>{" "}
              <td> {order.status} </td>{" "}
              <td>
                <button
                  onClick={() => handleHelpButtonClick(order.id)}
                  className="help-btn"
                >
                  {" "}
                  Need Help{" "}
                </button>{" "}
              </td>{" "}
            </tr>
          ))}{" "}
        </tbody>{" "}
      </table>{" "}
    </div>
  );
};

export default MyOrders;

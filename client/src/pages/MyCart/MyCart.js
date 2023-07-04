import React from "react";
import "./MyCart.css";

const CartPage = () => {
  // Example product data
  const products = [
    { id: 1, name: "Product 1", price: 10, image: "product1.jpg" },
    { id: 2, name: "Product 2", price: 15, image: "product2.jpg" },
  ];

  return (
    <div className="cart-page">
      <h1> Your Cart </h1>
      <div className="cart-container">
        {" "}
        {products.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.name} />{" "}
            <div className="product-details">
              <h3> {product.name} </h3>{" "}
              <p className="product-price"> $ {product.price} </p>{" "}
              <div className="actions">
                <button> Buy Now </button> <button> Remove from Cart </button>{" "}
              </div>{" "}
            </div>{" "}
          </div>
        ))}{" "}
      </div>{" "}
    </div>
  );
};

export default CartPage;

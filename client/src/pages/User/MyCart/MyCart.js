import React from "react";
import { Link } from "react-router-dom";
import "./MyCart.css";

const MyCartPage = () => {
  // Example product data
  const products = [
    { id: 1, name: "Product 1", price: 10, image: "product1.jpg" },
    { id: 2, name: "Product 2", price: 15, image: "product2.jpg" },
  ];

  const mainToolbarStyle = {
    backgroundColor: "#7d8035",
    height: "79px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
  };

  const homeButtonStyle = {
    color: "white",
    backgroundColor: "transparent",
    border: "none",
    padding: "0",
    fontSize: "40px",
    textDecoration: "none",
  };

  return (
    <div className="my-cart-page">
      <div style={mainToolbarStyle}>
        <Link to="/" style={homeButtonStyle}>
          Home{" "}
        </Link>{" "}
      </div>{" "}
      <h1> Your Cart </h1>{" "}
      <div className="my-cart-container">
        {" "}
        {products.map((product) => (
          <div className="my-product" key={product.id}>
            <img src={product.image} alt={product.name} />{" "}
            <div className="my-product-details">
              <h3> {product.name} </h3>{" "}
              <p className="my-product-price"> $ {product.price} </p>{" "}
              <div className="my-actions">
                <button> Buy Now </button> <button> Remove from Cart </button>{" "}
              </div>{" "}
            </div>{" "}
          </div>
        ))}{" "}
      </div>{" "}
    </div>
  );
};

export default MyCartPage;

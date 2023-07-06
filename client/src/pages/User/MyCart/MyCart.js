import React from "react";
import "./MyCart.css";

const MyCartPage = () => {
  const products = [
    {
      name: "Sunflower",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd56dx7u2eV_mcG1C0CffY_VIfNqIuCYdKi0_0s8_U2CUwIljv7r-CewMnNe_1DRfIYzk&usqp=CAU",
      description: "Bright and cheery sunflower to brighten your day.",
      price: 7.99,
    },
    {
      name: "Sunflower",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd56dx7u2eV_mcG1C0CffY_VIfNqIuCYdKi0_0s8_U2CUwIljv7r-CewMnNe_1DRfIYzk&usqp=CAU",
      description: "Bright and cheery sunflower to brighten your day.",
      price: 7.99,
    },
    {
      name: "Sunflower",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd56dx7u2eV_mcG1C0CffY_VIfNqIuCYdKi0_0s8_U2CUwIljv7r-CewMnNe_1DRfIYzk&usqp=CAU",
      description: "Bright and cheery sunflower to brighten your day.",
      price: 7.99,
    },
    {
      name: "Sunflower",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd56dx7u2eV_mcG1C0CffY_VIfNqIuCYdKi0_0s8_U2CUwIljv7r-CewMnNe_1DRfIYzk&usqp=CAU",
      description: "Bright and cheery sunflower to brighten your day.",
      price: 7.99,
    },
    // Add more product objects as needed
  ];

  return (
    <div className="my-cart-page">
      <h1> Your Cart </h1>{" "}
      <div className="my-cart-container">
        {" "}
        {products.map((product, index) => (
          <div className="my-product" key={index}>
            <img src={product.image} alt={product.name} />{" "}
            <div className="my-product-details">
              <h3> {product.name} </h3>{" "}
              <p className="my-product-description"> {product.description} </p>{" "}
              <p className="my-product-price"> $ {product.price} </p>{" "}
              <div className="my-actions">
                <button className="buy-now"> Buy Now </button>{" "}
                <button className="remove-from-cart"> Remove from Cart </button>{" "}
              </div>{" "}
            </div>{" "}
          </div>
        ))}{" "}
      </div>{" "}
    </div>
  );
};

export default MyCartPage;

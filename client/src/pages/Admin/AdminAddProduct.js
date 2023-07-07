import React, { useState } from "react";

const AdminAddProduct = () => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productImage, setProductImage] = useState("");

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleProductDescriptionChange = (e) => {
    setProductDescription(e.target.value);
  };

  const handleProductPriceChange = (e) => {
    setProductPrice(e.target.value);
  };

  const handleProductQuantityChange = (e) => {
    setProductQuantity(e.target.value);
  };

  const handleProductImageChange = (e) => {
    // Handle image upload logic here
    // You can store the selected image in state or perform any other required actions
    console.log(e.target.files);
  };

  const handleAddProduct = () => {
    // Handle add product logic here
    console.log("Adding new product...");
  };

  return (
    <div
      style={{
        backgroundImage: "url(/form1.avif)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "8px",
          maxWidth: "500px",
          width: "100%",
        }}
      >
        <h2 style={{ marginBottom: "20px", textAlign: "center" }}>
          Add Product{" "}
        </h2>{" "}
        <form>
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="productName"> Product Name </label>{" "}
            <input
              type="text"
              id="productName"
              value={productName}
              onChange={handleProductNameChange}
              placeholder="Enter product name"
              style={{
                width: "100%",
                padding: "10px",
                fontSize: "16px",
                borderRadius: "4px",
              }}
            />{" "}
          </div>{" "}
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="productDescription"> Product Description </label>{" "}
            <textarea
              id="productDescription"
              value={productDescription}
              onChange={handleProductDescriptionChange}
              placeholder="Enter product description"
              style={{
                width: "100%",
                padding: "10px",
                fontSize: "16px",
                borderRadius: "4px",
                resize: "vertical",
              }}
            ></textarea>{" "}
          </div>{" "}
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="productPrice"> Product Price </label>{" "}
            <input
              type="number"
              id="productPrice"
              value={productPrice}
              onChange={handleProductPriceChange}
              placeholder="Enter product price"
              style={{
                width: "100%",
                padding: "10px",
                fontSize: "16px",
                borderRadius: "4px",
              }}
            />{" "}
          </div>{" "}
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="productQuantity"> Product Quantity </label>{" "}
            <input
              type="number"
              id="productQuantity"
              value={productQuantity}
              onChange={handleProductQuantityChange}
              placeholder="Enter product quantity"
              style={{
                width: "100%",
                padding: "10px",
                fontSize: "16px",
                borderRadius: "4px",
              }}
            />{" "}
          </div>{" "}
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="productImage"> Product Image </label>{" "}
            <input
              type="file"
              id="productImage"
              accept="image/*"
              onChange={handleProductImageChange}
            />{" "}
          </div>{" "}
          <div style={{ textAlign: "center" }}>
            <button
              type="button"
              onClick={handleAddProduct}
              style={{
                background: "blue",
                color: "white",
                padding: "10px 20px",
                fontSize: "16px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Add Product{" "}
            </button>{" "}
          </div>{" "}
        </form>{" "}
      </div>{" "}
    </div>
  );
};

export default AdminAddProduct;

import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/User/Home/Home";
import Login from "./pages/User/Login";
import Register from "./pages/User/Register";
import MyAccount from "./pages/User/MyAccount";
import MyOrders from "./pages/User/MyOrders/MyOrders";
import AdminLogin from "./pages/Admin/AdminLogin/AdminLogin";
import AdminHome from "./pages/Admin/AdminHome/AdminHome";
import AdminAddProduct from "./pages/Admin/AdminAddproduct/AdminAddProduct";
import MyCart from "./pages/User/MyCart/MyCart";
import ContactUS from "./pages/User/ContactUs";
import Flowers from "./pages/User/Gifts/Flowers";
import Plants from "./pages/User/Gifts/Plants";
import Cakes from './pages/User/Gifts/Cakes'
import Navbar from "./Component/Navbar";
import SearchBar from "./Component/Search";

function App() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-end">
        <div className="w-1/3 p-1">
          <SearchBar />
        </div>{" "}
      </div>{" "}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/my-orders" element={<MyOrders />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-home" element={<AdminHome />} />
        <Route path="/my-cart" element={<MyCart />} />
        <Route path="/user/contact-us" element={<ContactUS />} />
        <Route path="/flowers" element={<Flowers />} />
        <Route path="/plants" element={<Plants />} />
        <Route path="/cakes" element={<Cakes />} />

      </Routes>
    </div>
  );
}

export default App;

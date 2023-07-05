import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './pages/User/Home/Home';
import Login from './pages/User/Login';
import Register from './pages/User/Register';
import MyAccount from './pages/User/MyAccount';
import MyOrders from './pages/User/MyOrders/MyOrders';
import AdminLogin from './pages/Admin/AdminLogin/AdminLogin';
import AdminHome from './pages/Admin/AdminHome/AdminHome';
import MyCart from './pages/User/MyCart/MyCart';
import ContactUS from './pages/User/ContactUs'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/my-orders" element={<MyOrders />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-home" element={<AdminHome />} />
        <Route path="/my-cart" element={<MyCart />} />
      </Routes>
    </div>
  );
}

export default App;

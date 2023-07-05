import React, { useState } from "react";
import './AdminLogin.css';

const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [mobile, setMobile] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Mobile Number:", mobile);
        console.log("Password:", pass);

        // Redirect to the admin-home route
        window.location.href = "/admin-home";
    };

    return ( <
        div className = "admin-login-container" >
        <
        h2 > Admin Login < /h2> <
        form className = "admin-login-form"
        onSubmit = { handleSubmit } >
        <
        label htmlFor = "email" > Email < /label> <
        input value = { email }
        onChange = {
            (e) => setEmail(e.target.value) }
        type = "email"
        placeholder = "youremail@gmail.com"
        id = "email"
        name = "email" /
        >
        <
        label htmlFor = "mobile" > Mobile Number < /label> <
        input value = { mobile }
        onChange = {
            (e) => setMobile(e.target.value) }
        type = "text"
        placeholder = "Mobile Number"
        id = "mobile"
        name = "mobile" /
        >
        <
        label htmlFor = "password" > Password < /label> <
        input value = { pass }
        onChange = {
            (e) => setPass(e.target.value) }
        type = "password"
        placeholder = "********"
        id = "password"
        name = "password" /
        >
        <
        button type = "submit" > Log In < /button> <
        /form> <
        /div>
    );
};

export default AdminLogin;
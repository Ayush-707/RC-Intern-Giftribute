import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Login.css';

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [mobile, setMobile] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    };

    return ( <
        div className = "auth-form-container" >
        <
        h2 > Login < /h2> <
        form className = "login-form"
        onSubmit = { handleSubmit } >
        <
        label htmlFor = "email" > Email < /label> <
        input value = { email }
        onChange = {
            (e) => setEmail(e.target.value)
        }
        type = "email"
        placeholder = "youremail@gmail.com"
        id = "email"
        name = "email" /
        >
        <
        label htmlFor = "mobile" > Mobile Number < /label> <
        input value = { mobile }
        onChange = {
            (e) => setMobile(e.target.value)
        }
        type = "text"
        placeholder = "Mobile Number"
        id = "mobile"
        name = "mobile" /
        >
        <
        label htmlFor = "password" > Password < /label> <
        input value = { pass }
        onChange = {
            (e) => setPass(e.target.value)
        }
        type = "password"
        placeholder = "********"
        id = "password"
        name = "password" /
        >
        <
        button type = "submit" > Log In < /button> < /
        form > <
        Link to = "/register"
        className = "link-btn" >
        Don 't have an account? Register here. < /
        Link > <
        /div>
    );
};

export default Login;
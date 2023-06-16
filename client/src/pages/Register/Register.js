import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Register.css';

const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return ( <
        div className = "auth-form-container" >
        <
        h2 > Register < /h2> <
        form className = "register-form"
        onSubmit = { handleSubmit } >
        <
        label htmlFor = "name" > Full name < /label> <
        input value = { name }
        name = "name"
        onChange = {
            (e) => setName(e.target.value)
        }
        id = "name"
        placeholder = "Full Name" /
        >
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
        button type = "submit" > Register < /button> < /
        form > <
        Link to = "/login"
        className = "link-btn" >
        Already have an account ? Login here. <
        /Link> < /
        div >
    )
}

export default Register;
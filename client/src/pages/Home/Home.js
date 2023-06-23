import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
        const [products, setProducts] = useState([{
                id: 1,
                name: 'Product 1',
                image: 'product1.jpg',
                description: 'Description of Product 1',
            },
            {
                id: 2,
                name: 'Product 2',
                image: 'product2.jpg',
                description: 'Description of Product 2',
            },
        ]);
        const [cart, setCart] = useState([]);
        const [searchQuery, setSearchQuery] = useState('');
        const [activeSubMenu, setActiveSubMenu] = useState('');

        const handleAddToCart = (product) => {
            setCart([...cart, product]);
        };

        const handleSearch = (e) => {
            setSearchQuery(e.target.value);
        };

        const handleToggleSubMenu = (menu) => {
            setActiveSubMenu(activeSubMenu === menu ? '' : menu);
        };

        const handleRemoveFromCart = (product) => {
            const updatedCart = cart.filter((item) => item.id !== product.id);
            setCart(updatedCart);
        };

        const filteredProducts = products.filter((product) =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        const searchInputStyles = {
            width: '350px',
            height: '40px',
        };

        return ( <
                div className = "container" >
                <
                header className = "header" >
                <
                nav className = "navbar" >
                <
                div className = "welcome-container" >
                <
                div className = "welcome-text" > Welcome < /div> < /
                div > <
                div className = "search-bar" >
                <
                input type = "text"
                placeholder = "Search products..."
                value = { searchQuery }
                onChange = { handleSearch }
                style = { searchInputStyles }
                /> < /
                div > <
                div className = "menu" >
                <
                ul >
                <
                li >
                <
                a href = "#" > Home < /a> < /
                li > <
                li >
                <
                a href = "#"
                onClick = {
                    () => handleToggleSubMenu('categories')
                } >
                Categories <
                /a> {
                activeSubMenu === 'categories' && ( <
                    div className = "submenu" >
                    <
                    Link to = "/flowers" > Flowers < /Link> <
                    Link to = "/cakes" > Cakes < /Link> <
                    Link to = "/gifts" > Gifts < /Link> <
                    Link to = "/plants" > Plants < /Link> < /
                    div >
                )
            } <
            /li> <
        li >
            <
            a href = "#" > Gifts < /a> < /
        li > <
            li >
            <
            a href = "#"
        onClick = {
                () => handleToggleSubMenu('about')
            } >
            About Us <
            /a> {
        activeSubMenu === 'about' && ( <
            div className = "submenu" >
            <
            a href = "#" > Our Story < /a> <
            a href = "#" > Our Team < /a> <
            a href = "#" > Testimonials < /a> <
            a href = "#" > Career < /a> < /
            div >
        )
    } <
    /li> <
li >
    <
    a href = "#"
onClick = {
        () => handleToggleSubMenu('support')
    } >
    Support <
    /a>                 {activeSubMenu === 'support' && ( <
div className = "submenu" >
    <
    a href = "#" > Contact Us < /a> <
a href = "#" > FAQ < /a> <
a href = "#" > Shipping Information < /a> < /
div >
)
} <
/li> <
li >
    <
    a href = "#"
onClick = {
        () => handleToggleSubMenu('followUs')
    } >
    Follow Us <
    /a> {
activeSubMenu === 'followUs' && ( <
    div className = "submenu" >
    <
    a href = "#" > Facebook < /a> <
    a href = "#" > Instagram < /a> <
    a href = "#" > Twitter < /a> < /
    div >
)
} <
/li> <
li >
    <
    button className = "cart-button" >
    Cart({ cart.length }) <
    /button> < /
li > <
    li >
    <
    button
className = "profile-button"
onClick = {
        () => handleToggleSubMenu('profile')
    } >
    My Profile <
    /button> {
activeSubMenu === 'profile' && ( <
    div className = "submenu" >
    <
    Link to = "/login" > Login / Register < /Link> <
    Link to = "/my-account" > My Account < /Link> <
    Link to = "/my-orders" > My Orders < /Link> < /
    div >
)
} <
/li> < /
ul > <
    /div> < /
nav > <
    /header> <
div className = "product-list" > {
        filteredProducts.map((product) => ( <
            div className = "product"
            key = { product.id } >
            <
            img src = { product.image }
            alt = { product.name }
            /> <
            h3 > { product.name } < /h3> <
            p > { product.description } < /p> <
            button onClick = {
                () => handleAddToCart(product)
            } >
            Add to Cart <
            /button> < /
            div >
        ))
    } <
    /div> < /
div >
);
};

export default Home;
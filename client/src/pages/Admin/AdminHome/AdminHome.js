// Import necessary dependencies and components
import React from 'react';
import './AdminHome.css'; // Import the CSS file for AdminHome

// AdminHome component
const AdminHome = () => {
    return ( <
        div className = "admin-home-container" > { /* Navigation menu */ } <
        nav className = "navigation-menu" >
        <
        ul >
        <
        li >
        <
        button className = "menu-button" > User Management < /button> <
        /li> <
        li >
        <
        button className = "menu-button" > Catalog Management < /button> <
        /li> <
        li >
        <
        button className = "menu-button" > Inventory Management < /button> <
        /li> <
        li >
        <
        button className = "menu-button" > Order Management < /button> <
        /li> <
        /ul> <
        button className = "logout-button" > Logout < /button> <
        /nav>

        { /* Content */ } <
        div className = "content" > { /* Add your components or content here */ } <
        /div> <
        /div>
    );
};

export default AdminHome;
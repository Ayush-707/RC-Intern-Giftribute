// import React, { useState } from "react";
// import { Link } from 'react-router-dom';
// import './MyAccount.css';

// const MyAccount = (props) => {
//     const [name, setName] = useState("XYZ");
//     const [email, setEmail] = useState("xyz@example.com");
//     const [mobile, setMobile] = useState("1234567890");

//     const handleLogout = () => {
//         // Add your logout logic here
//         console.log("Logged out");
//     };

//     return ( <
//         div className = "my-account-container" >
//         <
//         h2 > My Account < /h2> <
//         div className = "account-details" >
//         <
//         p > < strong > Name: < /strong> {name}</p >
//         <
//         p > < strong > Email: < /strong> {email}</p >
//         <
//         p > < strong > Mobile Number: < /strong> {mobile}</p >
//         <
//         /div> <
//         button onClick = { handleLogout }
//         className = "logout-btn" > Logout < /button> < /
//         div >
//     );
// };

// export default MyAccount;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MyAccount.css";

const MyAccount = (props) => {
  const [name, setName] = useState("XYZ");
  const [email, setEmail] = useState("xyz@example.com");
  const [mobile, setMobile] = useState("1234567890");

  const handleLogout = () => {
    // Add your logout logic here
    console.log("Logged out");
  };

  return (
    <div className="my-account-screen">
      {" "}
      {/* Use a different class name here */}{" "}
      <div className="my-account-container">
        <h2> My Account </h2>{" "}
        <div className="account-details">
          <p>
            {" "}
            <strong> Name: </strong> {name}
          </p>
          <p>
            {" "}
            <strong> Email: </strong> {email}
          </p>
          <p>
            {" "}
            <strong> Mobile Number: </strong> {mobile}
          </p>
        </div>{" "}
        <button onClick={handleLogout} className="logout-btn">
          {" "}
          Logout{" "}
        </button>{" "}
      </div>{" "}
    </div>
  );
};

export default MyAccount;

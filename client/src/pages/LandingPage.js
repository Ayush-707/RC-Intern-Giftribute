import React from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const handleEmployeeLoginClick = () => {
    navigate ('/admin-login')
  };

  const handleCustomerLoginClick = () => {
    navigate("/home");
  };

  

  return (
    <div
      className="flex flex-col items-center justify-start min-h-screen bg-white"
      
    >
      <div className="flex flex-col md:flex-row items-center mt-36">
        <div
          className="card bg-gray-300 rounded-lg shadow-lg w-80 p-6 m-4 cursor-pointer transform transition duration-300 hover:shadow-xl hover:scale-105 hover:text-black flex flex-col justify-center items-center hover:bg-gray-400 border-4 border-blue-400"
          onClick={handleEmployeeLoginClick}
        >
          <i class="fa-sharp mb-2 fa-solid fa-user-plus text-8xl icon"></i>
          <h2 className="text-lg font-bold -ml-10">Admin</h2>
          {/* <p className="text-gray-700 text-sm mt-2">
            Access administrative functions and customer information.
          </p> */}
        </div>
        <div
          className="card bg-gray-300 rounded-lg shadow-lg w-80 p-6 m-4 cursor-pointer transform transition duration-300 hover:shadow-xl hover:scale-105 hover:text-black flex flex-col justify-center items-center hover:bg-gray-400 border-4 border-blue-400"
          onClick={handleCustomerLoginClick}
        >
          <i class="fa-solid fa-user-large icon mb-2 text-8xl"></i>
          <h2 className="text-lg font-bold">User</h2>
          {/* <p className="text-gray-700 text-sm mt-2">
            Access your account information and make transactions.
          </p> */}
        </div>
      </div>

      <style>
        {`
          .card:hover .icon {
            animation: rotate 2s infinite linear;
          }

          @keyframes rotate {
            0% {
              transform: rotateY(0deg);
            }
            100% {
              transform: rotateY(360deg);
            }
          }
        `}
      </style>
    </div>
  );
}

export default LoginPage;

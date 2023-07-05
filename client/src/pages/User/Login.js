import React, { useState } from 'react';
import { LoginAPI } from '../../Services/APIs/UserAPI';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function UserLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // TODO: Add your login logic here
    const obj = {
        userEmail: email,
        userPassword: password
    }
   // console.log("my object",obj)
    const res = await LoginAPI(obj)

    if ( res.status !== 200) {
      toast.error(res.data.error);
    } else {
      toast.success(res.data.message)
      localStorage.setItem('userMail', email);
      setTimeout(() => {
        navigate('/');
      }, 2500);
    }


    
    console.log(res.data)
  };

  const styles = {
    backgroundImage: 'url(/orange.avif)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    maxHeight: '100%',
    overflowY: 'hidden'
   
  };

  return (
    
    <div style={styles}>
      <Toaster/>
      <div className=" flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-gray-200 rounded-md shadow-xl shadow-blue-600/40 ring-2 ring-blue-600 lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-blue-700">
            LOGIN
          </h1>
          <form className="mt-6" onSubmit={handleSubmit}>
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Email
              </label>
              <input
                type="email"
                className="block w-full px-4 py-2 mt-2 text-gray-500 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-800"
              >
                Password
              </label>
              <input
                type="password"
                className="block w-full px-4 py-2 mt-2 text-gray-500 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            {/* <a href="#" className="text-xs text-blue-600 hover:underline">
              Forget Password?
            </a> */}
            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Login
              </button>
            </div>
          </form>

          <p className="mt-8 text-xs font-light text-center text-gray-700">
            Don't have an account?{' '}
            <a
              href="/register"
              className="font-medium text-blue-600 hover:underline"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

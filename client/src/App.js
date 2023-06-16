
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'




import { Route,Routes } from "react-router-dom"
import './App.css'

function App() {

  
  return ( <
    div >
    
    <
    Routes >
    <
    Route path = "/"
    element = { < Home / > }
    /> <
    Route path = "/login"
    element = { < Login / > }
    /> <
    Route path = "/register"
    element = { < Register / > }
    /> < /
    Routes > < /
    div >
);
}

export default App;


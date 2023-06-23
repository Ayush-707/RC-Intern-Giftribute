import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import MyAccount from './pages/MyAccount/MyAccount'
import MyOrders from './pages/MyOrders/MyOrders'




import { Route, Routes } from "react-router-dom"
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
        /> <
        Route path = "/my-account"
        element = { < MyAccount / > }
        /> <
        Route path = "/my-orders"
        element = { < MyOrders / > }
        /> < /
        Routes > < /
        div >
    );
}

export default App;
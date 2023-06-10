
import UserHome from './pages/User/Home'
import { Route,Routes } from "react-router-dom"
import './App.css'

function App() {

  
  return (
  <>
  

  
      <Routes>
          
            <Route path = '/' element = {<UserHome/>} />
  
        
      </Routes>
    

    
 
  </>
  );
}

export default App;


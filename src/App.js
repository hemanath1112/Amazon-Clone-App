import './App.css';
import NavBar from './Commponents/Nav/Nav'; 
import Header from './Commponents/Header/Header'; 

import Login from './Commponents/LoginPage/Login'; 
import Home from './Commponents/Home/Home'; 
import { useState } from 'react';

function App() {
  const [login, setLogin] = useState(false)

  const LoginOpen = ()=>{
    setLogin(true)
  }

  const LoginClose = ()=>{
    setLogin(false)
  }

  return (
    <div>
      {login && <Login LoginClose={LoginClose}/>}
      <Header LoginOpen={LoginOpen}/>
      <NavBar />
     
    </div>
          
      


    
  );
}

export default App;

// import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

import './App.css';
import NavBar from './Commponents/Nav/Nav'


import Header from './Commponents/Header/Header';
import Login from './Commponents/LoginPage/Login'
import { useState } from 'react';



function App() {
 
return (
        <div className='App'>
          <Header/>
          <NavBar/>
        </div>

    
 
  );
}

export default App;

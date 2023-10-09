import './App.css';
import NavBar from './Commponents/Nav/Nav'; 
import Header from './Commponents/Header/Header'; 
import Login from './Commponents/LoginPage/Login'; 
import Home from './Commponents/Home/Home'; 
import { useState } from 'react';
import Footer from './Commponents/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import AsideBar from './Commponents/AsideBar/AsideBar';
import Card from './Commponents/Card/Card';


function App() {

  return (
    <div>
     
      <Routes>
      <Route path='/asidebar' element={<AsideBar/>}/>
        <Route path='/' element={
          <>
            <Header />
            <NavBar />
            <Home/>
            <Footer/>
          </>
        }/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/card' element={
          <>
             <Header />
             <Card/>
             <Footer/>
          </>
        }/>
        
      </Routes>
    </div>
          
      


    
  );
}

export default App;

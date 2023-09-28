import React, { Fragment } from 'react'
import classes from './Nav.module.css'
import MenuIcon from '@mui/icons-material/Menu';
import { BrowserRouter as Link } from 'react-router-dom';
import AsideBar from '../AsideBar/AsideBar';
import { useState } from 'react';
import Trending from '../AsideBar/SidebarLIst/Trending';

const Nav = () => {
  const [show, setShow]= useState(false)

  const ShowHandler = ()=>{
   setShow(true)
  }
  const closeBar=()=>{
   setShow(false)
  }
  return (
    <Fragment>
        <div className={classes.Navbar}>
          
            <div className="menu" onClick={ShowHandler}>
                  <MenuIcon />
                  <span>All</span>
              </div>
        
           
            <p>Amazon miniTV</p>
            <p>sell</p>
            <p>Best Sellers</p>
            <p>Mobiles</p>
            <p>Today Deals</p>
            <p>New Releases</p>
            <p>Prime</p>
            <p>Customer Service</p>
            <p>Electonics</p>
        </div>

      {show && <div>
            <AsideBar closeBar={closeBar}/>    
      </div>}

    </Fragment>
  )
}

export default Nav
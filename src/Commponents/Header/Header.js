import React, { Fragment } from 'react'
import classes from './Header.module.css'
import SearchIcon from '@mui/icons-material/Search';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AmazonLogo from '../../assets/amazon-logo (2).png'
import { Link } from 'react-router-dom';



const Header = () => {
  return (
    <Fragment >
        <div className={classes.header}>
            <Link to={'/'}>
                <div className={classes.image} >
                        <img src={AmazonLogo}alt="" />
                        <span>.in</span>
                </div>
            </Link>
           
            <div className={classes.Adddress}>
                <FmdGoodOutlinedIcon />
                <div>
                    <p>Hello</p>
                    <h4>Select your Address</h4>
                </div>
            </div>
            <div className={classes.searchbox}>
                <input 
                    type="text"
                    id='search_box'
                    placeholder='Search Amazon.in'
                />
                <SearchIcon />
            </div>
            <div className={classes.language}>
         
                   <span>EN</span>
              
            </div>
            <Link to={'/login'}>
                 <div className={classes.sign} >
                    <p>Hello, sign in</p>
                    <h4>Account & List</h4>
                </div>
            </Link>
              
  
                 
       
    
                
            <div className={classes.order}>
                <p>Returns</p>
                <h4>& Orders</h4>
            </div>
            <Link to={'/card'}>
                <div className={classes.cart}>
                    <ShoppingCartOutlinedIcon/>
                        <div className={classes.cartCount}>
                            <span>0</span>
                            <h4>Cart</h4>
                        </div> 
                </div>
            </Link>
            
        </div>
    </Fragment>
  )
}

export default Header
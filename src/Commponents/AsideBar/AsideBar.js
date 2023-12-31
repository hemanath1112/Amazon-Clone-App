import React from 'react'
import classes from './AsideBar.module.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';
import Trending from './SidebarLIst/Trending';
import Digital from './SidebarLIst/Digital';
import Shoping from './SidebarLIst/Shoping';
import { Link } from 'react-router-dom';

const AsideBar = ({closeBar}) => {
  return (
    <div className={classes.SidebarOne}>
        <div>
            <div className={classes.closeIcon} onClick={closeBar}>
                <CloseIcon />  
            </div>
            <div className={classes.whitebar}>
                <Link to={'/login'}>
                    <div className={classes.top}>
                        <AccountCircleIcon />
                        <h3>Hello, Sign in</h3>
                    </div>
                </Link>
                
            </div>
        </div>
        <div className={classes.Sidebar} >
            <Trending />
            <Digital />
            <Shoping />
        </div>
        
    </div>
    
  )
}

export default AsideBar
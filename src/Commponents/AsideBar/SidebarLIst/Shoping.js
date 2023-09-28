import React from 'react'
import classes from '../AsideBar.module.css'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Shoping = () => {
  return (
    <div className={classes.SideText}>
        <h4>Shop By Category</h4>
        <div  className={classes.RightLoco}>
            <p><span>Mobiles, Computers</span><ChevronRightIcon/><span></span></p>
            <p><span>Tv, Appliances, Electronics</span><ChevronRightIcon/><span></span></p>
            <p><span>Men's Fashion</span><ChevronRightIcon/><span></span></p>
            <p><span>Woman's Fashion</span><ChevronRightIcon/><span></span></p>
        </div>
        <p className={classes.DwonLogo}><span>See All</span><KeyboardArrowDownIcon/></p>
    </div>
  )
}

export default Shoping
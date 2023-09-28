import React from 'react'
import classes from '../AsideBar.module.css'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Digital = () => {
  return (
    <div className={classes.SideText}>
        <h4>Digital Content And Devices</h4>
        <p>Amazon miniTV-FREE entertainment</p>
            <div className={classes.RightLoco}>
                <p><span>Echo & Alexa</span><ChevronRightIcon/><span></span></p>
                <p><span>Fire TV</span><span><ChevronRightIcon/></span></p>
                <p><span>Kindle E-Readers & eBook</span><span><ChevronRightIcon/></span></p>
                <p><span>Audible Audiobooks</span><span><ChevronRightIcon/></span></p>
                <p><span>Amazon Prime Video</span><span><ChevronRightIcon/></span></p>
                <p><span>Amazon Prime Music</span><span><ChevronRightIcon/></span></p>
            </div>
    </div>
  )
}

export default Digital
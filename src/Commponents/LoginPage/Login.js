import React from 'react'
import classes from './Login.module.css'
import Logo from '../../assets/Amazon_(company)-Logo.wine.svg'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useState } from 'react';
// import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Login = ({LoginClose}) => {
  

  return (
    <div className={classes.LoginForms}>
    <div className={classes.Login}>
        <div className={classes.LoginLogo} onClick={LoginClose}>
            <img src={Logo} alt="Amazon logo" />
        </div>
        <div className={classes.LoginDetails}>
            <h2>Sign in</h2>
                <form action="" className={classes.LoginForm}>
                    <label htmlFor="">Email or mobile phone number</label>
                    <input type="text" />
                    <button>Continue</button>
                </form>
            <p className={classes.content}>By continuing, you agree to Amazon's <span>Conditions of  Use</span> and <span>Privacy Notice.</span></p>
            <div className={classes.NeedMore}>
            <span><ArrowRightIcon/></span>
            <p >Need help?</p>
            </div>
     
        </div>
        <div className={classes.LoginNew}>
            <p>New to Amazon?</p>
            <hr />
        </div>
        <button className={classes.NewUserButton}>Create your Amazon account</button>
        <div className={classes.LoginPrivacy}>
            <p className={classes.Conditions}><span> Conditions of Use  Privacy</span><span>Notice</span><span></span>Help</p>
            <p className={classes.CopyRights}>&copy; 1996-2023, Amazon.com, Inc. or its <span>Hemanath</span></p>
        </div>
    </div>
    </div>
  )
}

export default Login
import React, { Fragment } from 'react'
import classes from './Footer.module.css'
import Logo from '../../../assets/amazon-logo (2).png'
import Language from './Language'

const FooterFirst = () => {
  return (
    <Fragment>
      <div className={classes.Fotter}>
        <div className={classes.FotterFirst}>
          <div className={classes.box}>
            <h4>Get to Know Us</h4>
            <p>About Us</p>
            <p>Careers</p>
            <p>Press Releases</p>
            <p>Amazon Science</p>
          </div>
          <div className={classes.box}>
            <h4> Connect with Us</h4>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
          </div>
          <div className={classes.box}>
            <h4>Make Money with Us</h4>
            <p>Sell on Amazon</p>
            <p>Sell under Amazon Accelerator</p>
            <p>Protect and Build Your Brand</p>
            <p>Amazon Global Selling</p>
            <p>Become an Affiliate</p>
            <p>Fulfilment by Amazon</p>
            <p>Advertise Your Products</p>
            <p>Amazon Pay on Merchants</p>
          </div>
          <div className={classes.box}>
            <h4>Let Us Help You</h4>
            <p>  COVID-19 and Amazon</p>
            <p>Your Account</p>
            <p>Returns Centre</p>
            <p>100% Purchase Protection</p>
            <p>Amazon App Download</p>
            <p>Help</p>
          </div>
        </div>
        <div className={classes.Language}>
          <div className={classes.LanguageSelection}>
            <img src={Logo} alt="" />
            <Language />
          </div>
          <div className={classes.cuntrys}>
            <p>
              <span>Australia</span>
              <span>Brazil</span>
              <span>Canada</span>
              <span>China</span>
              <span>France</span>
              <span>Germany</span>
              <span>Italy</span>
              <span>Japan</span>
              <span>Netherlands</span>
              <span>Poland</span>
              <span>Singapore</span>
              <span>Spain</span>
              <span>Turkey</span>
              <span> United Arab Emirates</span>
              <span>United Kingdom</span>
              <span> United States</span> 
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default FooterFirst



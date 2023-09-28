import React, { Fragment } from 'react'
import FooterFirst from './Footer-1/Footer'
import FooterSecond from './Footer-2/Footer-2'
import classes from './Footer.module.css'

const Footer = () => {
  return (
    <Fragment>
        <div>
            <div className={classes.BackToTop}>
                <p>Back to top</p>
            </div>
            <FooterFirst />
            <FooterSecond />
        </div>
    </Fragment>
  )
}

export default Footer
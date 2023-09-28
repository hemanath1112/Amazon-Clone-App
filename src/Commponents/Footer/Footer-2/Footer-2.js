import classes from './Footer-2.module.css'
import React from 'react'

const FooterSecond = () => {
  return (
    <div className={classes.FooterSecond}>
        <div>
            <div className={classes.LineOne}>
                <div className={classes.HoverItem}>
                    <h4>AbeBooks</h4>
                    <p>Books, art</p>
                    <p>& collectibles</p>
                </div>
                <div className={classes.HoverItem}>
                    <h4>Amazon Web Services</h4>
                    <p>Scalable Cloud</p>
                    <p>Computing Services</p>
                </div>
                <div className={classes.HoverItem}>
                    <h4>Audible</h4>
                    <p>Download</p>
                    <p>Audio Books</p>
                </div>
                <div className={classes.HoverItem}>
                    <h4>DPReview</h4>
                    <p>Digital</p>
                    <p>Photography</p>
                </div>
                <div className={classes.HoverItem}>
                    <h4>IMDb</h4>
                    <p>Movies, TV</p>
                    <p>& Celebrities</p>
                </div>
            </div>
            
            <div className={classes.LineTwo}>
                <div className={classes.HoverItems}>
                    <h4>Shopbop</h4>
                    <p>Designer</p>
                    <p>Fashion Brands</p>
                </div>
                <div className={classes.HoverItems} >
                    <h4>Amazon Business</h4>
                    <p>Everything For</p>
                    <p>Your Business</p>
                </div>
                <div className={classes.HoverItems}>
                    <h4>Prime Now</h4>
                    <p>2-Hour Delivery</p>
                    <p>on Everyday Items</p>
                </div>
                <div className={classes.HoverItems}>
                    <h4>Prime Now</h4>
                    <p>100 million songs, ad-free</p>
                    <p>Over 15 million podcast episodes</p>
                </div>
                <div>
                 
                </div>
            </div>
        </div>
        <div className={classes.EndItem}>
            <p>
                <span>Conditions of Use & Sale</span>
                <span>Privacy Notice</span>
                <span>Interest-Based Ads</span>
            </p>
            <p>&copy; 1996-2023, Amazon.com, Inc. or its <span style={{color:'rgb(238, 162, 22)'}}>Hemanath</span></p>
        </div>
    </div>
  )
}

export default FooterSecond
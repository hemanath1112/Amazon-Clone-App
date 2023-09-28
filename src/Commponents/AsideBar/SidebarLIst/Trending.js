import React from 'react'
import classes from '../AsideBar.module.css'

const Trending = () => {
  return (
    <div className={classes.SideText}>
        <h4>Trending</h4>
        <p>Best Sellers</p>
        <p>New Releases</p>
        <p>Movers and Shakers</p>
    </div>
  )
}
export default Trending
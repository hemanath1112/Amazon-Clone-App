import React from 'react'
import classes from './Home.module.css'
import { BrowserRouter as Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className={classes.Home}>
          <div>
            <Link to="/login">
            Hello
            </Link>
           <ul><Link to="/login"> <li>HOME</li></Link></ul>
          </div>
    </div>
  )
}

export default Home
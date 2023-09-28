import React from 'react'
import LanguageIcon from '@mui/icons-material/Language';
import classes from './Footer.module.css'

const Language = () => {
  return (
        <div className={classes.LanguageBox}>
            <LanguageIcon />
            <p>English</p>
        </div>

  )
}

export default Language
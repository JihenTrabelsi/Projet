import React from 'react'
import { Grid } from '@material-ui/core'

import './Footer.css'



const Footer = () => {
//   const location = useLocation();

  
    return (
      <div >
        
        <Grid container justifyContent="center" style={{ backgroundColor: '#FFFFFF' }}>

          <span className="footer-copyright">Copyright 2021 ©  |  Made by <a
            className="footer-link"
            target="_blank"
            rel="noreferrer"
            href="http://www.ceostech.fr/"
          > Ceos Tech </a>  |
            <a
              className="footer-link"
              target="_blank"
              rel="noreferrer"
              href=""
            > CGV  </a>|
            <a
              className="footer-link"
              target="_blank"
              rel="noreferrer"
              href=""
            > Mentions Légales </a></span>

        </Grid>
      </div>

    )
  }

  

export default Footer;
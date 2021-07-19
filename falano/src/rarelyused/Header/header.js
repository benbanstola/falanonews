import React, {  useState } from 'react';
import {faBars, faSignInAlt, faUserCircle} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link}  from 'react-router-dom';
import classes from './header.module.css';
import Nav from './Sidenav/sidenav';
import Logo from '../../pngLogo.png';
import Auth from '../../Authentication/index';
const Header=()=>{
    let [showNav,setShowNav]=useState(false)
    return ( 
        <div>
            <header>
                 <div className={classes.menu}>
                     <div className={classes.awesome}>
                        <FontAwesomeIcon icon={faBars}  onClick={()=>setShowNav(true)}/>
                    </div>
                    <Link to= "/" className={classes.logo}>
                        {/* Falano<strong className={classes.makingstrong}>News</strong> */}
                        <img src={Logo} alt='Logo' className={classes.logo}></img>
                    </Link>
                    
                    <div style={{alignSelf:'center',justifySelf:'end',paddingRight:'0.5rem'}}>
                        <Auth />
                    </div>
                </div>
                <Nav 
                 showNav={showNav}
                 onHideNav={()=>setShowNav(false)} />                
            </header>
        </div>
            
             );
    }

 
export default Header;
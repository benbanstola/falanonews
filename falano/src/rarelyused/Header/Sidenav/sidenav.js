import React from 'react';
import SideNav from 'react-simple-sidenav';
import SidenavItems from './sidenavitems/sidenavItems';
import classes from '../header.module.css';
const nav = (props) => {
    return ( 
        <div>
            <SideNav  showNav={props.showNav}
            onHideNav={props.onHideNav} navStyle={{backgroundColor: 'white'}} 
             >
                <p className={classes.falanonews}>FALANO NEWS</p>
                <div onClick={()=>props.onHideNav()}>
                    <SidenavItems />
                </div>
            </SideNav>
        </div>
     );
}
 
export default nav;
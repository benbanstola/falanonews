import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookReader, faHome, faInfo, faPlay, faSignOutAlt, faUserAlt, faUsers, faVideo} from '@fortawesome/free-solid-svg-icons';
import classes from '../../header.module.css';
import Logo from '../../../../logo.png';
import{useSelector} from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';

import firebase from 'firebase';
//import { connect } from 'react-redux';

const SidenavItems = () => {


    const auth=useSelector(state=>state.auth.isSignedIn)
    

    

    return (
        <div>
             <div className={classes.navitems}>
                <Link to={'/'} style={{color:'#535c68'}}>
                    <FontAwesomeIcon icon={faHome} />
                    Home
                </Link>
            </div>
            <div className={classes.navitems}>
                <Link to={'/videos'} style={{color:'#535c68'}}>
                    <FontAwesomeIcon icon={faVideo} />
                    Videos
                </Link>
            </div>
            {auth?
            <div className={classes.navitems}>
                <Link to={'/community'} style={{color:'#535c68'}}>
                    <FontAwesomeIcon icon={faUsers} />
                    Community
                </Link>
            </div>:null}
            <div className={classes.navitems}>
                <Link to={'/articles'} style={{color:'#535c68'}}>
                    <FontAwesomeIcon icon={faBookReader} />
                    News
                </Link>
            </div>
            {auth?
            <div className={classes.navitems}>
                <Link to={'/profile'} style={{color:'#535c68'}}>
                    <FontAwesomeIcon icon={faUserAlt} />
                    Profile
                </Link>
            </div>:null}
            {auth?
            <div className={classes.navitems}>
                <Link onClick={()=>firebase.auth().signOut()} style={{color:'#535c68'}}>
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    Sign Out
                </Link>
            </div>:null}
           
        </div>
    );
};



export default SidenavItems;
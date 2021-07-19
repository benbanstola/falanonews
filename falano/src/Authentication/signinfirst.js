import React from 'react';
import Authentication from './index';
import classes from './signinfirst.module.css';
const Signinfirst = () => {
    return (
    <div className={classes.maincontainer}>
        <span><p className={classes.text}>Please sign in first to continue.</p><Authentication /></span>
    </div> );
}
 
export default Signinfirst;
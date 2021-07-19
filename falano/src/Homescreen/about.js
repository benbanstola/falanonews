import React from 'react';
import classes from './about.module.css';
import Logo from '../logo.png';
const About = () => {
    return ( 
    <div className={classes.container}>
        <p className={classes.text1}>Falano News Private Limited</p>
        <p className={classes.text2}>Pokhara-9, Nepal<br/>Contact: 061-520920<br/> Email: falano@falanonews.com<br /><br /> Registration Number: 1049/075-76<br /> Department of Information and Broadcasting</p>
        
    </div> );
}
 
export default About;
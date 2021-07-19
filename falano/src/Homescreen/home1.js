import React from 'react';
import {Link} from 'react-router-dom';
import classes from './homescreen.module.css';
import video from './images/background2.mp4';
import {motion} from 'framer-motion';
const Home1 = () => {

    return(
    <div className={classes.main}>
        <div className={classes.videocontainer}>
            <div className={classes.overlay}></div>
            <video autoplay="true" loop="true" muted="true">
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        <div className={classes.videooverlay}>
                <div className={classes.contents}>
                    {/* <motion.h3 initial={{x:-550,opacity:0}} animate={{x:0,opacity:1}} transititon={{delay:0.4,mass:0.4,damping:8,when:'beforeChildren',staggeringChildren:0.4,type:'spring',stiffness:120}} className={classes.home1text1}>
                        Gandaki Chhadke
                    </motion.h3> */}
                    <motion.h3 initial={{x:-550,opacity:0}} animate={{x:0,opacity:1}} transititon={{delay:0.4,mass:0.4,damping:8,when:'beforeChildren',staggeringChildren:0.4,type:'spring',stiffness:120}} className={classes.home1text1}>
                        गण्डकी  छड्के
                    </motion.h3>
                   
                    {/* <p className={classes.home1text2} >
                    One of the most popular shows in Nepal, Falano News reports on corruption, dereliction of duty, national issues, and more.
                    </p> */}
                    <p className={classes.home1text2} >नेपालकै एक लाेकपृय कार्यक्रम, गण्डकी छड्केले भ्रष्टाचार, ढिलासुस्ति, अनियमितता र राष्ट्रिय सराेकारका बिषयहरुमा खराे बहस गर्दै आईरहेकाे छ।
                    </p>
                    <Link initial={{x:-350,opacity:0}} animate={{x:0,opacity:1}} transititon={{delay:0.4,mass:0.4,damping:8,when:'beforeChildren',staggeringChildren:0.4,type:'spring',stiffness:120}} className={classes.home1button} to='/videos'>
                    हेर्नुहोस्
                    </Link>
                </div>
        </div>
        </div>
    </div>)



}
 
export default Home1;
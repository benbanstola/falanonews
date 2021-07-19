import React, { useState } from 'react';
import classes from './home2.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import joinsvg from './images/group.svg';
import mainsvg from './images/people.svg';
import asksvg from './images/ask.svg';
import officesvg from './images/office.svg';
import Authbuttons from '../Authentication/index';
import {motion} from 'framer-motion';
const Home2 = () => {
    let [showdetails,setshowdetails]=useState(false)
    return ( 
    <div className={classes.maincontainer}>
         <div className={classes.maintitle}>
          <motion.h2 initial={{y:-250}} animate={{y:0}} transititon={{delay:0.4,mass:0.4,damping:8,when:'beforeChildren',staggeringChildren:0.4,type:'spring',stiffness:120}} className={classes.joincommunity}>Falano Community</motion.h2>
            <img src={mainsvg} className={classes.mainsvg} />
            <p className={classes.joincommunitydescription}>Start a conversation, share your consumer problems, know rules, and acquaint others</p>
            <div className={classes.authbuttoncontainer}>
                <span className={classes.authbutton}><Authbuttons /></span>
                <button className={classes.morebutton} onClick={()=>setshowdetails(!showdetails)}> {!showdetails?'Learn more':'Show less'}</button>
            </div>
        </div>
        <div className={classes.containerfordetails} style={{display:showdetails?'grid':'none'}}>
            <div className={classes.communitydetailscontainer}>
                <p className={classes.detailtitle}>Start a discussion</p>
                <img src={joinsvg} className={classes.detailsvg} />
                <p className={classes.detaildescription}>Initiate a conversation about rules, services, policies, corruption, delinquency, or any other consumer-oriented topic.</p>
            </div>
            <div className={classes.communitydetailscontainer}>
                <p className={classes.detailtitle}>Ask for help</p>
                <img src={asksvg} className={classes.detailsvg} />
                <p className={classes.detaildescription}>Stuck on some government procedure? Or don't know where a certain government office is? When will you get your printed license? Share your queries with fellow members.</p>
            </div>
            <div className={classes.communitydetailscontainer}>
                <p className={classes.detailtitle}>Report Abuse</p>
                <img src={officesvg} className={classes.detailsvg} />
                <p className={classes.detaildescription}>Report on bribes, misconduct, irresponsibility, wrongdoing by any private or public service providers. Learn what rights you can exercise on such matters.</p>
            </div>
        </div>


    </div> );
}
 
export default Home2;
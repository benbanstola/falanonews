import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import Notice1 from './notice1.jpg';
import Notice2 from './n2_1.jpg';
import Notice3 from './n2_2.jpg';
import classes from './ad.module.css';
import {Link} from 'react-router-dom';
import history from '../actions/history';
import {useDispatch,useSelector} from 'react-redux';
const Ad = () => {
    const dispatch=useDispatch()
    const shownews=useSelector(state=>state.adhandler.toShow)
    return ReactDOM.createPortal(
        <div style={{display:shownews?'block':'none'}} onClick={()=>dispatch({type:'HIDE_AD'})} className={classes.container}>
            <div className={classes.modalcontent}>
                <button className={classes.button} onClick={()=>dispatch({type:'HIDE_AD'})}>Close</button>
                <p className={classes.heading}>महत्वपूर्ण सूचना</p>
                <img src={Notice2} className={classes.noticeimage} />
                <img src={Notice3} className={classes.noticeimage} />
                <img src={Notice1} className={classes.noticeimage} />
              
            </div>
        </div>    ,
    document.querySelector('#modal')
     );
}
 
export default Ad;
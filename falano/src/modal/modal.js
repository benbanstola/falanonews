import React from 'react';
import ReactDOM from 'react-dom';
import classes from './modal.module.css';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBug} from '@fortawesome/free-solid-svg-icons';
import {useDispatch} from 'react-redux';
const Modal = (props) => { 
    let dispatch=useDispatch()
    return ReactDOM.createPortal(
        <div className={classes.container}>
            <div className={classes.modalcontent}>
                <p className={classes.text1}><FontAwesomeIcon icon={faBug} /> Error</p>
                <p className={classes.text2}>{props.text}</p>
                <button onClick={()=>dispatch({type:'NOT_NEWS_ERROR'})}  className={classes.close}>OK</button>
            </div>
        </div>,
        document.querySelector('#modal')
    )
}
 
export default Modal;
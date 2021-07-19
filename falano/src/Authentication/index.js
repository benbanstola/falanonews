import React, { useEffect } from 'react';
// import {signIn,signOut} from '../actions/index';
import {useSelector,useDispatch} from 'react-redux';
import classes from './auth.module.css';
import firebase from 'firebase';
import {getFirestore} from 'redux-firestore';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserCircle } from '@fortawesome/free-solid-svg-icons';
const FacebookAuth = () => {
    const dispatch=useDispatch()
    const isSignedIn=useSelector(state=>state.auth.isSignedIn)
    const firestore=getFirestore()
    useEffect(()=>{
       firebase.auth().onAuthStateChanged((user)=> {
        if (user) {
          dispatch({type:'SIGN_IN'})
        }
        else{
            dispatch({type:'SIGN_OUT'})
        }
      });

    },[])

    let onsignInClick = async ()=> {
        let googleprovider= new firebase.auth.GoogleAuthProvider()
        let result=await firebase.auth().signInWithPopup(googleprovider)
        if (result.user){
            let userstorageresult=await firestore.collection('users').doc(result.user.uid).set({
                firstname:result.user.displayName,
                email:result.user.email,
                photoUrl:result.user.photoURL
           })
        }
        };

    let onsignOutClick = () => {
        firebase.auth().signOut()
      };
    let renderAuthButton=()=>{
       
        if(isSignedIn){
            return <Link to="/community" style={{textDecoration:'none'}}><span className={classes.profilebutton}>Community</span></Link>
        }
        else{
            return  <button onClick={()=>onsignInClick()} className={classes.signinbutton}> Sign In </button>
        }
    }
    return ( <div>
        {renderAuthButton()}
    </div> );
}
 
export default FacebookAuth;
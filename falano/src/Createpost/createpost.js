import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import classes from './createpost.module.css';
import {createPost} from '../actions/index';
import {useDispatch,useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown, faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';
import AInput from 'react-input-autosize';


const App= ()=> {
    let [formshow,setformshow]=useState(false)
    const dispatch=useDispatch()
    const auth=useSelector(state=>state.auth.isSignedIn)
    const { register, handleSubmit, errors } = useForm(); // initialize the hook
  const onSubmit = (data) => {
    dispatch(createPost(data))
  };
  if (auth===false) return <Redirect to='/' />

  return (
      <div className={classes.maincontainer}>
        <p className={classes.heading} onClick={()=>setformshow(!formshow)}>Create a post {!formshow?<FontAwesomeIcon icon={faChevronCircleDown} style={{paddingLeft:'1rem'}}/>:<FontAwesomeIcon icon={faChevronCircleUp} style={{paddingLeft:'1rem'}}/> }</p>
        <form onSubmit={handleSubmit(onSubmit)} className={classes.formhandler} style={{display:formshow?'block':'none'}}>
            <p className={classes.inputtitles}>Title</p>
            <textarea name="title"  maxLength="300" rows="1"  ref={register({ required: true })} className={classes.formfieldstitle} /> 
            {errors.title && <p className={classes.error}>Title is required.</p>}
            <p className={classes.inputtitles}>Description</p>
            <textarea name="description"   ref={register({ required: true })} className={classes.formfieldsdescription} />
            {errors.description && <p className={classes.error}>Description is required.</p>}
            <input type="submit"  className={classes.submit}/>
        </form>
    </div>
  );
}
export default App;
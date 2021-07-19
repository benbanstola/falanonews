import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import classes from './createpost.module.css';
import {createNews} from '../actions/index';
import {useDispatch,useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import Signinfirst from '../Authentication/signinfirst';
import Modal from '../modal/modal';
import history from '../actions/history';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown, faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';


const Createnews= ()=> {
    const dispatch=useDispatch()
    const auth=useSelector(state=>state.auth.isSignedIn)
    const error=useSelector(state=>state.newserror.isError)
    const { register, handleSubmit, errors } = useForm(); // initialize the hook
    const onSubmit = (data) => {
        let description=data.descriptions.split("\n")
        description=description.filter(item=>item!='')
        let news={newstitle:data.newstitle,videotitle:data.videotitle,runtime:data.runtime,id:data.link,description:description}
        dispatch(createNews(news))
    };
 if (auth===false) return <Signinfirst />

  return (
      <div className={classes.maincontainer} style={{width:'50%',margin:'3rem auto'}}>
        <p className={classes.heading}>Create News</p>
        <form onSubmit={handleSubmit(onSubmit)} className={classes.formhandler}>

            <p className={classes.inputtitles}>Youtube Video ko id</p>
            <textarea name="link"   rows="1" ref={register({ required: true })} className={classes.formfieldsdescription} />
            {errors.id && <p className={classes.error}>Url is required.</p>}

            <p className={classes.inputtitles}>Video ko title</p>
            <textarea name="videotitle"  rows="2"  ref={register({ required: true })} className={classes.formfieldstitle} /> 
            {errors.title && <p className={classes.error}>Title is required.</p>}

            <p className={classes.inputtitles}>Video ko length</p>
            <textarea name="runtime"  rows="1"  ref={register({ required: true })} className={classes.formfieldstitle} /> 
            {errors.title && <p className={classes.error}>Length is required.</p>}

            <p className={classes.inputtitles}>News ko title</p>
            <p className={classes.inputtitles}></p>
            <textarea name="newstitle"  rows="2"  ref={register({ required: true })} className={classes.formfieldstitle} /> 
            {errors.title && <p className={classes.error}>Title is required.</p>}

            <p className={classes.inputtitles}>News ko content</p>
            <textarea name="descriptions" rows="15"  ref={register({ required: true })} className={classes.formfieldsdescription} />
            {errors.descriptions && <p className={classes.error}>Description is required.</p>}
            <input type="submit"  className={classes.submit}/>
        </form>
        {error?<Modal link={'/uploadnews'} ondismiss={()=>history.push('/uploadnews')} text={'Sorry, we could not create your post at this moment.'} />:null}
    </div>
  );
}
export default Createnews;
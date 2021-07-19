import React from 'react';
import { useForm } from 'react-hook-form';
import classes from './createpost.module.css';
import {useDispatch,useSelector} from 'react-redux';
import {createComment} from '../actions/index';
import AutosizeInput from 'react-input-autosize';
const CreateComment = ({postId}) => {
    const dispatch=useDispatch()
    const { register, handleSubmit, errors } = useForm(); // initialize the hook
    const onSubmit = (data) => {
        dispatch(createComment(data,postId))
        };
    return ( 
    <div className={classes.createcommentmaincontainer}>
         <p className={classes.comment}>Comment:</p>
        <form onSubmit={handleSubmit(onSubmit)} className={classes.formhandler}>
            <textarea name="text"   ref={register({ required: true })} className={classes.formfieldsdescription} />
            {errors.text && <p className={classes.error}>Comment is required.</p>}
            <input type="submit"  className={classes.submit}/>
        </form>

    </div> );
}
 
export default CreateComment;
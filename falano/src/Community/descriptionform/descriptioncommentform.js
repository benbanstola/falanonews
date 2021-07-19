import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import classes from '../../Createpost/createpost.module.css';
import {editComment} from '../../actions/index';
import {useDispatch} from 'react-redux';

const DescriptionCommentForm= ({Comment,setEditComment,id})=> {
    const dispatch=useDispatch()
    let [text,settext]=useState(Comment.text)
    const { register, handleSubmit, errors } = useForm(); // initialize the hook
    const onSubmit = (data) => {
        let formdata={...Comment,text:data.text}
        dispatch(editComment(id,Comment,formdata))
        setEditComment(false)
  };

  return (
      <div className={classes.maincontainer}>
        <form onSubmit={handleSubmit(onSubmit)} className={classes.formhandler}>
            <textarea name="text" value={text} onChange={e=>settext(e.target.value)} ref={register({ required: true })} className={classes.formfieldsdescription} />
            {errors.description && <p className={classes.error}>Comment is required.</p>}
            <input type="submit"  className={classes.submit}/>
            <button onClick={()=>setEditComment(false) } className={classes.cancelbutton}>Cancel</button>
        </form>
    </div>
  );
}
export default DescriptionCommentForm;
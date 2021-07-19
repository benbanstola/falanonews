import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import classes from '../../Createpost/createpost.module.css';
import {editPost} from '../../actions/index';
import {useDispatch,useSelector} from 'react-redux';

const DescriptionForm= ({description,setEdit,id})=> {
    const dispatch=useDispatch()
    let [text,settext]=useState(description)
    const { register, handleSubmit, errors } = useForm(); // initialize the hook
    const onSubmit = (data) => {
        dispatch(editPost(data.description,id))
        setEdit(false)
  };

  return (
      <div className={classes.maincontainer}>
        <form onSubmit={handleSubmit(onSubmit)} className={classes.formhandler}>
            <textarea name="description" value={text} onChange={e=>settext(e.target.value)} ref={register({ required: true })} className={classes.formfieldsdescription} />
            {errors.description && <p className={classes.error}>Description is required.</p>}
            <input type="submit"  className={classes.submit}/>
            <button onClick={()=>setEdit(false) } className={classes.cancelbutton}>Cancel</button>
        </form>
    </div>
  );
}
export default DescriptionForm;
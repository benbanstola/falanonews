import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import {useDispatch,useSelector} from 'react-redux';
import {deletePost} from '../../actions/index';
const DeleteAndEdit = (props) => {
    const user=useSelector(state=>state.firebase.auth)
    const dispatch=useDispatch()
    let deleteHandler=()=>{
        alert(props.id)
        dispatch(deletePost(props.id))

    }
    let editHandler=()=>{
        props.setEdit(true)
    }
    return (<React.Fragment>
            {user.uid===props.ownedby_id?
            <React.Fragment>
                 <span  onClick={()=>deleteHandler()}><FontAwesomeIcon icon={faTrash}/> Delete</span>
                <span onClick={()=>editHandler()} style={{paddingLeft:'1rem'}}><FontAwesomeIcon icon={faEdit} /> Edit</span>
            </React.Fragment>
            :null}
        </React.Fragment>
      );
}
 
export default DeleteAndEdit;
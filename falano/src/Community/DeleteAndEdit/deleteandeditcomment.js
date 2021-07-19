import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import {useDispatch,useSelector} from 'react-redux';
import {deleteComment} from '../../actions/index';
const DeleteAndEditComment = (props) => {
    const user=useSelector(state=>state.firebase.auth)
    const dispatch=useDispatch()
    let deleteHandler=()=>{
        dispatch(deleteComment(props.id,props.comment))
    }
    let editHandler=()=>{
        props.setEditComment(true)
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
 
export default DeleteAndEditComment;
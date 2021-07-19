import React, { useState } from 'react';
import classes from '../community.module.css';
import {useDispatch,useSelector} from 'react-redux';
import {upVote,cancelupVote,downVote,canceldownVote} from '../../actions/index';
import { faArrowDown, faArrowUp} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const VoteButtons = ({id,votes,likedby,dislikedby}) => {
    const user=useSelector(state=>state.firebase.auth)
    //let [arrowchecked,setarrowchecked]=useState(false)
    const dispatch=useDispatch()
    let arrowupcolor='grey'
    let arrowdowncolor='grey'
    let liked=likedby.find(item=>item===user.uid)
    let disliked=dislikedby.find(item=>item===user.uid)
    liked?arrowupcolor='red':arrowupcolor='grey'
    disliked?arrowdowncolor='blue':arrowdowncolor='grey'

    let clickupHandler= ()=>{
        liked?dispatch(cancelupVote(id,disliked)):dispatch(upVote(id,disliked))
    }
    let clickdownHandler=()=>{
       disliked?dispatch(canceldownVote(id,liked)):dispatch(downVote(id,liked))
    }
    return (
        <div> 
             {/* {console.log({arrowchecked,id,votes,likedby,arrowdowncolor,arrowupcolor})} */}
            <p className={classes.upvote}><FontAwesomeIcon icon={faArrowUp} onClick={()=>clickupHandler()}  style={{color:arrowupcolor}}/></p>
            <p className={classes.votecount}>{votes}</p>
            <p className={classes.downvote}><FontAwesomeIcon icon={faArrowDown}  onClick={(e)=>clickdownHandler(e)} style={{color:arrowdowncolor}}/></p>
        </div>
     );
}
 
export default VoteButtons;
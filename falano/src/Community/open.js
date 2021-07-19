import React,{ useState,useEffect }from 'react';
import moment from 'moment';
import classes from './community.module.css';
import {  faComment, faFlag} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useFirestoreConnect} from 'react-redux-firebase';
import {useDispatch,useSelector} from 'react-redux';
import {getsinglePost} from '../actions/index';
import Spinner from '../rarelyused/Spinner/spinner';
import {Redirect} from 'react-router-dom';
import CreateComment from '../Createpost/createcomment';
import VoteButtons from './Votebuttons/votebuttons';
import DeleteAndEdit from './DeleteAndEdit/deleteandedit';
import DeleteAndEditComment from './DeleteAndEdit/deleteandeditcomment';
import DescriptionForm from './descriptionform/descriptionform';
import DescriptionCommentForm from './descriptionform/descriptioncommentform';
const Open = (props) => {
    let [edit,setEdit]=useState(false)
    let [editcomment,setEditComment]=useState(false)
    useFirestoreConnect(['posts']) 
    // const dispatch=useDispatch()
    // useEffect(()=>{
    //     dispatch(getsinglePost(props.match.params.id))
    // },[])
    // const posts=useSelector(state=>state.singlepost.data)
    const auth=useSelector(state=>state.auth.isSignedIn)
    let post=useSelector((state) => state.firestore.data.posts)
    post=post?post[props.match.params.id]:null
    if (auth===false) return    <Redirect to='/' />
    let renderPosts=()=>{
        return <div className={classes.postcontainer}>
                <div className={classes.votecontainer}> 
                    <VoteButtons id={props.match.params.id} votes={post.votes} likedby={post.likedby} dislikedby={post.dislikedby}/>
                </div>
                <div className={classes.metacontainer}>
                    <p className={classes.username}>Posted by {post.ownedby_name} {moment(post.created_at.toDate()).fromNow()}</p>
                </div>
                <div className={classes.descriptioncontainer}>
                    <p className={classes.title}>{post.title}</p>
                    {edit?
                            <DescriptionForm setEdit={setEdit} description={post.description} id={props.match.params.id}/>
                            :
                            <p className={classes.description}>{post.description.length>440?post.description.slice(0,440)+'.....':post.description}</p>
                        }
                </div>
                <div className={classes.commentcontainer}>
                    <span><FontAwesomeIcon icon={faComment}/> {post.comments.length} Comments</span>
                    <span style={{paddingLeft:'1rem'}}><FontAwesomeIcon icon={faFlag}/> Report</span>
                    <span style={{paddingLeft:'1rem'}}><DeleteAndEdit setEdit={setEdit} id={props.match.params.id} ownedby_id={post.ownedby_id} /></span>
                </div>
                <div className={classes.commentform}>
                    <CreateComment postId={props.match.params.id}/>
                </div>
                {post.comments.length>0?post.comments.map(comment=>
                    <div className={classes.commentlistcontainer}>
                        <img src='https://source.unsplash.com/random' alt={comment.ownedby_id} className={classes.commentimg} />
                        <div className={classes.commentmeta}>
                            <span >{comment.ownedby_name} {moment(comment.created_at.toDate()).fromNow()}</span>
                            <span style={{paddingLeft:'1rem'}}><DeleteAndEditComment setEditComment={setEditComment} id={props.match.params.id} comment={comment} ownedby_id={comment.ownedby_id} /></span>
                            <span style={{paddingLeft:'1rem'}}><FontAwesomeIcon icon={faFlag}/> Report</span>
                        </div>
                        {editcomment?
                            <DescriptionCommentForm setEditComment={setEditComment} Comment={comment} id={props.match.params.id}/>
                            :
                            <p className={classes.commenttext}>{comment.text}</p>
                            
                        }
                    </div>
                    
                    
                ):null}
            </div>
        
    }
    return ( 
    <div className={classes.opencommunitycontainer}>
        {post?renderPosts():<Spinner />}
    </div> );
}
 
export default Open;

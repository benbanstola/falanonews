import React from 'react';
import moment from 'moment';
import classes from './community.module.css';
import { faArrowDown, faArrowUp, faComment, faFlag} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router';
import {Link} from 'react-router-dom';
import Createpost from '../Createpost/createpost';
import VoteButtons from './Votebuttons/votebuttons';

const Rendercommunity = ({posts}) => {
    let renderPosts=()=>{
        return posts.map(post=>(
            <Link to={'/community/'+post.id} style={{textDecoration:'none'}}>
                <div className={classes.postcontainer}>
                    <div className={classes.votecontainer} onClick={e=>e.preventDefault()}> 
                         <VoteButtons id={post.id} votes={post.votes} likedby={post.likedby} dislikedby={post.dislikedby}/>
                    </div>
                    <div className={classes.metacontainer}>
                        <p className={classes.username}>Posted by {post.ownedby_name} {moment(post.created_at.toDate()).fromNow()}</p>
                    </div>
                    <div className={classes.descriptioncontainer}>
                        <p className={classes.title}>{post.title}</p>
                        <p className={classes.description}>{post.description.length>440?post.description.slice(0,440)+'.....':post.description}</p>
                    </div>
                    <div className={classes.commentcontainer}>
                        <span><FontAwesomeIcon icon={faComment}/> {post.comments.length} Comments</span> 
                        <span style={{paddingLeft:'1rem'}}><FontAwesomeIcon icon={faFlag}/> Report</span>
                    </div>
                </div>
            </Link>
        ))
    }
    return ( 
    <div className={classes.maincontainer}>
        <Createpost />
        <div>
            {renderPosts()}
        </div>
    </div> );
}
 
export default Rendercommunity;
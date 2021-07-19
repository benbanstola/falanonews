import React from 'react';
import Rendercommunity from '../Community/renderCommunity';
import {useSelector} from 'react-redux';
import {useFirestoreConnect} from 'react-redux-firebase';
import Spinner from '../rarelyused/Spinner/spinner';
import {Redirect} from 'react-router-dom';
import classes from './profile.module.css';
const Profile = () => {
    useFirestoreConnect(['posts']) 
    const posts = useSelector((state) => state.firestore.ordered.posts)
    const user=useSelector(state=>state.firebase.auth)
    const auth=useSelector(state=>state.auth.isSignedIn)
    const cox=useSelector(state=>console.log(state))
    if (auth===false) return <Redirect to='/' />
    return ( 
        <div>
            <div className={classes.userinfocontainer}>
                <img src={user.photoURL} className={classes.userphoto} alt='profile photo' />
                <p className={classes.name}>{user.displayName}'s Posts</p>
            </div>
           {posts?<Rendercommunity posts={Object.values(posts).filter(post=>post.ownedby_id===user.uid)} />:<Spinner/>}
        </div> );
}
 
export default Profile;
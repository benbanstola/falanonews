import React from 'react';
import Rendercommunity from './renderCommunity';
import {useSelector} from 'react-redux';
import {useFirestoreConnect} from 'react-redux-firebase';
import Spinner from '../rarelyused/Spinner/spinner';
import {Redirect} from 'react-router-dom';
const Community = () => {
    useFirestoreConnect(['posts']) 
    const posts = useSelector((state) => state.firestore.ordered.posts)
    // console.log(useSelector(state=>state))
    const auth=useSelector(state=>state.auth.isSignedIn)
    if (auth===false) return <Redirect to='/' />
    return (<div>
        {posts?<Rendercommunity posts={Object.values(posts)} />:<Spinner/>}
    </div>  );
}
 
export default Community
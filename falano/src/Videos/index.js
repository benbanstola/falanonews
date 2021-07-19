import React,{useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useFirestoreConnect} from 'react-redux-firebase';
import Renderlist from './renderlist';
import Spinner from '../rarelyused/Spinner/spinner';
const Videos = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    useFirestoreConnect(['videos']) 
    const videos = useSelector((state) => state.firestore.data.videos)
    return ( 
    <div>
        {console.log(props)}
        {videos?<Renderlist videos={Object.values(videos)} directurl={props.history.location.state?props.history.location.state.url:null} />:<Spinner />}
    </div> );
}
 
export default Videos;
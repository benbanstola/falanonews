import React, { useEffect, useState } from 'react';
import RenderStories from './renderStories';
import Spinner from '../../rarelyused/Spinner/spinner';
import {Link} from 'react-router-dom';
import classes from './stories.module.css';
import {useSelector} from 'react-redux';
import {useFirestoreConnect} from 'react-redux-firebase';
const WorldStories = ({tosliceprops}) => {
  useFirestoreConnect(['news']) 
  const data = useSelector((state) => state.firestore.ordered.news)
    return ( 
        <div className={classes.maincontainer} >
             {data?<RenderStories stories={tosliceprops?Object.values(data).sort((x,y)=>y.publishedAt-x.publishedAt).slice(0,5):Object.values(data)} title={'शीर्ष समाचार'} />:<Spinner />}
            {tosliceprops?<Link  className={classes.viewmore} to="/articles/"> <p style={{textAlign:'center'}}>थप पढ्नुहोस्</p></Link>:null}
        </div>
     );
}
 
export default WorldStories;
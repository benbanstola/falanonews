import React, { useState,useEffect } from 'react';
import Spinner from '../../rarelyused/Spinner/spinner';
import classes from './stories.module.css';
import {useSelector} from 'react-redux';
import {useFirestoreConnect} from 'react-redux-firebase';
import Renderlist from './renderStories';
import {Link} from 'react-router-dom';
const StoriesOpen = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  useFirestoreConnect(['news']) 
  const data = useSelector((state) => state.firestore.ordered.news)
  let renderRelated=()=>{
    let selectedIndex=data.indexOf(Object.values(data).find(story=>story.id===props.match.params.id))
    let related=[]
    let inc=selectedIndex+1
    let dec=selectedIndex-1
    for(let i=0;i<=data.length;i++){
    if(dec>=0){
        related.push(data[dec])
        dec=dec-1
    }
    if(inc<=data.length-1){
        related.push(data[inc])
        inc=inc+1
    }
    }
    return <Renderlist stories={related.slice(0,4)} title={'थप पढ्नुहोस्'} />
  }
    let renderStory=()=>{
        let story=Object.values(data).find(story=>story.id===props.match.params.id)
        {console.log(Object.values(data))}
        return <div className={classes.opencontainer}>
           <p className={classes.opentitle}>{story.title}</p>
              <div className={classes.thumbnailcontainer} style={{marginBottom:'1rem'}}>
                <img src={`https://img.youtube.com/vi/${story.id}/hqdefault.jpg`} className={classes.openimage} />
              </div>
              {story.description.map(content=><p className={classes.opencontent}>{content}</p>)}
              <Link  to={{pathname:`/videos`,state:{url:story}}} className={classes.morebutton}>भिडियो हेर्न यहाँ क्लिक गर्नुहोस्</Link>
        </div>
    }
    return (
        <div>
            {data?renderStory():<Spinner />}
            {data?<div className={classes.opencontainer}>{renderRelated()}</div>:<Spinner />}
        </div>
      );
}
 
export default StoriesOpen;
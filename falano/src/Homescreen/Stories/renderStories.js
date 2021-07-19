import React, { useEffect, useState } from 'react';
import classes from './stories.module.css';
import {Link,useLocation} from 'react-router-dom';
import moment from 'moment';

const Renderlist = ({stories,title}) => {
    let location=useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [location])
    let renderVideos=()=>{
        return stories.sort((x,y)=>y.publishedAt-x.publishedAt).map((story)=>
        <Link to={'/articles/'+story.id} style={{textDecoration:'none'}}>
            <div className={classes.videolistcontainer} key={story.title}>
                <div className={classes.thumbnailcontainer}>
                    <img className={classes.thumbnail} src={`https://img.youtube.com/vi/${story.id}/mqdefault.jpg`} alt={story.title}/>
                </div>
                <p className={classes.datepublished}>अपलोड: {moment(story.publishedAt.toDate()).format("MMM Do YY")}</p>
                <p className={classes.title}>{story.title}</p>
            </div>
        </Link>
        )
    }
    return ( 
    <div>
        <p className={classes.sectiontitle}>{title}</p>
        <hr  className={classes.horizontalline}/>
        <div className={classes.videolistmaincontainer}>
            {renderVideos()}
        </div>
    </div> );
}
 
export default Renderlist;
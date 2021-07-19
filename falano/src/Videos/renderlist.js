import React, { useEffect, useState } from 'react';
import classes from './videos.module.css';
import { faPlay} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';

const Renderlist = ({videos,directurl}) => {
    let [url,seturl]=useState(directurl?directurl.id:videos.sort((x,y)=>y.datepublished-x.datepublished)[0].id)
    let [title,setTitle]=useState(directurl?videos.find(video=>video.id===directurl.id).title:videos.sort((x,y)=>y.datepublished-x.datepublished)[0].title)

    let renderPlayer=()=>(<div>
        <iframe title={title} frameBorder="0" muted allowFullScreen allow="autoplay" className={classes.iframe} src={`https://www.youtube.com/embed/${url}?autoplay=1&mute=1`} />
        <p className={classes.nowplaying}>तपाई हेर्दै हुनुहुन्छ</p>
        <p className={classes.titleplaying}>{title}</p>
        </div>
    )
    let playHandler=(video)=>{
        seturl(video.id)
        setTitle(video.title)
        document.getElementById('titlebar').scrollIntoView()
    }
    let renderVideos=()=>{
        let selectedIndex=videos.indexOf(videos.find(video=>url===video.id))
        let relatedvideos=[]
        let inc=selectedIndex+1
        let dec=selectedIndex-1
        for(let i=0;i<=videos.length;i++){
        if(dec>=0){
            relatedvideos.push(videos[dec])
            dec=dec-1
        }
        if(inc<=videos.length-1){
            relatedvideos.push(videos[inc])
            inc=inc+1
        }
        }
        return relatedvideos.sort((x,y)=>y.datepublished-x.datepublished).map((video)=>
        <div className={classes.videolistcontainer} key={video.id} onClick={()=>playHandler(video)}>
            <div className={classes.thumbnailcontainer}>
                <img className={classes.thumbnail} src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`} alt={video.title}/>
                <FontAwesomeIcon icon={faPlay} className={classes.playicon}/>
            </div>
            <p className={classes.duration}>समय: {video.runtime} मिनेट</p>
            <p className={classes.datepublished}>अपलोड: {moment(video.datepublished.toDate()).format("MMM Do YY")}</p>
            <p className={classes.title}>{video.title}</p>
        </div>)
    }
    return ( 
    <div style={{backgroundColor:'#212121'}}>
        {renderPlayer()}
        <p className={classes.relatedvideos}>अब हेर्नुहोस्</p>
        <div className={classes.videolistmaincontainer}>
            {renderVideos()}
        </div>
    </div> );
}
 
export default Renderlist;
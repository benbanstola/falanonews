import React from 'react';
import Home1 from './home1';
import Home2 from './home2';
import Adddata from '../firebase/addwords';
import classes from './homescreen.module.css';
import Home3 from './home3';
import About from './about';
import WorldStories from './Stories/worldstories';
import Notice from '../ad/ad';

const Homescreen = () => {
    return (<div className={classes.main}>
        <Home1 />
        <Notice />
        <WorldStories tosliceprops />
        <Home2 />
        <Home3 />
        <About />
       
    </div>  );
}
 
export default Homescreen;
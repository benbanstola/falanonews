import React, { useState } from 'react';
import classes from './spinner.module.css';
const Spinner = () => {
    let [error,seterror]=useState(false)
    return (<div className={classes.spinnercontainer}>
        {/* {setTimeout(() => {
            seterror(true)
        }, 30000)} */}
        <span className={classes.spinner}></span>     
        {/* {error?<span className={classes.loadtext}>Sorry, we are experiencing some issues.</span>:<span className={classes.spinner}></span>}  */}
    </div>
     );
}
 
export default Spinner;
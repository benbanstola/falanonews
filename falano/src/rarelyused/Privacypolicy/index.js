import React from 'react';
import classes from './styles.module.css';
const Privacypolicy = () => {
    return (
    <div className={classes.container}>
        <h2 className={classes.heading}>Terms of Service</h2><br /><br />
        <p className={classes.text}>Children under the age of 13 are not allowed to join the Falano community. The content posted in the community is the personal view of the post owner and we can not verify the veracity of any contents. You are prohibited to post any contents that affect other users. Neither you should share any inappropriate content.</p><br />
        <h2 className={classes.heading}>Privacy policy and Data deletion</h2><br /><br />
        <h4 className={classes.subheading}>What kind of information do we collect?</h4>
        <p className={classes.text}>We collect your name, email, and photo when you sign up for the Falano community. We also collect information about your activity in the community. This includes your posts, comments, and likes or dislikes.</p><br />
        <h4 className={classes.subheading}>How do we use this information?</h4>
        <p className={classes.text}>We do not conduct any operations with your information. Your name and photo are shown along with your posts. If necessary, we will contact you through the email you provided.</p><br />
        <h4 className={classes.subheading}>How is this information shared?</h4>
        <p className={classes.text}>Your posts and comments, along with your name and photo is visible to everyone in the community. We do not share your information with any third parties.</p><br />
        <h4 className={classes.subheading} style={{color:'rebeccapurple'}}>How can I delete information about me?</h4>
        <p className={classes.text}>You can submit a request for your data deletion by mailing us at support@falanonews.com.</p><br />

    </div>  );
}
 
export default Privacypolicy;
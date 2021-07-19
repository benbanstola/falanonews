import history from './history';
import Modal from '../modal/modal';
import firebase from '../firebase/index';
import {useDispatch} from 'react-redux';

export const createPost=(post)=>async (dispatch,getState,{getFirestore})=>{
  const firestore=getFirestore()
  const firebase=getState().firebase.auth
  try{
    await firestore.collection('posts').add({
    ...post,
    votes:0,
    ownedby_name:firebase.displayName,
    ownedby_id:firebase.uid,
    created_at:new Date(),
    comments:[],
    likedby:[],
    dislikedby:[]
    })
    history.push(`/community`)
  }
  catch(e){
   <Modal link={'/community'} ondismiss={()=>history.push('/community')} text={'Sorry, we could not create a post at this moment.'} />
  }
 

}
export const createNews=(data)=>async (dispatch,getState,{getFirestore})=>{
  
  const firestore=getFirestore()
  try{
    await firestore.collection('news').add({
    title:data.newstitle,
    id:data.id,
    description:data.description,
    publishedAt:new Date(),
    })
    await firestore.collection('videos').add({
      title:data.videotitle,
      id:data.id,
      runtime:data.runtime,
      datepublished:new Date(),
      })
    history.push(`/articles`)
  }
  catch(e){
    console.log(e)
   dispatch({type:'NEWS_ERROR'})
  }
 

}
export const editPost=(description,id)=>async (dispatch,getState,{getFirestore})=>{
  const firestore=getFirestore()
  const firebase=getState().firebase.auth
  try{
    await firestore.collection('posts').doc(id).update({
      description:description
    })
    history.push(`/community/${id}`)
  }
  catch(e){
    return <Modal link={'/community'} ondismiss={()=>history.push('/community')} text={'Sorry, we could not update your post at this moment.'} />
  }
  

}
export const getsinglePost=id=>async (dispatch)=>{
  try{
    let result=await firebase.firestore().collection('posts').doc(id).get()
    dispatch({type:'FETCH_SINGLEPOST',payload:result.data()})
  }
  catch(e){
    return <Modal link={'/community'} ondismiss={()=>history.push('/community')} text={'Sorry, we could not load the post. your post at this moment.'} />
  }
  

}
export const createComment=(comment,postId)=>async (dispatch,getState,{getFirestore})=>{
  const firestore=getFirestore()
  const firebase=getState().firebase.auth
  
  let commentdata={
    ...comment,
    ownedby_name:firebase.displayName,
    ownedby_id:firebase.uid,
    created_at:new Date(),
  }
  try{
    await firestore.collection('posts').doc(postId).update({
      comments: firestore.FieldValue.arrayUnion(commentdata)
      
    })
    history.push(`/community/${postId}`)
  }
  catch(e){
    <Modal link={'/community'} ondismiss={()=>history.push('/community')} text={'Sorry, we could not post your comment at this moment.'} />
  }


}
export const editComment=(postId,oldcomment,newcomment)=>async (dispatch,getState,{getFirestore})=>{
  const firestore=getFirestore()
  const firebase=getState().firebase.auth
  try{
    await firestore.collection('posts').doc(postId).update({
      comments:firestore.FieldValue.arrayRemove(oldcomment)
    })
    await firestore.collection('posts').doc(postId).update({
      comments:firestore.FieldValue.arrayUnion(newcomment)
    })
    history.push(`/community/${postId}`)
  }
  catch(e){
    alert(e)
    return <Modal link={'/community'} ondismiss={()=>history.push('/community')} text={'Sorry, we could not update your post at this moment.'} />
  }
  

}
export const deletePost=(postId)=>async (dispatch,getState,{getFirestore})=>{
  const firestore=getFirestore()
  const firebase=getState().firebase.auth
  try{
    await firestore.collection('posts').doc(postId).delete()
    history.push(`/community`)
  }
  catch(e){
    <Modal link={'/community'} ondismiss={()=>history.push('/community')} text={'Sorry, we could not delete the post at this moment.'} />
  }
  

}
export const deleteComment=(postId,comment)=>async (dispatch,getState,{getFirestore})=>{
  const firestore=getFirestore()
  const firebase=getState().firebase.auth
  try{
    await firestore.collection('posts').doc(postId).update({
      comments:firestore.FieldValue.arrayRemove(comment)
    })
    history.push(`/community/${postId}`)
  }
  catch(e){
    <Modal link={'/community'} ondismiss={()=>history.push('/community')} text={'Sorry, we could not delete the post at this moment.'} />
  }
 

}
export const upVote=(postId,dislikecheck)=>async (dispatch,getState,{getFirestore})=>{
  const firestore=getFirestore()
  const firebase=getState().firebase.auth
  let increment=1
  dislikecheck?increment=2:increment=1
  let likedby=firebase.uid
  try{
    if (dislikecheck){
      await firestore.collection('posts').doc(postId).update({
        dislikedby: firestore.FieldValue.arrayRemove(dislikecheck)
      })
    }
    await firestore.collection('posts').doc(postId).update({
      likedby: firestore.FieldValue.arrayUnion(likedby)
    })
    await firestore.collection('posts').doc(postId).update({
      votes: firestore.FieldValue.increment(increment)
    })
   
  }
  catch(e){
    <Modal link={'/community'} ondismiss={()=>history.push('/community')} text={'Sorry, this functionality is not working at this moment.'} />
  }

}
export const downVote=(postId,likecheck)=>async (dispatch,getState,{getFirestore})=>{
  const firestore=getFirestore()
  const firebase=getState().firebase.auth
  let increment=-1
  likecheck?increment=-2:increment=-1
  let dislikedby=firebase.uid

  try{
    if (likecheck){
      await firestore.collection('posts').doc(postId).update({
        likedby: firestore.FieldValue.arrayRemove(likecheck)
      })
    }
    await firestore.collection('posts').doc(postId).update({
      dislikedby: firestore.FieldValue.arrayUnion(dislikedby)
    })
    await firestore.collection('posts').doc(postId).update({
      votes: firestore.FieldValue.increment(increment)
    })
   
  }
  catch(e){
    <Modal link={'/community'} ondismiss={()=>history.push('/community')} text={'Sorry, this functionality is not working at this moment.'} />
  }

}
export const cancelupVote=(postId)=>async (dispatch,getState,{getFirestore})=>{
  const firestore=getFirestore()
  const firebase=getState().firebase.auth
  
  let likedby=firebase.uid

  try{
    await firestore.collection('posts').doc(postId).update({
      likedby: firestore.FieldValue.arrayRemove(likedby)
    })
    await firestore.collection('posts').doc(postId).update({
      votes: firestore.FieldValue.increment(-1)
    })
   
  }
  catch(e){
    <Modal link={'/community'} ondismiss={()=>history.push('/community')} text={'Sorry, this functionality is not working at this moment.'} />
  }

}
export const canceldownVote=(postId)=>async (dispatch,getState,{getFirestore})=>{
  const firestore=getFirestore()
  const firebase=getState().firebase.auth
  
  let dislikedby=firebase.uid

  try{
    await firestore.collection('posts').doc(postId).update({
      dislikedby: firestore.FieldValue.arrayRemove(dislikedby)
    })
    await firestore.collection('posts').doc(postId).update({
      votes: firestore.FieldValue.increment(1)
    })
   
  }
  catch(e){
    <Modal link={'/community'} ondismiss={()=>history.push('/community')} text={'Sorry, this functionality is not working at this moment.'} />
  }

}



export const signIn = () => {

  return {
    type: 'SIGN_IN'
  };
};

export const signOut = () => {
  return {
    type: 'SIGN_OUT'
  };
};

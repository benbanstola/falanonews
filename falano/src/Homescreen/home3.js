import React,{useState,useEffect} from 'react';
import classes from './home3.module.css';
import {motion,AnimatePresence} from 'framer-motion';
const Home3 = () => {
    let [selected,setSelected]=useState(1)
    let cards=[
        {
            id:1,
            title:'1',
            description:`The first time in Nepal's history a public office paid reparation to any citizen after Apil Tripathi, representing Falano News, prosecuted Nepal Telecom for delaying critical customer-care services.`
        },
        {   
            id:2,
            title:'2',
            description:` Multi-billion projects halted as Falano News reported on their illegal operating methods. `
        },
        {
            id:3,
            title:'8',
            description:'The number of people exposed taking bribes, red-handed in Pokhara. Rarely has any Nepali media uncovered public officials for accepting bribes.'
        },
        {
            id:4,
            title:'12',
            description:'Schools in Pokhara, where Falano News helped wronged and abused students.'
        },
        {
            id:5,
            title:'25',
            description:'Government offices(about 50%) where Falano News reported misuse of power, corruption, venality, and misconduct.  Authorities reprimanded the offenders on most occasions.'
        },
        {
            id:6,
            title:'2M',
            description:'Funds collected for the relief of poor, disabled, and abused.'
        },
      
    ]
  
    let renderCards=()=>{
        return cards.map(card=>
                <AnimatePresence>
                <motion.div exit={{opacity:0}} className={selected==card.id?classes.cardcontainermain:classes.cardcontainersub} id={card.id} onClick={()=>setSelected(card.id)}>
                    <motion.p initial={{x: -300}} animate={{x:0}} transititon={{yoyo:'infinity',delay:0.4,mass:0.4,damping:8,when:'beforeChildren',staggeringChildren:0.4,type:'spring',stiffness:120}} className={classes.title}>{card.title}</motion.p>
                    <motion.p initial={{y:-250}} animate={{y:0}} transititon={{delay:0.4,mass:0.4,damping:8,when:'beforeChildren',staggeringChildren:0.4,type:'spring',stiffness:120}} className={classes.description}>{card.description}</motion.p>
                </motion.div>
                </AnimatePresence>
        )
    }
    let clickHandler=(counter)=>{
        setSelected(selected+counter)
    }
    return(
    <div className={classes.container}>
        <motion.h3 initial={{y:-250}} animate={{y:0}} transititon={{delay:0.4,mass:0.4,damping:8,when:'beforeChildren',staggeringChildren:0.4,type:'spring',stiffness:120}} className={classes.heading}>
           Accomplishments
        </motion.h3>
        <p className={classes.heading2}> through the years</p>
        {renderCards()}
        <div className={classes.buttons}>
            <button className={classes.buttonPrevious} onClick={()=>selected>1?clickHandler(-1):null}>Previous</button>
            <button className={classes.buttonNext} onClick={()=>selected<6?clickHandler(1):null}>Next</button>
        </div>
    </div>)
}
 
export default Home3;
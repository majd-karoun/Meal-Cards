import React, {useState} from 'react';
import {motion} from "framer-motion"

const AddMealButton = (props) => {
 

 

  return (
    <motion.button 
    disabled={props.buttonClicked}
    animate={{
      backgroundColor: props.buttonClicked ? "grey" : "",
    }}
    transition={{
      duration: 0.8,
      type: 'tween'
     }}
     initial={{
      opacity: 1
    }}
   
    className="button add-meal-btn" onClick={props.action}>{props.buttonClicked ? "Meal Added": "+ Add To my meals" }</motion.button>
  )
}

export default AddMealButton;
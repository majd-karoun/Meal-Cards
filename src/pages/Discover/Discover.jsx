import React from 'react'
import FilterPreview from '../../Components/FilterPreview/FilterPreview'
import MealPreview from '../../Components/MealPreview/MealPreview'
import SearchPreview from '../../Components/SearchPreview/SearchPreview'
import './Discover.css';
import {motion} from "framer-motion"

const Discover = ({searchUrl, setMyMeals}) => {
  return (
    <motion.div 
    initial={{
      opacity: 0,
    }}
    animate={{
      opacity: 1
    }}
    transition={{
      duration: 0.8,
      type: 'tween'
     }}
    className='safe-view discover-container'>
      <SearchPreview searchUrl={searchUrl}/>
      <MealPreview setMyMeals={setMyMeals}/>
      <FilterPreview />
    </motion.div>
  )
}

export default Discover
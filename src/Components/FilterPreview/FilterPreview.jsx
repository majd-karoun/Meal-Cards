import React, {useState, useEffect, useCallback} from 'react';
import MealCard from '../MealCard/MealCard';
import './FilterPreview.css'
import {MdOutlineFreeBreakfast} from 'react-icons/md'
import {TbMeat} from 'react-icons/tb'
import {TbFish} from 'react-icons/tb'
import {RiCake3Line} from 'react-icons/ri'
import {GiBroccoli} from 'react-icons/gi'
import {TiWaves} from 'react-icons/ti'
import {GiChickenOven} from 'react-icons/gi'



const FilterPreview = () => {
    const [items, setItems] = useState([])
    const [selectedCatagory, setSelectedCatagaroy] = useState('Dessert')

    const fetchData = useCallback(() =>{
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCatagory}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data.meals)
          setItems(data.meals);
        });
    },[selectedCatagory])


    useEffect(() => {
        fetchData()
    },[fetchData])

   

  return (
    <div className='row safe-view filter-preview'>
        <div className="container filter-menu">
          <ul>
            <li className={selectedCatagory === 'Dessert' ? 'active': ''} onClick={() => setSelectedCatagaroy('Dessert')}>
              <RiCake3Line/>
              <h4>Dessert</h4>
              </li>
            
              <li className={selectedCatagory === 'Breakfast' ? 'active': ''} onClick={() => setSelectedCatagaroy('Breakfast')}>
              <MdOutlineFreeBreakfast/>
              <h4>Breakfast</h4></li>


              <li className={selectedCatagory === 'Vegetarian' ? 'active': ''} onClick={() => setSelectedCatagaroy('Vegetarian')}>
              
              <GiBroccoli/>
              
              <h4>Vegetarian</h4></li>

              <li className={selectedCatagory === 'Seafood' ? 'active': ''} onClick={() => setSelectedCatagaroy('Seafood')}>
              <TbFish/>
              <h4>Seafood</h4></li>

              <li className={selectedCatagory === 'Beef' ? 'active': ''} onClick={() => setSelectedCatagaroy('Beef')}>
              <TbMeat/>
              <h4>Beef</h4></li>


              <li className={selectedCatagory === 'Chicken' ? 'active': ''} onClick={() => setSelectedCatagaroy('Chicken')}>
              <GiChickenOven/>
               <h4>Chicken</h4></li>

             <li className={selectedCatagory === 'Pasta' ? 'active': ''} onClick={() => setSelectedCatagaroy('Pasta')}>
              <TiWaves/>
              <h4>Pasta</h4></li>

          </ul>
        </div>
       <div className="meal-cards-container">
       {items.map((res) => {
        return <MealCard img={res.strMealThumb} title={res.strMeal} id={res.idMeal}/>
       })}
      
       </div>
     

        
        
    </div>
  )
}

export default FilterPreview
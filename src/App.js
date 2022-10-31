import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav';
import Discover from './pages/Discover/Discover';
import MealPage from './pages/MealPage/MealPage';
import MyMeals from './pages/My Meals/MyMeals';


const App = () => {
    const [searchUrl, setSearchUrl] = useState('')
    const [myMeals, setMyMeals] = useState(() => {
      const localMeals = localStorage.getItem('my-meals')
      return localMeals ? JSON.parse(localMeals) : [];
    })

  
    

    


  const setMyMealsHandler = (mealId) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
  setMyMeals((prev) => {
    return [...prev, url]
    
  })
  console.log(myMeals)
  }

  useEffect(()=> {
    localStorage.setItem('my-meals', JSON.stringify(myMeals))
  },[myMeals])

  return(
    <>
    <Nav setSearchUrl={setSearchUrl} searchUrl={searchUrl}/>
    
    <Routes>
      
      <Route path='/discover' element={<Discover setMyMeals={setMyMealsHandler} searchUrl={searchUrl}/>} exact />
      <Route path='/mymeals' element={<MyMeals setMyMeals={setMyMealsHandler} myMeals={myMeals}/>} exact/>
      <Route path='/mealpage/:id' element={<MealPage setMyMeals={setMyMealsHandler}/>} exact/>
       
     
    </Routes> 
    <Footer/>
    </>
       
  )
}


export default App;
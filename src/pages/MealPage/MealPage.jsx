import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";


import "./MealPage.css";
import AddMealButton from "../../UI Elements/Button";

let vid;

const MealPage = ({setMyMeals}) => {
  const [item, setItem] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false)
  const { id } = useParams();
  console.log(id);
 
  const getData = useCallback(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data.meals[0]);
      });
  },[id])

  useEffect(() => {
    getData();
  }, [getData]);

  if (item) {
    const url = item.strYoutube;
    const str = url.split("=");
    vid = str[str.length - 1];
  }

  const addMealHandler = () => {
    setMyMeals(item.idMeal)
    setButtonClicked(true)
  }

  return (
    <div className="safe-view meal-page">
      <div className="responsive-row">
        <iframe
          height="360px"
         
          src={`https://www.youtube.com/embed/${vid}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowfullscreen></iframe>
        <div className="container recipe-ingredients">
          <h3>Ingredients:</h3>
          <ul>
            <li>
              {item.strIngredient1}: {item.strMeasure1}
            </li>
            <li>
              {item.strIngredient2}: {item.strMeasure2}
            </li>
            <li>
              {item.strIngredient3}: {item.strMeasure3}
            </li>
            <li>
              {item.strIngredient4}: {item.strMeasure4}
            </li>
            {item.strIngredient5 ||
            (item.strIngredient5 && item.strMeasure5) ? (
              <li>
                {item.strIngredient5} {":" + item.strMeasure5}
              </li>
            ) : null}
            {item.strIngredient6 ||
            (item.strIngredient6 && item.strMeasure6) ? (
              <li>
                {item.strIngredient6} {":" + item.strMeasure6}
              </li>
            ) : null}

            {item.strIngredient7 ||
            (item.strIngredient7 && item.strMeasure7) ? (
              <li>
                {item.strIngredient7} {":" + item.strMeasure8}
              </li>
            ) : null}
            {item.strIngredient8 ||
            (item.strIngredient8 && item.strMeasure8) ? (
              <li>
                {item.strIngredient8} {":" + item.strMeasure1}
              </li>
            ) : null}
            {item.strIngredient9 ||
            (item.strIngredient9 && item.strMeasure9) ? (
              <li>
                {item.strIngredient9} {":" + item.strMeasure9}
              </li>
            ) : null}
            {item.strIngredient10 ||
            (item.strIngredient10 && item.strMeasure10) ? (
              <li>
                {item.strIngredient10} {":" + item.strMeasure10}
              </li>
            ) : null}
            {item.strIngredient11 ||
            (item.strIngredient11 && item.strMeasure11) ? (
              <li>
                {item.strIngredient11} {":" + item.strMeasure11}
              </li>
            ) : null}
            {item.strIngredient12 ||
            (item.strIngredient12 && item.strMeasure12) ? (
              <li>
                {item.strIngredient12} {":" + item.strMeasure12}
              </li>
            ) : null}
          </ul>
        </div>
      </div>
      <div className="container row actions">
        <h2>{item.strMeal}</h2>
        <AddMealButton buttonClicked={buttonClicked} action={addMealHandler}/>
      </div>

      <p>{item.strInstructions}</p>
    </div>
  );
};

export default MealPage;

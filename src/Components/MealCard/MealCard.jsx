import React from "react";
import "./MealCard.css";
import { Link } from "react-router-dom";

const MealCard = (props) => {
  return (
    <Link to={`/mealpage/${props.id}`} className="meal-card">
      <img src={props.img} alt={"the meal"} />
      <h5>{props.title}</h5>
    </Link>
  );
};

export default MealCard;

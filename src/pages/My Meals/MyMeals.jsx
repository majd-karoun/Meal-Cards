import React, { useEffect, useState, useCallback } from "react";
import MealCard from "../../Components/MealCard/MealCard";
import "./MyMeals.css";
import { motion } from "framer-motion";

const MyMeals = ({ myMeals }) => {
  const [items, setItems] = useState([]);

  const fetchAll = useCallback(async () => {
    await Promise.all(
      myMeals.map((url) =>
        fetch(url)
          .then((r) => r.json())
          .then((data) => {
            setItems((prev) => {
              return [...prev, data.meals[0]];
            });
          })
      )
    );
  }, [myMeals]);

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.8,
        type: "tween",
      }}
      className="my-meals-cards-container">
      {items.length > 0 ? (
        items.map((res) => {
          return (
            <MealCard
              img={res.strMealThumb}
              title={res.strMeal}
              id={res.idMeal}
            />
          );
        })
      ) : (
        <h2>You have no meals saved</h2>
      )}
    </motion.div>
  );
};

export default MyMeals;

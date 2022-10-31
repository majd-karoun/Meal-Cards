import React, { useState, useEffect, useCallback } from "react";
import MealCard from "../MealCard/MealCard";
import "./SearchPreview.css";

const SearchPreview = ({ searchUrl }) => {
  const [items, setItems] = useState([]);

  const fetchData = useCallback(() => {
    fetch(searchUrl)
      .then((res) => res.json())
      .then((data) => {
        setItems(data.meals);
      });
  }, [searchUrl]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <div className="search-resutls-container">
        {items
          ? items.map((res) => {
              return (
                <>
                  <MealCard
                    img={res.strMealThumb}
                    title={res.strMeal}
                    id={res.idMeal}
                  />
                </>
              );
            })
          : "No meals found"}
      </div>
    </>
  );
};

export default SearchPreview;

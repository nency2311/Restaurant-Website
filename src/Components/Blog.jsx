import React, { useEffect, useState } from "react";
import PageBanner from './PageBanner';

export default function Blog() {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=b")
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, []);
  return (
    <>
      <PageBanner title="Blog"/>
      <div className="container blogcon">
        <h1 className="text-center mb-5">About The Food We Provide</h1>
      <div className="cardb-grid">

        {meals.map((item) => (
          <div className="foodb-card" key={item.idMeal}>

            <img src={item.strMealThumb} alt={item.strMeal} />

            <div className="cardb-content">
              <p className="meta">26 Jan 2023 • 2.5K</p>

              <h3>{item.strMeal}</h3>

              <p>
                Delicious {item.strCategory} dish from {item.strArea}.
              </p>

              <button onClick={() => setSelectedMeal(item)}>Read More</button>
            </div>

          </div>
        ))}

      </div>
      {selectedMeal && (
  <div className="popup">
    <div className="popup-card">

      <button 
        className="close-btn"
        onClick={() => setSelectedMeal(null)}
      >
        X
      </button>

      <h2>{selectedMeal.strMeal}</h2>

      <img src={selectedMeal.strMealThumb} width="200" />

      <p>
        {selectedMeal.strInstructions.slice(0, 300)}
      </p>

    </div>
  </div>
)}
    </div>
    </>
  )
}

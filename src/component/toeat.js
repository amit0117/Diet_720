import React, { useState } from 'react';
import dietlist from '../dietlist.json';
import './toeat.css';

function Toeat(){
  const [meals, setMeals] = useState(dietlist.dietlist);

  const removeItem = (mealIndex, itemIndex) => {
    const updatedMeals = [...meals];
    updatedMeals[mealIndex].items.splice(itemIndex, 1);
    setMeals(updatedMeals);
  };

  return (
    <div className="display">
      <h1>Diet List</h1>
      {meals.map((meal, mealIndex) => (
        <div key={mealIndex}>
          <h2>{meal.meal}</h2>
          {meal.items.map((item, itemIndex) => (
            <div key={itemIndex}>
              <span>{item.name}</span>
              <button onClick={() => removeItem(mealIndex, itemIndex)}>Remove</button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Toeat; 
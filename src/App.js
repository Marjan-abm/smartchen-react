import React, {useState} from 'react';
import MealList from './MealList';

function App() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  function handleChange(e){
    setCalories(e.target.value);
  }

  function getMealData(){
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=bda35f2d52bd42dd99e6fe82a551801a&timeFrame=day&targetCalories=${calories}`
    )
    .then((response) => response.json())
    .then((data) => {
      setMealData(data);
      console.log(data);
    })
    .catch(() => {
      console.log('error');
    });
  }

  return (
  <div className='App'>
    <section className='controls'>
      <input
      type='number'
      placeholder='Calories (e.g. 2000)'
      onChange={handleChange}/>
    </section>
    <button onClick={getMealData}>Get Daily Meal Plan</button>
    {mealData && <MealList mealData={mealData}/>}
  </div>
  );
}

export default App;

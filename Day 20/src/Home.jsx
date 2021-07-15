import FoodCard from "./FoodCard";
import "./App.css";
import { useState } from "react";

const Home = () => {
  const [foodItems, setFoodItems] = useState([
    {
      id: 1,
      foodName: "Chicken Burrito",
      foodType: "Burrito",
      protein: "chicken",
      calories: 975,
    },
    {
      id: 2,
      foodName: "Steak Burrito",
      foodType: "Burrito",
      protein: "steak",
      calories: 945,
    },
    {
      foodName: "Carnitas Burrito",
      foodType: "Burrito",
      protein: "carnitas",
      calories: 1005,
    },
    {
      id: 3,
      foodName: "Barbacoa Burrito",
      foodType: "Burrito",
      protein: "barbacoa",
      calories: 965,
    },
    {
      id: 4,
      foodName: "Chorizo Burrito",
      foodType: "Burrito",
      protein: "chorizo",
      calories: 1095,
    },
    {
      id: 5,
      foodName: "Sofritas Burrito",
      foodType: "Burrito",
      protein: "sofritas",
      calories: 945,
    },
    {
      id: 6,
      foodName: "Chicken Burrito Bowl",
      foodType: "Burrito Bowl",
      calories: 630,
    },
    { id:7,foodName: "Chicken Bowl", calories: 630 },
    {id: 8,foodName: "Steak Burrito Bowl", foodType: "Burrito Bowl", calories: 600 },
  ]);

  const deleteFoodItem = (id) => {
    const newFoodItems = foodItems.filter(food => food.id !== id);
    setFoodItems(newFoodItems);
  }

  return (
    <div className="main">
      {foodItems.map((food) => {
        return (
          <FoodCard
            name={food.foodName}
            calorie={food.calories}
            protein={food.protein}
            key={food.name}
            id = {food.id}
            deleteFoodItem = {deleteFoodItem}
          ></FoodCard>
        );
      })}
    </div>
  );
};

export default Home;

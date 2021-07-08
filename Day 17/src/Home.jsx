import FoodCard from "./FoodCard";
import './App.css';

const Home = () => {
  const foodItems = [
    {
      foodName: "Chicken Burrito",
      foodType: "Burrito",
      protein: "chicken",
      calories: 975,
    },
    {
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
      foodName: "Barbacoa Burrito",
      foodType: "Burrito",
      protein: "barbacoa",
      calories: 965,
    },
    {
      foodName: "Chorizo Burrito",
      foodType: "Burrito",
      protein: "chorizo",
      calories: 1095,
    },
    {
      foodName: "Sofritas Burrito",
      foodType: "Burrito",
      protein: "sofritas",
      calories: 945,
    },
    {
      foodName: "Chicken Burrito Bowl",
      foodType: "Burrito Bowl",
      calories: 630,
    },
    { foodName: "Chicken Bowl", calories: 630 },
    { foodName: "Steak Burrito Bowl", foodType: "Burrito Bowl", calories: 600 },
  ];
  return <div className="main">
    {foodItems.map((food) => {
    return <FoodCard name={food.foodName} calorie={food.calories} protein={food.protein} key={food.name}></FoodCard>
  })}</div>;
};

export default Home;

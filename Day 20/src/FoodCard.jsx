import "./App.css";

const FoodCard = ({ name, calorie, protein, deleteFoodItem, id }) => {
  return (
    <div className="food-card">
      <h2>{name}</h2>
      <h4>
        It contains {calorie} calories and {protein} protein!
      </h4>
      <div id="btn" onClick={() => deleteFoodItem(id)}>Delete</div>
    </div>
  );
};

export default FoodCard;

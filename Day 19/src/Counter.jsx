import './App.css';



const Counter = ({ counter, setCounter }) => {
  return (
    <div
      className="btn"
      onClick={() => setCounter((counter) => counter + 1)}
    >
      {counter}
    </div>
  );
};

export default Counter;

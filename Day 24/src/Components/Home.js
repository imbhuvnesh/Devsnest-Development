import { useState } from "react";
import React from "react";

const Home = ({ isClicked, setisClicked }) => {
  const [pending, setPending] = useState(false);
  return (
    <div className="Home">
      <h1>Home</h1>
      {!isClicked && (
        <button
          onClick={() => {
            setPending(true);
            setTimeout(() => {
              setisClicked(true);
              setPending(false);
            }, 2000);
          }}
        >
          <h3>Click to Login</h3>
        </button>
      )}
      {isClicked && <p>Logged In</p>}
      {pending && <p>Logging in....</p>}
    </div>
  );
};

export default Home;

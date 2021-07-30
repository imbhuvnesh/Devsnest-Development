import React from "react";
import "../App.css";
import { changeName, changeEmail } from "../actions";
import store from "../store";
import { useSelector } from "react-redux";

const Home = () => {
  const data = useSelector((state) => state.appData);
  return (
    <div id="main">
      <div className="input-boxes">
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => {
            changeName.payload = e.target.value;
            store.dispatch(changeName);
          }}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => {
            changeEmail.payload = e.target.value;
            store.dispatch(changeEmail);
          }}
        />
      </div>
      <div className="output">
        <h3>Username: {data.userName}</h3>
        <h3>Email: {data.email}</h3>
      </div>
    </div>
  );
};

export default Home;

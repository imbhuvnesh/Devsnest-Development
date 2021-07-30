import { combineReducers } from "redux";

const appReducer = (state = { userName: "", email: "" }, action) => {
  if (action.type === "CHANGE_NAME") {
    console.log(action.payload);
    return { userName: action.payload, email: state.email };
  } else if (action.type === "CHANGE_EMAIL") {
    return { userName: state.userName, email: action.payload };
  }
  return state;
};

const rootReducer = combineReducers({ appData: appReducer });

export default rootReducer
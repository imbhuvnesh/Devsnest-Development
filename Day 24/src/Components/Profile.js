import React from "react";
import { useHistory, Redirect } from "react-router";

const Profile = ({isClicked, setIsClicked}) => {
  const history = useHistory();
  if (!isClicked) return <Redirect to="/"></Redirect>
  return (
    <div className="Profile">
      <button onClick={() => {
        if(isClicked === true)
          setIsClicked(false);
        history.push("/")
      }}>
        <h1>Logout</h1>
      </button>
    </div>
  );
};

export default Profile;

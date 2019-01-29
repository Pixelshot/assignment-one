import React from "react";

const useroutput = props => {
  return (
    <div onClick={props.clicky}>
      <p>My username is: {props.username1}</p>
      <p>Your username is: {props.username2}</p>
    </div>
  );
};

export default useroutput;

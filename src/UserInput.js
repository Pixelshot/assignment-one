import React from "react";

const userinput = props => {
  return (
    <div>
      <input type="text" onChange={props.reciprocate} />
    </div>
  );
};

export default userinput;

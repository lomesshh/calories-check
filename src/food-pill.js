import React from "react";

function Tableitem({ name, measure, calories, onFoodTableClickHandler }) {
  return (
    <div onClick={() => onFoodTableClickHandler(calories)}>
      <span>{name}</span>
      <span>{measure}</span>
      <span>{calories}</span>
    </div>
  );
}

export default Tableitem;

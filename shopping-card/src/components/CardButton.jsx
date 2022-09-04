import React from "react";

const CardButtons = ({item, ...rest}) => {
  return (
    <div style={{ display: "inline" }}>
        <button
        onClick={() => {
          rest.onClickDecrease(item);
        }}>-</button>
      <button
        onClick={() => {
          rest.onClickIncrease(item);
        }}>+</button>
      <button
        onClick={() => {
          rest.onClickDelete(item);
        }}> Delete </button>
    </div>
  );
};

export default CardButtons;

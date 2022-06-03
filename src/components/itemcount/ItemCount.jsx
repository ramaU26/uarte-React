import React from "react";

const ItemCounter = ({ stock, onAdd, onRemove }) => {
  return (
    <div>
      <p>{`El stock es ${stock}`}</p>
      <button onClick={onAdd}>+</button>
      <button onClick={onRemove}>-</button>
    </div>
  );
};

export default ItemCounter;
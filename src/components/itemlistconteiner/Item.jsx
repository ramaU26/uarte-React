import React from "react";

const Item = ({ name, price, pictureUrl }) => {
  return (
    <li
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100px",
        width: "100px",
        marginBottom: "150px"
      }}
    >
      <img src={pictureUrl} alt={`Imagen del pokemon ${name}`} />
      <h2>{name}</h2>
      <p>{price}</p>
    </li>
  );
};

export default Item;

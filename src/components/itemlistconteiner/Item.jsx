import React from "react";

const Item = ({ name, price, pictureUrl, clase }) => {
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
      <p>{clase}</p>
    </li>
  );
};

export default Item;

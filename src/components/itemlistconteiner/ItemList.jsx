import React from "react";

import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <ul>
      {items.map((item) => {
        return (
          <Item
            key={item.id}
            name={item.name}
            price={item.price}
            pictureUrl={item.pictureUrl}
            clase={item.clase}
          />
        );
      })}
    </ul>
  );
};

export default ItemList;

import React, {useState, useEffect} from "react";

import ItemList from "./ItemList";

const items = [
  {
    id: "1",
    name: "Bulbasaur",
    price: "$1050",
    pictureUrl:
      "https://i.pinimg.com/564x/3e/68/f7/3e68f722ba430ad35203713557063436.jpg",
    clase:"Tierra"
  },
  {
    id: "2",
    name: "squirtle",
    price: "$1230",
    pictureUrl:
      "https://i.pinimg.com/564x/74/07/74/7407744c53a12bbd180923e54b8dd582.jpg",
      clase:"Agua"
  },
  {
    id: "3",
    name: "charmander",
    price: "$1250",
    pictureUrl:
      "https://i.pinimg.com/564x/85/4a/74/854a7429244a3bb7f5aff3e85fd5bf19.jpg",
      clase:"Fuego"
  }
];





const ItemListContainer = () => { 
  const [data,setData] = useState(null);


  useEffect(() => {
    const timer = setTimeout(() => {
      setData(items);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  if (!data){return <p>Cargando....</p>}

  return (
    <div>
     <ItemList items={data} />
     </div>
  );
};





export default ItemListContainer;
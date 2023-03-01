import { useEffect, useState } from "react";
import { APIRoute } from "../../../const";
import { createAPI } from "../../../services/api";
import Card from "../Card/Card";
import GoldIcon from "../Icons/GoldIcon";

function ItemsList({itemClickHandler}) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const api = createAPI();
    api
      .get(APIRoute.ITEMS)
      .then(({data}) => setItems(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <ul className="items-list">
      {items?.map((item) => (
        <li 
          key={item.id}
          className="items-list__item"
          onClick={itemClickHandler(item)}
        >
          <Card 
            image={item.image} 
            name={item.name}
          >
            <h3>{item.gold}</h3><GoldIcon/>
            <p>{item.blurb}</p>
          </Card>
        </li>
      ))}
    </ul>
  );
}

export default ItemsList;

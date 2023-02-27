import { useEffect, useState } from "react";
import { APIRoute } from "../../../const";
import { createAPI } from "../../../services/api";
import Card from "../Card/Card";

function SpellsList() {
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    const api = createAPI();
    api
      .get(APIRoute.SPELLS)
      .then(({data}) => setSpells(data))
      .catch((error) => console.log(error));
  }, []);

  const handleSpellClick = (spell) => () => console.log(spell);

  return (
    <ul className="spells-list">
      {spells?.map((spell) => (
        <li 
          key={spell.id} 
          className="spells-list__item"
          onClick={handleSpellClick(spell)}
        >
          <Card 
            image={spell.image} 
            name={spell.name}
          >
            <p>{spell.blurb}</p>
          </Card>
        </li>
      ))}
    </ul>
  );
}

export default SpellsList;

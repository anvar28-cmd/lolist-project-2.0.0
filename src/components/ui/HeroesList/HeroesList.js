import { useEffect, useState } from "react";
import { generatePath, Link } from "react-router-dom";
import { APIRoute, AppRoute } from "../../../const";
import { createAPI } from "../../../services/api";
import Card from "../Card/Card";

function HeroesList({background}) {
  document.documentElement.style.setProperty("--form-webkit", background);
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    const api = createAPI();
    api
      .get(APIRoute.HEROES)
      .then(({data}) => setHeroes(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <ul className="heroes-list">
      {heroes?.map(({slug, name, image, title, blurb}) => (
        <li key={slug} className="heroes-list__item">
          <Link 
            className="heroes-list__link"
            to={generatePath(AppRoute.HEROES_SELECTED, {slug})}
          >
            <Card image={image} name={name}>
              <h3>{title}</h3>
              <p>{blurb}</p>
            </Card>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default HeroesList;
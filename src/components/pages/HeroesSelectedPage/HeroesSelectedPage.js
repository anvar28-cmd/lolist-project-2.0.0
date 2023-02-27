import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppRoute } from "../../../const";
import { createAPI } from "../../../services/api";
import Board from "../../ui/Board/Board";
import HeroCard from "../../ui/HeroCard/HeroCard";
import ItemsList from "../../ui/ItemsList/ItemsList";
import SpellsList from "../../ui/SpellsList/SpellsList";

function HeroesSelectedPage() {
  const params = useParams();
  const slug = params.slug;
  const [hero, setHero] = useState(null);

  useEffect(() => {
    if (slug) {
      const api = createAPI();
      api
        .get(`${AppRoute.HEROES}/${slug}`)
        .then(({data}) => setHero(data))
        .catch((error) => console.log(error));
    }
  },[]);
  
  return (
    <main className="heroes-selected page__main container">
      <HeroCard hero={hero} />

      <Board title="Items">
        <ItemsList />
      </Board>

      <div className="heroes-selected__inner">
        <Board title="Spells">
          <SpellsList />
        </Board>
      </div>
    </main>
  );
}

export default HeroesSelectedPage;

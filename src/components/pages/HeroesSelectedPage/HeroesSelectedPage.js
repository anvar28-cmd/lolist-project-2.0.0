import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppRoute } from "../../../const";
import { createAPI } from "../../../services/api";
import Board from "../../ui/Board/Board";
import BuildsCard from "../../ui/BuildsCard/BuildsCard";
import HeroCard from "../../ui/HeroCard/HeroCard";
import ItemsList from "../../ui/ItemsList/ItemsList";
import SpellsList from "../../ui/SpellsList/SpellsList";

function HeroesSelectedPage() {
  const params = useParams();
  const slug = params.slug;
  const [hero, setHero] = useState(null);
  const [build, setBuild] = useState({
    title: '',
    items: [],
    spells: [],
  });

  const handleBuildTitleChange = (evt) => setBuild({
      ...build,
      title: evt.target.value,
    });

  const handleBuildFormSubmit = (evt) => {
    evt.preventDefault();
  };

  useEffect(() => {
    if (slug) {
      const api = createAPI();
      api
        .get(`${AppRoute.HEROES}/${slug}`)
        .then(({data}) => setHero(data))
        .catch((error) => console.log(error));
    }
  }, [slug]);
  
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
        
        <BuildsCard 
          build={build} 
          onTitleChange={handleBuildTitleChange}
          onSubmit={handleBuildFormSubmit}
        />
      </div>
    </main>
  );
}

export default HeroesSelectedPage;

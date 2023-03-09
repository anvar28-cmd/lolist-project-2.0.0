import { useEffect, useState } from "react";
import { generatePath, useParams } from "react-router-dom";
import { APIRoute, AppRoute } from "../../../const";
import { createAPI } from "../../../services/api";
import Board from "../../ui/Board/Board";
import BuildsCard from "../../ui/BuildsCard/BuildsCard";
import Button from "../../ui/Button/Button";
import HeroCard from "../../ui/HeroCard/HeroCard";
import ItemsList from "../../ui/ItemsList/ItemsList";
import SpellsList from "../../ui/SpellsList/SpellsList";

function HeroesSelectedPage() {
  const params = useParams();
  const slug = params.slug;
  const [hero, setHero] = useState(null);
  const [build, setBuild] = useState({
    heroID: 0,
    title: "",
    items: [],
    spells: [],
  });

  const handleBuildTitleChange = (evt) =>
    setBuild({
      ...build,
      title: evt.target.value,
    });

  const handleBuildFormSubmit = (evt) => {
    evt.preventDefault();

    const api = createAPI();

    api
      .post(APIRoute.BUILDS, {
        title: evt.target.description.value,
        heroID: build.heroID,
        items: build.items.map(({ id }) => id),
        spells: build.spells.map(({ id }) => id),
      })
      .then(() => {
        evt.target.reset();
        setBuild({
          ...build,
          title: "",
          items: [],
          spells: [],
        })
      })
      .catch((error) => console.log(error));
  };

  const handleItemClick = (item) => () => {
    if (build.items.length < 6) {
      setBuild({
        ...build,
        items: [...build.items, item],
      });
    }
  };

  const handleSpellClick = (spell) => () => {
    if (build.spells.length < 2) {
      setBuild({
        ...build,
        spells: [...build.spells, spell],
      });
    }
  };

  useEffect(() => {
    if (slug) {
      const api = createAPI();
      api
        .get(generatePath(APIRoute.HEROES_SELECTED, {slug}))
        .then(({ data }) => {
          setHero(data);
          build.heroID = data.id;
        })
        .catch((error) => console.log(error));
    }
  }, [slug, build]);

  return (
    <main className="heroes-selected page__main container">
      <HeroCard hero={hero} />

      <Board title="Items">
        <ItemsList itemClickHandler={handleItemClick} />
      </Board>

      <div className="heroes-selected__inner">
        <Board title="Spells">
          <SpellsList spellClickHandler={handleSpellClick} />
        </Board>

        <BuildsCard
          build={build}
          onTitleChange={handleBuildTitleChange}
          onSubmit={handleBuildFormSubmit}
        />

        <Button href={generatePath(AppRoute.HEROES_BUILDS, {slug})}>Saved builds</Button>
      </div>

    </main>
  );
}

export default HeroesSelectedPage;

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
import { toast } from "react-toastify";

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
        });
        toast.success("Build was saved! Poro wants you create more builds :)", {
          position: "top-center",
          autoClose: 3500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      })
      .catch((error) => console.log(error));
  };

  const handleBuildFormReset = (evt) => {
    evt.target.reset();
    setBuild({
      ...build,
      title: "",
      items: [],
      spells: [],
    });
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
        .get(generatePath(APIRoute.HEROES_SELECTED, { slug }))
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

      <Board title="Items" background="rgba(60, 32, 31, 52%)">
        <ItemsList itemClickHandler={handleItemClick} />
      </Board>

      <div className="heroes-selected__inner">
        <Board title="Spells" background="rgba(60, 32, 31, 52%)">
          <SpellsList spellClickHandler={handleSpellClick} />
        </Board>

        <BuildsCard
          background="rgba(60, 32, 31, 52%)"
          className="heroes-selected__builds-card"
          build={build}
          onTitleChange={handleBuildTitleChange}
          onSubmit={handleBuildFormSubmit}
          onReset={handleBuildFormReset}
        />

        <Button href={generatePath(AppRoute.HEROES_BUILDS, { slug })}>
          {hero?.name}'s builds
        </Button>
      </div>
    </main>
  );
}

export default HeroesSelectedPage;

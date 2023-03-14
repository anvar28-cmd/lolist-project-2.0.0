import { useEffect, useState } from "react";
import { generatePath, useParams } from "react-router-dom";
import { APIRoute } from "../../../const";
import { createAPI } from "../../../services/api";
import Board from "../../ui/Board/Board";
import BuildsList from "../../ui/BuildsList/BuildsList";

function HeroesBuildsPage() {
  const params = useParams();
  const slug = params.slug;

  const [hero, setHero] = useState();
  const [builds, setBuilds] = useState();

  useEffect(() => {
    if (slug) {
      const api = createAPI();
      api
        .get(generatePath(APIRoute.HEROES_BUILDS, { slug }))
        .then(({ data }) => setBuilds(data))
        .catch((error) => console.log(error));

      api
        .get(generatePath(APIRoute.HEROES_SELECTED, { slug }))
        .then(({ data }) => setHero(data))
        .catch((error) => console.log(error));
    }
  }, [slug]);

  return (
    <main className="heroes-builds page__main container">
      <Board
        title={`${hero ? `${hero.name}'s builds` : ""}`}
        background="rgba(61, 29, 54, 32%)"
      >
        <BuildsList background="rgba(33, 19, 30, 40%)" builds={builds} />
      </Board>
    </main>
  );
}

export default HeroesBuildsPage;

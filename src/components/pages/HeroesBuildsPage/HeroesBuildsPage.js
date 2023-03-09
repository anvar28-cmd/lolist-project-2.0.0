import { useEffect, useState } from "react";
import { generatePath, useParams } from "react-router-dom";
import { APIRoute} from "../../../const";
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
        .get(generatePath(APIRoute.HEROES_BUILDS, {slug}))
        .then(({ data }) => setBuilds(data))
        .catch((error) => console.log(error));

      api
      .get(generatePath(APIRoute.HEROES_SELECTED, {slug}))
        .then(({ data }) => setHero(data))
        .catch((error) => console.log(error));
    }
  }, [slug]);

  const handleDeleteButtonClick = () => {
    const api = createAPI();
    api
      .delete(`${APIRoute.BUILDS}/${builds.id}`)
      .then(() => {
        const newBuilds = builds.filter((item) => item.id !== builds.id);
        setBuilds(newBuilds);
      })
      .catch((error) => console.log(error));
    console.log(builds);
  };

  const handleEditButtonClick = () => {

  };


  return (
    <main className="heroes-builds page__main container">
      <Board title={`${hero ? `${hero.name}'s builds` : ''}`}>
        <BuildsList
          builds={builds}
          onDeleteButtonClick={handleDeleteButtonClick}
          onEditButtonClick={handleEditButtonClick}
        />
      </Board>
    </main>
  );
}

export default HeroesBuildsPage;

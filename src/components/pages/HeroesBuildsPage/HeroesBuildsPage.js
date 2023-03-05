import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { APIRoute, AppRoute } from "../../../const";
import { createAPI } from "../../../services/api";
import Board from "../../ui/Board/Board";
import BuildsList from "../../ui/BuildsList/BuildsList";

function HeroesBuildsPage() {
  const params = useParams();
  const slug = params.slug;

  const [builds, setBuilds] = useState();

  const handleDeleteButton = (evt) => {
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

  const handleEditButton = (evt) => {

  };

  useEffect(() => {
    if (slug) {
      const api = createAPI();
      api
        .get(`${AppRoute.HEROES}/${slug}/builds`)
        .then(({ data }) => {
          setBuilds(data);
        })
        .catch((error) => console.log(error));
    }
  }, [slug]);

  return (
    <main className="heroes-builds page__main container">
      <Board id="build-board" title="Hello">
        <BuildsList
          builds={builds}
          handleDeleteButton={handleDeleteButton}
          handleEditButton={handleEditButton}
        />
      </Board>
    </main>
  );
}

export default HeroesBuildsPage;

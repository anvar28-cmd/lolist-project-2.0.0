import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppRoute } from "../../../const";
import { createAPI } from "../../../services/api";
import Board from "../../ui/Board/Board";
import BuildsList from "../../ui/BuildsList/BuildsList";

function HeroesBuildsPage() {
  const params = useParams();
  const slug = params.slug;

  const [builds, setBuilds] = useState();

  const handleDeleteButton = (evt) => {
  
        console.log(builds);
   
  };

  const handleEditButton = (evt) => {
    // const api = createAPI();
    // api
    //   .get(`${AppRoute.HEROES}/${slug}/builds`)
    //   .then(({ data }) => {
    //     setBuilds(data);
    //     console.log(data);
    //   })
    //   .catch((error) => console.log(error));
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

import { useEffect, useState } from "react";
import { APIRoute } from "../../../const";
import { createAPI } from "../../../services/api";
import Board from "../../ui/Board/Board";
import BuildsList from "../../ui/BuildsList/BuildsList";

function BuildsPage() {
  const [builds, setBuilds] = useState();

  useEffect(() => {
    const api = createAPI();
    api
      .get(APIRoute.BUILDS)
      .then(({ data }) => setBuilds(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <main className="builds-page page__main container">
      <Board title="All builds" background="rgba(44, 103, 171, 39%)">
        <BuildsList
          builds={builds}
          withHeroesName
        />
      </Board>
    </main>
  );
}

export default BuildsPage;

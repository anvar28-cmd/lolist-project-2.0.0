import { useEffect, useState } from "react";
import { APIRoute } from "../../../const";
import { createAPI } from "../../../services/api";
import Board from "../../ui/Board/Board";
import BuildsList from "../../ui/BuildsList/BuildsList";

function BuildsPage() {

  const [allBuilds, setAllBuilds] = useState();

  const handleDeleteButton = (evt) => {
    const api = createAPI();
    api
      .delete(`${APIRoute.BUILDS}/${allBuilds.id}`)
      .then(() => {
        const newBuilds = allBuilds.filter((item) => item.id !== allBuilds.id);
        setAllBuilds(newBuilds);
      })
      .catch((error) => console.log(error));
    console.log(allBuilds);
  };

  const handleEditButton = (evt) => {
    
  };

  useEffect(() => {
    const api = createAPI();
    api
      .get(APIRoute.BUILDS)
      .then(({data}) => setAllBuilds(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <main className='builds-page page__main container'>
      <Board title="All builds">
        <BuildsList
          allBuilds={allBuilds}
          handleDeleteButton={handleDeleteButton}
          handleEditButton={handleEditButton}
        />
      </Board>
    </main>
  );
}

export default BuildsPage;

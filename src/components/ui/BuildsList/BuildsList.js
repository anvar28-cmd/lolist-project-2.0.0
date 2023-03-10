import { generatePath } from "react-router-dom";
import { APIRoute } from "../../../const";
import { createAPI } from "../../../services/api";
import BuildsCard from "../BuildsCard/BuildsCard";
import Button from "../Button/Button";

function BuildsList({builds, withHeroesName}) {
  const api = createAPI();

  const handleDeleteButtonClick = (id) => (evt) => 
    api
      .delete(generatePath(APIRoute.BUILDS_SELECTED, {id}))
      .then(() => evt.target.closest('li').remove())
      .catch((error) => console.log(error));

  return (
    <ul className="builds-list">
      {builds?.map((build) => (
        <li key={build.id} className="builds-list__item">
          <BuildsCard 
            build={build} 
            heroName={withHeroesName ? build.hero.name : null}
            readOnly
          />
          <Button onClick={handleDeleteButtonClick(build.id)} type="button">Delete</Button>
        </li>
      ))}
    </ul>
  );
}

export default BuildsList;

// : (
//   allBuilds.map((allBuild, key) => (
//     <li key={key} className="builds-list__item">
//     <BuildsItems allBuild={allBuild}  />
//     <Button className="builds-list__button" onClick={handleDeleteButton} type="button">Delete</Button>
//     <Button className="builds-list__button" onClick={handleEditButton} type="button">Edit</Button>
//     </li>
//     ))
// )
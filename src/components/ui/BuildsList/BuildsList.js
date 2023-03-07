import BuildsItems from "../BuildsItems/BuildsItems";
import Button from "../Button/Button";

function BuildsList({builds, allBuilds, handleDeleteButton, handleEditButton}) {

  return (
    <ul className="builds-list">
      { builds ? (
        builds.map((build, key) => (
          <li key={key} className="builds-list__item">
          <BuildsItems build={build}  />
          <Button className="builds-list__button" onClick={handleDeleteButton} type="button">Delete</Button>
          <Button className="builds-list__button" onClick={handleEditButton} type="button">Edit</Button>
          </li>
          ))
        
      ) : (
        allBuilds.map((allBuild, key) => (
          <li key={key} className="builds-list__item">
          <BuildsItems allBuild={allBuild}  />
          <Button className="builds-list__button" onClick={handleDeleteButton} type="button">Delete</Button>
          <Button className="builds-list__button" onClick={handleEditButton} type="button">Edit</Button>
          </li>
          ))
      )
        }
    </ul>
  );
}

export default BuildsList;

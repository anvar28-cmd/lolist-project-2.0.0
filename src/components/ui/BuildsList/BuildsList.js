import BuildsCard from "../BuildsCard/BuildsCard";
import Button from "../Button/Button";

function BuildsList({builds, onDeleteButtonClick, onEditButtonClick}) {

  return (
    <ul className="builds-list">
      {builds?.map((build) => (
        <li key={build.id} className="builds-list__item">
          <BuildsCard build={build} readOnly />
          <Button onClick={onDeleteButtonClick} type="button">Delete</Button>
          <Button onClick={onEditButtonClick} type="button">Edit</Button>
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
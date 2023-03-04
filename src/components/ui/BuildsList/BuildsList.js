import { useState } from "react";
import { useParams } from "react-router-dom";
import { AppRoute } from "../../../const";
import { createAPI } from "../../../services/api";
import BuildsItem from "../BuildsItem/BuildsItem";
import Button from "../Button/Button";

function BuildsList() {
  const params = useParams();
  const slug = params.slug;

  const [buildss, setBuildss] = useState();

  const handleBuildClick = (evt) => {
    const api = createAPI();
    api
      .get(`${AppRoute.HEROES}/${slug}/builds`)
      .then(({ data }) => {
        setBuildss(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }

//   useEffect(() => {
//     if (slug) {
//       const api = createAPI();
//       api
//         .get(`${AppRoute.HEROES}/${slug}/builds`)
//         .then(({ data }) => {
//           setBuilds(data);
//         })
//         .catch((error) => console.log(error));
//     }
//   }, [slug]);

  return (
    <ul className="builds-list">
      <Button onClick={handleBuildClick} type="button">Delete</Button>
      {/* {builds.map((build, key) => (
        <li key={key} className="builds-list__item">
          <BuildsItem build={build} />
          <Button type="button">Edit</Button>
        </li>
      ))} */}
    </ul>
  );
}

export default BuildsList;

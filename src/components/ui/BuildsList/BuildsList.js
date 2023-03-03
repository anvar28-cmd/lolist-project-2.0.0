import { useState } from "react"
import Button from "../Button/Button";

function BuildsList() {

    const [builds, setBuilds] = useState();

  return (
    <ul className="builds-list">
        {builds.map((build, key) => (
            
            <li key={key} className="builds-list__item">
                <BuildsItems build={build}/>
                <Button type="button">Delete</Button>
                <Button type="delete">edit</Button>
        </li>
      ))}
    </ul>
  )
}

export default BuildsList
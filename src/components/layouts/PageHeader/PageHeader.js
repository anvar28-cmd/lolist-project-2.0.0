import { dropToken } from "../../../services/token";
import { dropUser, getUser } from "../../../services/user";
import Button from "../../ui/Button/Button";

function PageHeader({ setIsAuth }) {
  const user = getUser();

  const handleLogoutButtonClick = () => {
    dropToken();
    dropUser();
    setIsAuth(false);
  };

  return (
    <header className="page-header container">
      <h2 className="page-header__title">{`Welcome, ${user.name}!`}</h2>

      <Button onClick={handleLogoutButtonClick} type="button">Logout</Button>

      {/* <ul className="header__list">
        <li className="header__item">Heroes</li>
        <li className="header__item">About</li>
      </ul> */}
    </header>
  );
}

export default PageHeader;

import { dropToken } from "../../../services/token";
import { dropUser, getUser } from "../../../services/user";
import Button from "../../ui/Button/Button";
import PageNavigation from "../../ui/PageNavigation/PageNavigation";

function PageHeader({ setIsAuth }) {
  const user = getUser();

  const handleLogoutButtonClick = () => {
    dropToken();
    dropUser();
    setIsAuth(false);
  };

  return (
    <header className="page-header container">
      <div className="page-header__user">
        <h2 className="page-header__title">{`Welcome, ${user.name}!`}</h2>
        <Button onClick={handleLogoutButtonClick} type="button">
          Logout
        </Button>
      </div>
      <PageNavigation />
    </header>
  );
}

export default PageHeader;

import { Navigate, Outlet } from "react-router-dom";
import { AppRoute } from "../../../const";
import PageHeader from "../PageHeader/PageHeader";

function PageWrapper({ isAuth, setIsAuth }) {
  return isAuth ? (
    <>
      <PageHeader setIsAuth={setIsAuth} />
      <Outlet />
    </>
  ) : (
    <Navigate to={AppRoute.LOGIN} />
  );
}

export default PageWrapper;

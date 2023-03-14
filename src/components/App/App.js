import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AppRoute } from "../../const";
import PageWrapper from "../layouts/PageWrapper/PageWrapper";
import HeroesPage from "../pages/HeroesPage/HeroesPage";
import HeroesSelectedPage from "../pages/HeroesSelectedPage/HeroesSelectedPage";
import HeroesBuildsPage from "../pages/HeroesBuildsPage/HeroesBuildsPage";
import BuildsPage from "../pages/BuildsPage/BuildsPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignupPage from "../pages/SignupPage/SignupPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import { useState } from "react";
import { getUser } from "../../services/user";
import AboutPage from "../pages/AboutPage/AboutPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const user = getUser();
  const [isAuth, setIsAuth] = useState(user ? true : false);

  return (
    <BrowserRouter>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        limit={1}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="colored"
      />
      <Routes>
        <Route
          path={AppRoute.LOGIN}
          element={<LoginPage isAuth={isAuth} setIsAuth={setIsAuth} />}
        />
        <Route
          path={AppRoute.SIGNUP}
          element={<SignupPage isAuth={isAuth} setIsAuth={setIsAuth} />}
        />

        <Route
          path={AppRoute.INDEX}
          element={<PageWrapper isAuth={isAuth} setIsAuth={setIsAuth} />}
        >
          <Route index element={<Navigate to={AppRoute.HEROES} />} />
          <Route path={AppRoute.HEROES} element={<HeroesPage />} />
          <Route
            path={AppRoute.HEROES_SELECTED}
            element={<HeroesSelectedPage />}
          />
          <Route path={AppRoute.HEROES_BUILDS} element={<HeroesBuildsPage />} />
          <Route path={AppRoute.BUILDS} element={<BuildsPage />} />
          <Route path={AppRoute.ABOUT} element={<AboutPage />} />
        </Route>

        <Route path={AppRoute.NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

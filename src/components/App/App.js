import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import PageWrapper from '../layouts/PageWrapper/PageWrapper';
import HeroesPage from '../pages/HeroesPage/HeroesPage';
import HeroesSelectedPage from '../pages/HeroesSelectedPage/HeroesSelectedPage';
import HeroesBuildsPage from '../pages/HeroesBuildsPage/HeroesBuildsPage';
import BuildsPage from '../pages/BuildsPage/BuildsPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import SignupPage from '../pages/SignupPage/SignupPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.LOGIN} element={<LoginPage />} />
        <Route path={AppRoute.SIGNUP} element={<SignupPage />} />
        
        <Route path={AppRoute.INDEX} element={<PageWrapper />}>
          <Route index element={<Navigate to={AppRoute.HEROES} />} />
          <Route path={AppRoute.HEROES} element={<HeroesPage />} />
          <Route path={AppRoute.HEROES_SELECTED} element={<HeroesSelectedPage />} />
          <Route path={AppRoute.HEROES_BUILDS} element={<HeroesBuildsPage />} />
          <Route path={AppRoute.BUILDS} element={<BuildsPage />} />
        </Route>
        
        <Route path={AppRoute.NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

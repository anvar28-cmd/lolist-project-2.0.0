import { Outlet } from 'react-router-dom';
import PageHeader from '../PageHeader/PageHeader';

function PageWrapper() {
  return (
    <>
      <PageHeader />
      <Outlet />
    </>
  );
}

export default PageWrapper;

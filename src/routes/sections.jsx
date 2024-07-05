import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import NavigationBar from 'src/layouts/navigation/NavigationBar';

export const IndexPage = lazy(() => import('src/pages/app'));
export const ProjectsPage = lazy(() => import('src/pages/projects'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));
export const AboutPage = lazy(() => import('src/pages/about'));
export const MediaPage = lazy(() => import('src/pages/media'));
// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <NavigationBar>
          <Suspense>
            <Outlet />
          </Suspense>
        </NavigationBar>
      ),
      children: [
        { element: <IndexPage />, index: true },
        { path: 'projects', element: <ProjectsPage /> },
        { path: 'about', element: <AboutPage /> },
        { path: 'media', element: <MediaPage /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}

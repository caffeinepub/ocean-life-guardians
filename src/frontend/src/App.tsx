import { createRouter, createRoute, createRootRoute, RouterProvider, Outlet } from '@tanstack/react-router';
import Layout from './components/Layout';
import Home from './pages/Home';
import Conservation from './pages/Conservation';
import Donate from './pages/Donate';
import DonationSuccess from './pages/DonationSuccess';

const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Outlet />
    </Layout>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

const conservationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/conservation',
  component: Conservation,
});

const donateRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/donate',
  component: Donate,
});

const donationSuccessRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/donate/success',
  component: DonationSuccess,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  conservationRoute,
  donateRoute,
  donationSuccessRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}

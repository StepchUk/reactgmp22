import Search from './Pages/Search/Search';
import Error from './Pages/Error/NotFound';
// {
//   path: '/',
//   exact: true,
//   component: Search,
// },

const routes = [
  {
    path: '/search',
    component: Search,
  },
  {
    path: '*',
    component: Error,
  },
];

export default routes;

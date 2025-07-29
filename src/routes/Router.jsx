import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Info from '../pages/Info';
import Skills from '../pages/Skills';
import Works from '../pages/Works';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/Works',
        element:<Works/>
      },
      {
        path:'/Info',
        element:<Info />
      },
      {
        path:'/Skills',
        element:<Skills />
      },
     
    ]
  }
]);

export default router;
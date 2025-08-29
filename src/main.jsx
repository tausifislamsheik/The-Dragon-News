import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import HomeLayouts from './Layouts/HomeLayouts';
import NewsHome from './components/NewsHome';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<HomeLayouts></HomeLayouts>,
        children:[
          {
            path:'',
            element:<Navigate to={`/category/01`}></Navigate>
          },
          {
            path:'/category/:id',
            element:<NewsHome></NewsHome>,
            loader:async ({ params }) => {
                const res = await fetch(
                  `https://openapi.programming-hero.com/api/news/category/${params.id}`
                );
                return res.json(); // 👈 this makes useLoaderData() return parsed data
              }
          }
        ]
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)

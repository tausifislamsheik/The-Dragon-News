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
import AuthLayout from './Layouts/AuthLayout';
import Login from './components/Login';
import Register from './components/Register';

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
                if (!res.ok) {
                throw new Response("Failed to load news", { status: res.status });
              }
                return res.json();
              }
          }
        ]
      },
      {
        path:'/auth',
        element:<AuthLayout></AuthLayout>,
        children:[
          {
            path:'/auth/login',
            element:<Login></Login>
          },
          {
            path:'/auth/register',
            element:<Register></Register>
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

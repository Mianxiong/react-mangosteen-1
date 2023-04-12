import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, NavLink, Outlet, RouterProvider } from 'react-router-dom';
import { RedirectToWelcome1 } from './components/RedirectToWelcome1';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Outlet />,
    errorElement: <RedirectToWelcome1 />,
    children: [
      { index: true, element: <div>空</div> },
      {
        path: 'welcome',
        element: <Outlet />,
        children: [
          { index: true, element: <div>空</div> },
          {
            path: '1', element: (
              <div> 1 <NavLink to="/welcome/2" >下一页</NavLink></div>
            )
          },
          {
            path: '2', element: (
              <div> 2 <NavLink to="/welcome/3" >下一页</NavLink></div>
            )
          },
          {
            path: '3', element: (
              <div> 3 <NavLink to="/welcome/4" >下一页</NavLink></div>
            )
          },
          {
            path: '4', element: (
              <div> 4 <NavLink to="/welcome/xxx" >开始记账</NavLink></div>
            )
          }
          // { path: '1', element: <div>1</div> }, //路径为
          // { path: '2', element: <div>2</div> },
          // { path: '3', element: <div>3</div> },
          // { path: '4', element: <div>4</div> }
        ]
      }
    ]
  },
  {
    path: "/4",
    element: <div>4</div>
  }
]);

const div = document.getElementById("root") as HTMLElement;

const root = ReactDOM.createRoot(div);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

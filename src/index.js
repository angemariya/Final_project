import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { App } from './components/App';
import { AllProducts } from './components/AllProducts';
import { Main } from './components/Main';
import { Sale } from './components/Sale';
import { Busket } from './components/Busket';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/all',
        element: <AllProducts />
      },
      {
        path: '/main',
        element: <Main />
      },
      {
        path: '/sale',
        element: <Sale />
      },
      {
        path: '/busket',
        element: <Busket />
      },
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={ router }>
      <App />
    </RouterProvider>
  </React.StrictMode>
);

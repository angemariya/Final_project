import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { App } from './components/App';
import { Catalogs } from './components/Catalogs';
import { Coupon } from './components/Coupon';
import { Sale } from './components/Sale';
import { Contact } from './components/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/catalogs',
        element: <Catalogs />
      },
      {
        path: '/coupon',
        element: <Coupon />
      },
      {
        path: '/sale',
        element: <Sale />
      },
      {
        path: '/contact',
        element: <Contact />
      }
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

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { App } from './components/App';
import { AllCategoriesPage  } from './pages/AllCategoriesPage';
import { HomePage } from './pages/HomePage';
import { SalePage } from './pages/SalePage';
import { BusketPage } from './pages/BusketPage';
import { CategoryPage } from './pages/CategoryPage';
import { ProductPage } from './pages/ProductPage';
import { ErrorPage } from './pages/ErrorPage'
import './index.css';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/categories',
        element: <AllCategoriesPage />
      },
      {
        path: '/categories/:id',
        element: <CategoryPage />
      },
      {
        path: '/products/:id',
        element: <ProductPage />
      },
      {
        path: '/home',
        element: <HomePage />
      },
      {
        path: '/sale',
        element: <SalePage />
      },
      {
        path: '/busket',
        element: <BusketPage />
      },
      {
        path: '/error',
        element: <ErrorPage />
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

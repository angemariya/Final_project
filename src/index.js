import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { App } from './App';
import { AllCategoriesPage  } from './pages/AllCategoriesPage';
import { AllProductsPage  } from './pages/AllProductsPage';
import { HomePage } from './pages/HomePage';
import { SalePage } from './pages/SalePage';
import { BasketPage } from './pages/BasketPage';
import { CategoryPage } from './pages/CategoryPage';
import { ProductPage } from './pages/ProductPage';
import { ErrorPage } from './pages/ErrorPage';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
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
        path: '/products/all',
        element: <AllProductsPage />
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
        path: '/basket',
        element: <BasketPage />
      },
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={ store }>
      <RouterProvider router={ router }>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './routers/About.jsx'
import Chart from './routers/Chart.jsx'
import Home from './routers/Home.jsx'
import { Shop } from './routers/Shop.jsx'
import ErrorPage from './routers/ErrorPage.jsx'
import  { CartProvider }  from './providers/CartProvider.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "about",
        element: <About />
      },
      {
        path: "chart",
        element: <Chart />
      },
      {
        path: "/",
        element: <Home />
      },
      {
        path: "shop",
        element: <Shop />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartProvider>
    <RouterProvider router={router} />
  </CartProvider> 
)
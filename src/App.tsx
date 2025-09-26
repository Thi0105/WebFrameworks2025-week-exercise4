import React from "react";
import { RouterProvider, createBrowserRouter, Outlet, NavLink } from 'react-router-dom'
import ProductsView from "./components/ProductsView";
import ProductDetailsView from "./components/ProductDetailsView";
import CartView from "./components/CartView";

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
        <nav>
          {/* Replace anchor elements with router Link */}
          <NavLink to="/">Products</NavLink>
          <NavLink to="/cart">Cart</NavLink>
        </nav>
        <Outlet/>
      </div>
      ),
      children: [
        {
          path: "/",
          element: <ProductsView/>
        },
        {
          path: "/products/:id",
          element: <ProductDetailsView/>
        },
        {
          path: "/cart",
          element: <CartView/>
        }
      ]
    }

  ])

  return (
    <>
      <div>
        <RouterProvider router={router}/>
      </div>

      {/* Add react router routes here. See Router documentation how to define dynamic route segments:
          https://reactrouter.com/start/data/routing#dynamic-segments

          The idea is to have access to the product details with routes such as /products/1, /products/2, etc.where
          the last segment is the product id. 
          The id can then be used to fetch the product details in the ProductDetailsView component.
      */}
    </>
  );
};

export default App;


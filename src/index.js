import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import About from "./components/About";
import Contact from "./components/Contact";
import Body from "./components/Body";
import Cart from "./components/Cart";
import RestaurentMenu from "./components/RestaurentMenu";
// import Instamart from "./components/Instamart";

const Instamart = lazy(() => import("./components/Instamart"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurentmenu/:resId",
        element: <RestaurentMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<div>Loading......</div>}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);

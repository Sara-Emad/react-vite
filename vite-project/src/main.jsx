import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Page2 from "./Page2.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DataProvider } from "./context/Datacontext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/Page2",
    element: <Page2 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  </React.StrictMode>
);

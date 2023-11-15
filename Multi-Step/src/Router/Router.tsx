import { createBrowserRouter } from "react-router-dom";
import { Register } from "../Pages/Register";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Register />,
  },
]);

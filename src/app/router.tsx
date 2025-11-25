import { createBrowserRouter } from "react-router";
import Home from "@pages/home";
import Header from "@widgets/header";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/homepage";
import Receipt from "../pages/receipt";
import Budget from "../pages/budget";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/receipt",
    element: <Receipt />,
  },
  {
    path: "/budget",
    element: <Budget />,
  },
]);

export default router;

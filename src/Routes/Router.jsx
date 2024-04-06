import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import News from "../Pages/News/News";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <News />,
      },
    ],
  },
]);

export default Router;

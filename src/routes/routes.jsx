import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Mian/Main";
import Home from "../pages/Home/Home";
import Terminal from "../Version/Version2/Terminal";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/v2',
          element: <Terminal></Terminal>
        }
      ]
    },
  ]);

  export default router;
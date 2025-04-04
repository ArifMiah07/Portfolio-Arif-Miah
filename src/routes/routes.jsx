import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Mian/Main";
import Home from "../pages/Home/Home";
import Terminal from "../Version/Version2/Terminal";
import Portfolio3 from "../Version/version3/Portfolio3";
import Home3 from "../Version/version3/pages/Home/Home";
import About3 from "../Version/version3/pages/About/About";
import Blogs3 from "../Version/version3/pages/Blogs/Blogs";
import Skills3 from "../Version/version3/pages/Skills/Skills";
import Projects3 from "../Version/version3/pages/Projects/Projects";
import Contact3 from "../Version/version3/pages/Contact/Contact";
import BlurGradientBackground from "../Version/version3/components/BlurGadBg/BlurGradientBackground";






const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/v2",
        element: <Terminal />,
      },
    ],
  },
  {
    path: "/v3",
    element: <Portfolio3 />,
    children: [
      {
        path: "", // This will match /v3
        element: <Home3 />,
      },
      {
        path: "about", // This will match /v3/about
        element: <About3 />,
      },
      {
        path: "blogs",
        element: <Blogs3 />, // Define the Blogs component
      },
      {
        path: "skills",
        element: <Skills3 />, // Define the Skills component
      },
      {
        path: "projects",
        element: <Projects3 />, // Define the Projects component
      },
      {
        path: "contact",
        element: <Contact3 />, // Define the Contacts component
      },
      {
        path: "blur-bg",
        element: <BlurGradientBackground></BlurGradientBackground>
      },
    ],
  },
]);

export default router;



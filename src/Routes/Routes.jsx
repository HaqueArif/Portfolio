import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Skills from "../pages/Home/Skills/Skills";
import Projects from "../pages/Home/Projects/Projects";
import About from "../pages/Home/About/About";
import Contact from "../pages/Home/Contact/Contact";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'/skills',
            element: <Skills></Skills>
        },
        {
            path:'/portfolio',
            element: <Projects></Projects>
        },
        {
            path:'/about',
            element: <About></About>
        },
        {
            path:'/contact',
            element: <Contact></Contact>
        },
      ]
    },
  ]);

export default router;

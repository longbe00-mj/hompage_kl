import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import AboutUs from "../pages/about/page";
import Business from "../pages/business/page";
import Portfolio from "../pages/portfolio/page";
import Partners from "../pages/partners/page";
import Contact from "../pages/contact/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/business",
    element: <Business />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/partners",
    element: <Partners />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;

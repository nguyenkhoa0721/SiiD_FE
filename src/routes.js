// import
import Dashboard from "views/Dashboard/Dashboard.js";
import Project from "views/Project";
import Portfolio from "views/Portfolio";
import Profile from "views/Profile";
import SignIn from "views/Authentication/SignIn.js";
import {FaHome, FaChalkboard, FaDoorOpen} from "react-icons/fa";
import {MdDesignServices, MdPerson} from "react-icons/md";
import ViewProject from "views/Project/viewProject";
var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <FaHome color="inherit" />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/project",
    name: "Project",
    icon: <FaChalkboard color="inherit" />,
    component: Project,
    layout: "/admin",
  },
  {
    path: "/viewProject",
    name: "View Project",
    icon: <FaChalkboard color="inherit" />,
    component: ViewProject,
    layout: "/admin",
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    icon: <MdDesignServices color="inherit" />,
    secondaryNavbar: true,
    component: Portfolio,
    layout: "/admin",
  },
  
  {
    name: "ACCOUNT PAGES",
    category: "account",
    state: "pageCollapse",
    views: [
      {
        path: "/profile",
        name: "Profile",
        icon: <MdPerson color="inherit" />,
        secondaryNavbar: true,
        component: Profile,
        layout: "/admin",
      },
      {
        path: "/signin",
        name: "Sign Out",
        icon: <FaDoorOpen color="inherit" />,
        secondaryNavbar: true,
        component: SignIn,
        layout: "/auth",
      },
    ],
  },
];
export default dashRoutes;

// import
import Dashboard from "views/Dashboard/Dashboard.js";
import Project from "views/Project";
// import Tables from "views/Dashboard/Tables.js";
// import Billing from "views/Dashboard/Billing.js";
import Profile from "views/Dashboard/Profile.js";
import SignIn from "views/Authentication/SignIn.js";
// import SignUp from "views/Authentication/SignUp.js";

import {
  HomeIcon,
  ProjectIcon,
  // StatsIcon,
  // CreditIcon,
  PersonIcon,
  SignoutIcon,
  PortfolioIcon,
  // DocumentIcon,
  // RocketIcon,
  // SupportIcon,
} from "components/Icons/Icons";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/project",
    name: "Project",
    icon: <ProjectIcon color="inherit" />,
    component: Project,
    layout: "/admin",
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    icon: <PortfolioIcon color="inherit" />,
    secondaryNavbar: true,
    component: Profile,
    layout: "/admin",
  },

  // {
  //   path: "/tables",
  //   name: "Tables",
  //   icon: <StatsIcon color="inherit" />,
  //   component: Tables,
  //   layout: "/admin",
  // },
  // {
  //   path: "/billing",
  //   name: "Billing",
  //   icon: <CreditIcon color="inherit" />,
  //   component: Billing,
  //   layout: "/admin",
  // },
  {
    name: "ACCOUNT PAGES",
    category: "account",
    state: "pageCollapse",
    views: [
      {
        path: "/profile",
        name: "Profile",
        icon: <PersonIcon color="inherit" />,
        secondaryNavbar: true,
        component: Profile,
        layout: "/admin",
      },
      {
        path: "/signin",
        name: "Sign Out",
        icon: <SignoutIcon color="inherit" />,
        secondaryNavbar: true,
        component: SignIn,
        layout: "/auth",
      },
      // {
      //   path: "/signin",
      //   name: "Sign In",
      //   icon: <DocumentIcon color="inherit" />,
      //   component: SignIn,
      //   layout: "/auth",
      // },
      // {
      //   path: "/signup",
      //   name: "Sign Up",
      //   icon: <RocketIcon color="inherit" />,
      //   secondaryNavbar: true,
      //   component: SignUp,
      //   layout: "/auth",
      // },
    ],
  },
];
export default dashRoutes;

// import
import SignIn from "views/Auth/SignIn.js";
import Users from "views/Dashboard/Users";
import Dashboard from "views/Dashboard/Dashboard";
import Profile from "views/Dashboard/Profile";

import {
  HomeIcon,
  DocumentIcon,
  PersonIcon,
  StatsIcon
} from "components/Icons/Icons";
import { IoDocument } from "react-icons/io5";
import Documents from "views/Dashboard/Documents";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/users",
    name: "Usuarios",
    icon: <PersonIcon color="inherit" />,
    secondaryNavbar: true,
    component: Users,
    layout: "/admin",
  },
  {
    path: "/docs",
    name: "Documentos",
    icon: <IoDocument color="inherit" />,
    secondaryNavbar: true,
    component: Documents,
    layout: "/admin",
  },
  {
    path: "/signin",
    name: "Sign In",
    rtlName: "لوحة القيادة",
    icon: <DocumentIcon color="inherit" />,
    component: SignIn,
    layout: "/auth",
  },
  // {
  //   name: "ACCOUNT PAGES",
  //   category: "account",
  //   rtlName: "صفحات",
  //   state: "pageCollapse",
  //   views: [
  //     {
  //       path: "/signin",
  //       name: "Sign In",
  //       rtlName: "لوحة القيادة",
  //       icon: <DocumentIcon color="inherit" />,
  //       component: SignIn,
  //       layout: "/auth",
  //     },
  //   ],
  // },
];
export default dashRoutes;

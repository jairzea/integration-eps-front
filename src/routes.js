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
import { IoDocument, IoLogOutSharp } from "react-icons/io5";
import Information from "views/Dashboard/Information";

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
    name: "Cajacopi",
    icon: <IoDocument color="inherit" />,
    secondaryNavbar: true,
    component: Information,
    layout: "/admin",
  },
  {
    path: "/signin",
    name: "Cerrar Sesión",
    rtlName: "لوحة القيادة",
    icon: <IoLogOutSharp color="inherit" />,
    component: SignIn,
    layout: "/auth",
  },
];
export default dashRoutes;

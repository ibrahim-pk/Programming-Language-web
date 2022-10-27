import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../component/header/Navbar";
import SideNavBar from "../component/header/SideNavBar";
const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Main;

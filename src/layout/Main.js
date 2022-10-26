import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../component/header/Navbar";
import SideNavBar from "../component/header/SideNavBar";
const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="row container mt-4">
        <div className="col-md-3">
          <SideNavBar />
        </div>
        <div className="col-md-9">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;

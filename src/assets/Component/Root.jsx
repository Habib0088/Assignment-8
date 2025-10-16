import React from "react";
import Nav from "./Nav";
import { Outlet } from "react-router";
import Footer from "../../Route/Footer";

const Root = () => {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;

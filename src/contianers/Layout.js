import React from "react";
import Header from "../components/Header";
import Event from "./Event";

const Layout = () => {
  return (
    <div>
      <Header user={{ profile_img: "./logo.svg", name: "username" }} />
      <Event />
    </div>
  );
};

export default Layout;

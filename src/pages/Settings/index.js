import Header from "../../contianers/Header";
import Toolbar from "../../contianers/Toolbar";
import Sidebar from "../../contianers/Sidebar";
import Layout from "../../components/Layout";
import "./index.css";
import { useState } from "react";

const Settings = () => {
  const [drawer, setDrawer] = useState(false);

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };
  return (
    <>
      <div className="Settings__page">
        <Toolbar />
        <Header open={toggleDrawer} />
        {drawer && <Sidebar close={toggleDrawer} />}
        <Layout></Layout>
      </div>
    </>
  );
};

export default Settings;

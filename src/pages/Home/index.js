import Footer from "../../contianers/Footer";
import Toolbar from "../../contianers/Toolbar";
import "./index.css";
import Profile from "../../contianers/Profile";
import Widget from "../../contianers/Widget";
import Events from "../../contianers/Events";

const Home = () => (
  <div className="Home__page">
    <Toolbar />
    <div className="Home__columns">
      <Profile />
      <Widget title="Payments" color="dark">
        <p>Your recent payments</p>
      </Widget>
      <Widget title="Beneficiaries" color="light" />
      <Events />
    </div>
    <Footer />
  </div>
);

export default Home;

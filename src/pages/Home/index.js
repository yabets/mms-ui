import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Footer from "../../contianers/Footer";
import Toolbar from "../../contianers/Toolbar";
import Input from "../../components/Input";
import "./index.css";

const Home = () => (
  <div className="Home__page">
    <Toolbar />
    <div className="Home__columns">
      <section className="Home__events">
        <h1 className="Home__title">Our Events</h1>
        <div className="Home__search">
          <Input placeholder="Search Here" />
          <label htmlFor="sort">Sort by</label>
          <select htmlName="sort">
            <option>Date</option>
          </select>
        </div>
        <article className="Home__events--container"></article>
      </section>
    </div>
    <Footer />
  </div>
);

export default Home;

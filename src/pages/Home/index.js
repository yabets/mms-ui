import Button from "../../components/Button";
import Toolbar from "../../contianers/Toolbar";
import Footer from "../../contianers/Footer";
import Hand from "../../assets/hand.png";
import "./index.css";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="Home__page">
    <Toolbar />
    <div className="Home__columns">
      <section className="Home__main">
        <h1 className="Home__title">Welcome</h1>
        <article>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac
          nisl tellus. Aliquam erat volutpat. Morbi at volutpat felis. Nullam
          consequat pharetra tellus. Phasellus viverra libero nec augue maximus
          scelerisque. Nulla id laoreet arcu. Cras suscipit odio nec diam
          sodales, a tempus nunc ullamcorper.
        </article>
        <div className="Home__login">
          <Link to="/login">
            <Button>Login</Button>
          </Link>
        </div>
      </section>
      <section className="Home__hand">
        <img
          className="Home__hand--img"
          src={Hand}
          alt="hand holding membership card"
        />
      </section>
    </div>
    <Footer />
  </div>
);

export default Home;

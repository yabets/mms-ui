import "./index.css";
import Input from "../../components/Input";
import Toolbar from "../../contianers/Toolbar";
import Footer from "../../contianers/Footer";
import Button from "../../components/Button";
import Hand from "../../assets/hand.png";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";

const Login = () => (
  <>
    <div className="Login__columns">
      <section className="Login__hand">
        <Link className="Login__logo" to="/">
          <Logo />{" "}
        </Link>
        <img
          className="Login__hand--img"
          src={Hand}
          alt="hand holding membership card"
        />
      </section>
      <section className="Login__main">
        <div className="Login__toolbar">
          <Toolbar />
        </div>
        <form className="Login__form">
          <h1 className="Login__title">Login</h1>
          <p className="Login__description">
            Use your username and password to login
          </p>
          <div className="Login__formGroup">
            <label className="Login__form--label" htmlFor="username">
              Username
            </label>
            <Input className="Login__form--input" placeholder="Your username" />
          </div>
          <div className="Login__formGroup">
            <label className="Login__form--label" htmlFor="username">
              Password
            </label>
            <Input type="password" placeholder="Your username" />
          </div>
          <div className="Login--button">
            <Link to="/home">
              <Button>Login</Button>
            </Link>
          </div>
        </form>
        <Footer />
      </section>
    </div>
  </>
);

export default Login;

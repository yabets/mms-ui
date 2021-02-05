import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Logo from "../../components/Logo";
import "./index.css";

const Toolbar = () => (
  <header className="Toolbar__main">
    <div className="Toolbar__logo">
      <Link to="/">
        <Logo />
      </Link>
    </div>
    <div className="Toolbar__login">
      <Link to="/login">
        <Button>Login</Button>
      </Link>
    </div>
  </header>
);

export default Toolbar;

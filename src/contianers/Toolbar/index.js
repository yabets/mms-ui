import Button from "../../components/Button";
import Logo from "../../components/Logo";
import "./index.css";

const Toolbar = () => (
  <header className="Toolbar__main">
    <div className="Toolbar__logo">
      <Logo />
    </div>
    <div className="Toolbar__login">
      <Button>Login</Button>
    </div>
  </header>
);

export default Toolbar;

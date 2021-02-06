import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";

const Header = ({ open }) => (
  <div className="Header__main">
    <h2>Welcome FirstName LastName</h2>
    <div onClick={open} className="Header__bars">
      <FontAwesomeIcon icon={faBars} />
    </div>
  </div>
);

export default Header;

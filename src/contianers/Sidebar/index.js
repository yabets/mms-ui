import Backdrop from "../../components/Backdrop";
import Button from "../../components/Button";
import NavigationItem from "../../components/NavigationItem";
import "./index.css";

const Sidebar = ({ close }) => (
  <>
    <Backdrop onClick={close} />
    <div className="Sidebar__main">
      <div className="Sidebar__close">
        <Button onClick={close}>X</Button>
      </div>
      <nav className="Sidebar__navigation">
        <NavigationItem active>User Setting</NavigationItem>
        <NavigationItem>Beneficiary</NavigationItem>
        <NavigationItem>Payment</NavigationItem>
        <NavigationItem>Sponsorship</NavigationItem>
      </nav>
    </div>
  </>
);

export default Sidebar;

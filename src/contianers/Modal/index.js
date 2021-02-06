import Backdrop from "../../components/Backdrop";
import Button from "../../components/Button";
import Card from "../../components/Card";
import CardTitle from "../../components/CardTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faClock,
  faMapMarkerAlt,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import "./index.css";

const Modal = ({ event, closeModal }) => (
  <>
    <Backdrop />
    <div className="Modal__main">
      <Card>
        <CardTitle>{event.title}</CardTitle>
        <div class="Modal__close--button">
          <Button onClick={closeModal}>X</Button>
        </div>
        <p>{event.body}</p>
        <Card color={"var(--white-border)"} shadow="no-shadow">
          <p className="Modal__datetime">
            <span>
              <FontAwesomeIcon
                className="Modal__event--icon Modal__icon"
                icon={faCalendarAlt}
              />
              {event.date}
            </span>
            <span className="Modal__time">
              <FontAwesomeIcon
                className="Modal__event--icon Modal__icon"
                icon={faClock}
                inverse
              />
              {event.time}
            </span>
          </p>
          <p>
            <FontAwesomeIcon
              className="Modal__event--icon Modal__icon"
              icon={faMapMarkerAlt}
            />
            {event.location}
          </p>
        </Card>
        <Card color={"var(--dark-voilet)"} shadow="no-shadow">
          <p className="Modal__price">
            <FontAwesomeIcon className="Modal__icon" icon={faMoneyBill} />
            {event.price}
          </p>
        </Card>
      </Card>
    </div>
  </>
);

export default Modal;

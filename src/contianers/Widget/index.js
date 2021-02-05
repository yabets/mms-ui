import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

const Widget = ({ title, children, color }) => (
  <div className={"Widget__contianer " + color}>
    <div className="Widget__header">
      <h2 className="Widget__title">{title}</h2>
      <FontAwesomeIcon icon={faEllipsisV} />
    </div>
    <div className="Widget__body">{children}</div>
  </div>
);

export default Widget;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

const Search = () => (
  <div className="Search__box">
    <input className="Search--input" placeholder="Search Here" />
    <FontAwesomeIcon className="Search--icon" icon={faSearch} />
  </div>
);

export default Search;

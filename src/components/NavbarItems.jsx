import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import "../styling/navbar.css";

function NavbarItems( ) {


  return (
    <div id="navbar-items-container">
      <ul>
        <a href="#work">
          <li className="navbar-items">Work</li>
        </a>
        <a href="#pricing">
          <li className="navbar-items">Pricing</li>
        </a>
        <a href="#services">
          <li className="navbar-items">Services</li>
        </a>
      </ul>
      <button className="start-a-project-btn">
        Start a Project
        <FontAwesomeIcon className="arrow-right" icon={faArrowRightLong} />
      </button>
    </div>
  );
}

export default NavbarItems;

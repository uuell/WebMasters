import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "../styling/navbar.css";

function NavbarItems() {

  const [class_menu, set_class_menu] = useState("");
  
  function setClass(event) {
    let open_menu = event.currentTarget.classList.contains('open-menu')
    let close_menu = event.currentTarget.classList.contains('close-menu')

    if (!open_menu) {
      set_class_menu("open-menu")
    } else if(!close_menu && open_menu) {
      set_class_menu("close-menu")
    }
  }

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
      <div id="menu" className={class_menu} onClick={setClass}>
        <div className="menu-btn bar-1"></div>
        <div className="menu-btn bar-2"></div>
      </div>
    </div>
  );
}

export default NavbarItems;

import NavbarItems from "./NavbarItems";
import { useState } from "react";
import {useRef, useEffect} from 'react';

function Navbar() {

  const ref = useRef(null);

  const [class_menu, set_class_menu] = useState("");
  const [navClass, setNavClass] = useState("");

  function handleClick(event) {
    let open_menu = event.currentTarget.classList.contains('open-menu');
    let close_menu = event.currentTarget.classList.contains('close-menu');
    
    if (!open_menu) {
      set_class_menu("open-menu");
    } else if(!close_menu && open_menu) {
      set_class_menu("close-menu");
    }
    const navbar = ref.current;
    if(navbar.className === "" || navbar.className == "animate-up") {
      setNavClass("animate-down")
    } else if(navbar.className == "animate-down") {
      setNavClass("animate-up")
    }
  }

  return (
    <nav ref={ref} id="navbar" className={navClass}>
        <div id="title-container">
          <a href="#showcase">
            <h1 id="title">
              Web<em>Masters</em>
            </h1>
          </a>
        </div>
        <NavbarItems />
        <div id="menu" className={class_menu} onClick={handleClick}>
          <div className="menu-btn bar-1"></div>
          <div className="menu-btn bar-2"></div>
        </div>
    </nav>
  );
}

export default Navbar;

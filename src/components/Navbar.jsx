import NavbarItems from "./NavbarItems";
import icon from "../assets/webmastersicon.png";

function Navbar() {
  return (
    <nav id="navbar">
      <div id="title-container">
        <a href="#showcase">
          <h1 id="title">
            Web<em>Masters</em>
          </h1>
        </a>
      </div>
      <NavbarItems />
    </nav>
  );
}

export default Navbar;

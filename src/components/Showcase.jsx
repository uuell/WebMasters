import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import "../styling/showcase.css";

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const d = new Date();
let year = d.getFullYear();
let nameOfMonth = month[d.getMonth()];

function Showcase() {
  return (
    <div id="showcase">
      <div className="heading-container">
        <div className="showcase-heading">
          <span className="bounce">The</span> <span>website </span>
          <span>that</span> <em className=" green-clr">takes </em>
          <span>your </span>
        </div>
        <div className="showcase-heading">
          <span>business</span> <span>to</span>
          <em className=" green-clr"> the</em>
          <em className=" green-clr"> next</em>
          <em className=" green-clr"> level.</em>
        </div>
      </div>
      <div className="descriptions-container">
      {/* This Div has animation entry the same as heading */}
        <div className="description-container">
            <p className="description">A Web design & Webflow studio for crafting unique, inspiring, and high-quality websites that convert.</p>
            <button className="view-pricing-plan-btn">View Pricing Plans <FontAwesomeIcon className='arrow-right' icon={faArrowRightLong}/></button>
        </div>
        <div className="location-container">
            <p className="location">Crafting Digital Dreams with Web Design & Webflow in <em className="green-clr">Manila, Ph.</em></p>
            <div className="available-date">Available for <span>{nameOfMonth} {year}</span> <div className="green-circle"></div></div>
        </div>
      </div>
    </div>
  );
}
export default Showcase;

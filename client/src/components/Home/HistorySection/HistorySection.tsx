import React from "react";
import picColorGuardLady from "../../../res/img/photo-content/colorguard.jpg";
import picSunrisers1961 from "../../../res/img/photo-content/drumline1961.jpg";
import homeStarMap from "../../../res/img/sunrisers-home-map-trans.png";
import "./HistorySection.scss";

const HistorySection: React.FC<any> = () => {
  return (
    <div className="History row">
      <div className="left-side col text-right">
        <h2>The Sunrisers. A legacy of history.</h2>
        <p>
          Founded in <b>1954</b> on Long Island, New York, the Sunrisers is a
          non-profit, all-age, open class drum corps with a proud history of
          innovation and musical excellence.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
          distinctio et eveniet, corrupti minus, quas doloribus numquam odit
          obcaecati possimus suscipit qui deleniti dicta labore. Ratione velit a
          aliquid odit.
        </p>

        <img id="home-map-star" src={homeStarMap} alt="" />
      </div>

      <div className="right-side col text-center">
        <img id="pic-color-guard" src={picColorGuardLady} alt="" />
        <img id="pic-drumline-1961" src={picSunrisers1961} alt="" />
      </div>
    </div>
  );
};

export default HistorySection;

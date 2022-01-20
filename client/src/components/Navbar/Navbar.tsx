import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NoticeBanner from "../NoticeBanner/NoticeBanner";
import svgSunLogo from "../../res/svg/logo-sun.svg";
import svgSunrisersCursive from "../../res/svg/logo-text.svg";
import "./Navbar.scss";

interface INavbarProps {
  hideSunLogo?: boolean;
}

const Navbar: React.FC<INavbarProps> = (props: INavbarProps) => {
  return (
    <div className="Navbar">
      {!props.hideSunLogo ? (
        <Link to="/">
          <img className="sun-logo" src={svgSunLogo} alt="" id="sun-logo" />
        </Link>
      ) : (
        <div />
      )}

      <div className="container justify-content-center mt-4">
        <div
          className="alert alert-info alert-dismissible fade show"
          role="alert"
        >
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <h6 className="alert-heading">Development Website</h6>
          <p>
            Watch out! <b>You're viewing a development build.</b> Some features
            might not be functioning as expected, or be in a pre-release state,
            where some items are not "polished" yet. This is to save time and
            money.
          </p>
          <hr />
          <p>
            Close these notices by clicking the 'X' in the top-right. For
            questions or concerns, please email me.
          </p>
        </div>

        <div className="col">
          <div className="link-panel row">
            <ul className="">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="#">Audition</Link>
              </li>

              <li>
                <Link to="/schedule">Schedule</Link>
              </li>
              <li>
                <Link to="/staff">Staff</Link>
              </li>
              <li>
                <Link to="/give">Donate</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="box"></div>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NoticeBanner from "../NoticeBanner/NoticeBanner";
import "./Navbar.scss";

interface INavbarProps {}

const Navbar: React.FC<INavbarProps> = (props: INavbarProps) => {
  return (
    <div className="Navbar">
      <div className="container justify-content-center">
        <div className="alert alert-danger" role="alert">
          <p>
            Watch out! <b>You're viewing a development build.</b> Some features
            might not be functioning as expected, or be in a pre-release state.
            For questions or concerns, please email me.
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

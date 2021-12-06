import React, { useEffect, useState } from "react";
import "./Navbar.scss";

interface INavbarProps {}

const Navbar: React.FC<INavbarProps> = (props: INavbarProps) => {
  return (
    <div className="Navbar">


          <div className="link-panel">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Audition</a></li>

              <li><a href="#">Schedule</a></li>
              <li><a href="#">Staff</a></li>
              <li><a href="#">Donate</a></li>
            </ul>
          </div>
        <div className="box">
        </div>

    </div>
  );
};

export default Navbar;

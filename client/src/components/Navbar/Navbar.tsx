import React, { useEffect, useState } from "react";
import "./Navbar.scss";

interface INavbarProps {}

const Navbar: React.FC<INavbarProps> = (props: INavbarProps) => {
  return (
    <div className="Navbar">
      <section className="curved">
        <div className="selectable">Selectable</div>

      </section>
    </div>
  );
};

export default Navbar;

import React from "react";
import "./Footer.scss";
import LogoWhiteout from "../../res/img/logo-whiteout.png";

interface IFooterProps {}

const Footer: React.FC<IFooterProps> = (props: IFooterProps) => {
  return (
    <div className="Footer">
      <div className="content">
        <div className="links">
          <div className="col">
            <p>Join the Sunrisers</p>
            <p>View schedule</p>
            <p>Donate/Support</p>
          </div>
          <div className="col">
            <p>Buy merchandise</p>
            <p>View all news</p>
            <p>See staff</p>
          </div>
          <div className="col">
            <img src={LogoWhiteout} className="logo-whiteout" alt="" />
            <div className="social-media">
              {/* TODO - Add links */}
              <i className="fab fa-facebook fa-2x"></i>
              <i className="fab fa-twitter fa-2x"></i>
            </div>
            <p>mail@mail.com</p>
          </div>
        </div>

        <div className="bottom-text">
          <small>(C) 2021, Any Copyright or LIcensing Here</small>
          <small>Design by Lee</small>
        </div>

      </div>
    </div>
  );
};

export default Footer;

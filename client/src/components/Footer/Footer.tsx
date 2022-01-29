import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import LogoWhiteout from "../../res/img/logo-alt.png";
import LogoCursive from "../../res/svg/logo-text-whiteout.svg";

// pretier-ignore
interface IFooterProps {}

const Footer: React.FC<IFooterProps> = (props: IFooterProps) => {
  return (
    <div className="Footer container-fluid">
      <div className="row">
        {/* FIXME - Verify text-align-right is working when online */}
        <div className="col-sm-6 mx-auto text-right">
          <Link to="#">
            <p>Join the Sunrisers</p>
          </Link>

          <Link to={"/schedule"}>
            <p>View Schedule</p>
          </Link>

          <Link to="#" className="disabled">
            <p>See All News</p>
          </Link>

          <Link to="/staff">
            <p>See Staff</p>
          </Link>

          <Link to="#" className="disabled">
            <p>See Policies</p>
          </Link>

          <a href="https://sunrisers-drum-bugle-corps.myshopify.com/">
            <p>Buy Merchandise</p>
          </a>

          <Link to="#" className="disabled">
            <p>Donate or Support</p>
          </Link>

          <Link to="#" className="disabled">
            <p>Sexual Harrassment and Assault</p>
          </Link>
        </div>

        <div className="col-sm-6">
          <div className="container">
            <div className="row text-center">
              <a href="https://www.facebook.com/lisunrisers">
                <i className="fab fa-facebook fa-2x"></i>
              </a>
              {/* <i className="fab fa-twitter fa-2x"></i> */}
            </div>
          </div>

          <hr />
          <img src={LogoCursive} className="" alt="" />
          <h6>info@sunrisersdrumcorps.org</h6>
          <p className="mx-auto">Long Island, New York</p>
        </div>
      </div>

      <div className="row bottom-text">
        <hr />
        <small>Sunrisers Drum {`&`} Bugle Corps, (C) 2022</small>
        <small>Website MIT license.</small>
      </div>
    </div>
  );
};

export default Footer;

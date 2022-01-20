import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import LogoWhiteout from "../../res/img/logo-alt.png";
import LogoCursive from "../../res/svg/logo-text-whiteout.svg";

// pretier-ignore
interface IFooterProps {

}

const Footer: React.FC<IFooterProps> = (props: IFooterProps) => {
  return (
    <div className="Footer container-fluid">
      <div className="row">
        <div className="col-md-2" />

        <div className="col-sm-8 ">
          <div className="row">
            {/* FIXME - Verify text-align-right is working when online */}
            <div className="col-md-6 text-align-right">
              <Link to="#">
                <p>Request information</p>
              </Link>

              <Link to={"/schedule"}>
                <p>Schedule</p>
              </Link>

              <Link to="/news">
                <p>All News</p></Link>

              <Link to={"/policy"}>
                <p>Policies</p>
              </Link>

              <Link to="#">
                <p>Merchandise</p>
              </Link>

              <Link to="/support">
                <p>Donate or Support</p>
              </Link>

              <Link to={"/policy"}>
                <p>Sexual Harrassment and Assault</p>
              </Link>
            </div>


            <div className="col-md-6 mx-auto">
              <div className="container">
                <div className="row">
                  <i className="fab fa-facebook fa-2x"></i>
                  <i className="fab fa-twitter fa-2x"></i>
                </div>
              </div>

              <hr />
              <img src={LogoCursive} className="mx-auto" alt="" />
              <h6>mail@mail.com</h6>
              <p className="mx-auto">Long Island, New York</p>
            </div>
          </div>

          <div className="row bottom-text">
            <small>Sunrisers Drum {`&`} Bugle Corps, (C) 2022</small>
            <small>Website MIT license.</small>
          </div>
        </div>

        <div className="col-md-2" />
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import HistorySection from "./HistorySection/HistorySection";
import HomeCarousel from "./HomeCarousel/HomeCarousel";
import HomePhotoGallery from "./HomePhotoGallery/HomePhotoGallery";
import MiniUpcomingEvents from "../MiniUpcomingEvents/MiniUpcomingEvents";
import Navbar from "../Navbar/Navbar";
import MiniNews from "../MiniNews/MiniNews";
import NoticeBanner from "../NoticeBanner/NoticeBanner";
import LeeButton from "../LeeButton/LeeButton";
import "./Home.scss";
import svgSunrisersCursive from "../../res/svg/logo-text.svg";
import svgSunlogo from "../../res/svg/logo-sun.svg";

interface IHomeProps {}

const Home: React.FC<IHomeProps> = (props: IHomeProps) => {
  return (
    <div className="Home">
      <Navbar hideSunLogo={true} />

      <div className="hero">
        <img src={svgSunlogo} alt="" id="sun-logo" />

        <img src={svgSunrisersCursive} alt="" id="text-logo" />

        <div className="container mb-5">
          <div className="row">
            <div className="col-7"></div>
            <div className="col-5">
              <div
                className="alert alert-warning alert-dismissible fade show col-12"
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
                <h6 className="alert-heading">Developer Note</h6>
                <p>
                  The buttons started acting wonky, so I've replaced them with
                  generic buttons for now. These will not be the final buttons
                  (unless of course you really like them).
                </p>
              </div>

              <LeeButton
                pathToURL="#"
                displayText="Join"
                fontAwesomeIconCode=""
                bootstrapBtnMode="primary"
              />

              <LeeButton
                pathToURL="/schedule"
                displayText="Schedule"
                fontAwesomeIconCode=""
              />
            </div>
          </div>
        </div>

        {/* <div className="selection-area">
          <div className="pardes-button">
            <a className="cta" href="#">
              <span className="cta-row">
                <span>JOIN</span>
                <span>
                  <PardesCTAButton />
                </span>
              </span>
              <div className="cta-row">
                <p className="cta-subtext">Request an audition package</p>
              </div>
            </a>
          </div>

          <br />

          
        </div> */}
      </div>

      {/* 
<div className="container selection-area">
  <div className="little-links row">
    <div className="col">
      <button>
        <i className="fas fa-calendar"></i> Schedule
      </button>
    </div>
    <div className="col">
      <button>
        <i className="fas fa-user"></i>Staff
      </button>
    </div>
    <div className="col">
      <button>
        <i className="fas fa-shopping-cart"></i>Merch
      </button>
    </div>
    <div className="col">
      <button>
        <i className="fas fa-heart"></i>Donate
      </button>
    </div>
  </div>
</div>
*/}

      <div className="container">
        <div className="row">
          <div className="col-7">
            <MiniNews />
          </div>
          <div className="col-5">
            <MiniUpcomingEvents />
          </div>
        </div>
      </div>

      <br />
      <br />

      <div className="container-fluid">
        <HistorySection />
      </div>

      {/* FIXME */}
      <br />
      <br />
      <br />
      <br />
      <br />

      {/* <HomeCarousel /> */}
      <HomePhotoGallery />

      <Footer />
    </div>
  );
};

export default Home;

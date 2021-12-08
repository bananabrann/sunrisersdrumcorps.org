import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import NewsTile from "../NewsTile/NewsTile";
import "./Home.scss";
import svgSunrisersCursive from "../../res/svg/logo-text.svg";
import svgSunlogo from "../../res/svg/logo-sun.svg";
import { ReactComponent as PardesCTAButton } from "../../res/svg/pardes-button.svg";

interface IHomeProps {}

const Home: React.FC<IHomeProps> = (props: IHomeProps) => {
  return (
    <div className="Home">
      <Navbar />

      <div className="hero">
        <img src={svgSunrisersCursive} alt="" id="text-logo" />

        <div className="selection-area">
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

          <div className="little-links">
            <button>
              <i className="fas fa-calendar"></i> Schedule
            </button>
            <button>
              <i className="fas fa-user"></i>Staff
            </button>
            <button>
              <i className="fas fa-shopping-cart"></i>Merch
            </button>
            <button>
              <i className="fas fa-heart"></i>Donate
            </button>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
            dolorum quidem neque blanditiis corporis in sapiente totam rerum
            nihil sit. Voluptas culpa aliquam quasi ut optio sapiente placeat,
            alias dignissimos!
          </p>
        </div>

        <img src={svgSunlogo} alt="" id="sun-logo" />
      </div>
      <Footer />

      {/* 
      <div className="bonus-area">
        <div className="content">
          <h3>Bonus Area</h3>
          <p>
            Bonus area is great for including snippets of stuff. Though
            preferably text, this can ulatimately be anything you would like.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            voluptatem incidunt dignissimos non debitis voluptate vel, impedit
            ex eum necessitatibus? Voluptatibus et dolor voluptate aspernatur
            iusto nam, tempora corrupti repellendus. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Aliquid eaque, dolorum, sed
            perferendis nulla obcaecati iste magni molestias neque repellendus
            voluptas ut itaque sit. Ipsum nam impedit ut reiciendis autem?
          </p>
          <div className="do-more">Do More!</div>
        </div>
      </div>

      <div className="news-area">
        <div className="content">
          <Link to="/news">
            <h3>News</h3>
            <h3 className="see-all-news">
              See All News <i className="fas fa-chevron-right" />
            </h3>
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            qui nemo assumenda vero incidunt voluptatibus, sequi corrupti magnam
            porro saepe nesciunt debitis omnis quae quasi ducimus molestiae
            facilis tempora! Ipsa!
          </p>
          <div className="tiles">
            <NewsTile
              title="Just A Normal Title"
              body={
                "This style can change! How do you like it? Notice the difference in heights. There's a few tidying-up to do, but that's time consuming so I wanted your feedback first."
              }
              url="/news/3"
              date={"01 January 1970 00:00 UTC"}
            />

            <NewsTile
              title="Just A Normal Title"
              body={
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi qui nemo assumenda vero incidunt voluptatibus, sequi corrupti magnam porro saepe nesciunt debitis omnis quae quasi ducimus molestiae facilis tempora! Ipsa!"
              }
              url="/news/3"
              date={"01 January 1970 00:00 UTC"}
            />

            <NewsTile
              title="Just A Normal Title"
              body={
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi qui nemo assumenda vero incidunt voluptatibus, sequi corrupti magnam porro saepe nesciunt debitis omnis quae quasi ducimus molestiae facilis tempora! Ipsa!"
              }
              url="/news/3"
              date={"01 January 1970 00:00 UTC"}
            />
          </div>
        </div>
      </div>
*/}
    </div>
  );
};

export default Home;

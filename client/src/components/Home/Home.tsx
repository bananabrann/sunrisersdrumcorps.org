import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar"
import NewsTile from "../NewsTile/NewsTile";
import Footer from "../Footer/Footer";
import "./Home.scss";
import svgSunrisersCursive from "../../res/svg/logo-text.svg";
import svgSunlogo from "../../res/svg/logo-sun.svg";

interface IHomeProps {}

const Home: React.FC<IHomeProps> = (props: IHomeProps) => {
  return (
    <div className="Home">
      {/* <Navbar /> */}
      <div className="hero">

      <img src={svgSunrisersCursive} alt="" id="text-logo" />

      {/* <div className="buttons-container">
        <p>Join</p>
      <button className="">hi</button>
      </div> */}




      <img src={svgSunlogo} alt="" id="sun-logo" />


      </div>
      {/* <img src={svgSunrisersCursive} /> */}

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


      {/* <Footer /> */}
    </div>
  );
};

export default Home;

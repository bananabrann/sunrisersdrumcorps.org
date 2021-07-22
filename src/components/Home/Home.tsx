import React from "react";
import "./Home.scss";

interface IHomeProps {}

const Home: React.FC<IHomeProps> = (props: IHomeProps) => {
  return (
    <div className="Home">
      <div className="hero">
        {/* 
        TODO -
        Add content and design
      */}
      </div>

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
          <h3>News</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            qui nemo assumenda vero incidunt voluptatibus, sequi corrupti magnam
            porro saepe nesciunt debitis omnis quae quasi ducimus molestiae
            facilis tempora! Ipsa!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

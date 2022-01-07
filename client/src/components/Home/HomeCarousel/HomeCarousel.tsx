import React from "react";
import picture1 from "../../../res/img/photo-content/colorguard.jpg";
import picture2 from "../../../res/img/photo-content/ensemble.jpg";
import picture3 from "../../../res/img/photo-content/1963hornline.jpg";
import picture4 from "../../../res/img/photo-content/brassplayer.jpg";
import "./HomeCarousel.scss";

const HomeCarousel: React.FC<unknown> = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="HomeCarousel carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>

      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={picture1} alt="First slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5>My Caption Title (1st Image)</h5>
            <p>
              The whole caption will only show up if the screen is at least
              medium size.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src={picture3}
            alt="Second slide"
          />
           <div className="carousel-caption d-none d-md-block">
            <h5>Since 1961</h5>
            <p>
              The whole caption will only show up if the screen is at least
              medium size.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src={picture2}
            alt="Third slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src={picture4}
            alt="Fourth slide"
          />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default HomeCarousel;

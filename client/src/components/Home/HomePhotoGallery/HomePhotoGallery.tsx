import { CSSProperties, DetailedHTMLProps } from "react";
import { skipPartiallyEmittedExpressions } from "typescript";

import picColorGuardLady from "../../../res/img/photo-content/colorguard.jpg";
import picFrontEnsembleSmiling from "../../../res/img/photo-content/ensemble.jpg";
import picHornlineFrom1963 from "../../../res/img/photo-content/1963hornline.jpg";
import picTrumpetPlayer from "../../../res/img/photo-content/brassplayer.jpg";
import picBehindDrumMajor from "../../../res/img/photo-content/fieldPerformance.jpg";
import picSchoolCircle from "../../../res/img/photo-content/schoolCircle.jpg";

const HomePhotoGallery: React.FC<any> = () => {
  const styles: { [key: string]: React.CSSProperties } = {
    modal: {
      backgroundColor: "rgba(251, 251, 251, 0.2)",
    },
  };

  return (
    <div className="row">
      <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
        <img
          src={picColorGuardLady}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Boat on Calm Water"
        />

        <img
          src={picFrontEnsembleSmiling}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Wintry Mountain Landscape"
        />
      </div>

      <div className="col-lg-4 mb-4 mb-lg-0">
        <img
          src={picHornlineFrom1963}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Mountains in the Clouds"
        />

        <img
          src={picTrumpetPlayer}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Boat on Calm Water"
        />
      </div>

      <div className="col-lg-4 mb-4 mb-lg-0">
        <img
          src={picBehindDrumMajor}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Boat on Calm Water"
        />

        <img
          src={picSchoolCircle}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Boat on Calm Water"
        />
      </div>
    </div>
  );
};

export default HomePhotoGallery;

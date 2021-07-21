import React from "react";
import Logo from "../../res/img/logo.png";
import "./Home.scss";

interface IHomeProps {
}

const Home: React.FC<IHomeProps> = (props: IHomeProps) => {
  return (
    <div className="Home">
      <div className="hero">
        <div className="content">
          <img src={Logo} alt="The Sunrisers' logo" />
          <a href="#" className="join-button">Join</a>
        </div>
      </div>
      <div className="test">Hi</div>
    </div>
  );
};

export default Home;

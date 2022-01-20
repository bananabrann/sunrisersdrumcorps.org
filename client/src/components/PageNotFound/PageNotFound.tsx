import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./PageNotFound.scss";

const PageNotFound: React.FC<any> = (props: any) => {
  return (
    <div className="PageNotFound">
      <Navbar />

      <div className="container">
        <div className="alert alert-info fade show" role="alert">
          <h6 className="alert-heading">Developer Note</h6>
          <p>
            This is a 404 page. This page will show when a user navigates to a
            url that does not exist.
          </p>
          <hr />
          <p>
            Some fun things can be added here. A lot of times websites use their
            404 page to be a little bit goofy, or hide Easter eggs.
          </p>
        </div>

        <div className="alert alert-danger fade show" role="alert">
          <h6 className="alert-heading">That's a 404</h6>
          <p>Uh-oh, I couldn't find the page you were looking for...</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PageNotFound;

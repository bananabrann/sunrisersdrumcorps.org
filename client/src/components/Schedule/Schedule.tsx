import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Schedule.scss";

interface IScheduleProps {}

const Schedule: React.FC<IScheduleProps> = (props: IScheduleProps) => {
  useEffect(() => {
    document.title = "The Sunrisers - Schedule";
  }, []);

  return (
    <div className="Schedule">
      <Navbar />
      <div className="row">
        <iframe
          className="container-fluid"
          src="https://calendar.google.com/calendar/embed?src=cc2844kp81lfo1oti18hh92h9s%40group.calendar.google.com&ctz=America%2FNew_York"
          title="Sunrisers DB Schedule"
          id="test"
          width="800"
          height="600"
          scrolling="no"
        ></iframe>
      </div>

      <Footer />
    </div>
  );
};

export default Schedule;

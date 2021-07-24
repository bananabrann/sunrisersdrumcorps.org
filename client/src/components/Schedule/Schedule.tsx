import React from "react";
import Footer from "../Footer/Footer";
import "./Schedule.scss";

interface IScheduleProps {}

const Schedule: React.FC<IScheduleProps> = (props: IScheduleProps) => {
  return (
    <div className="Schedule">
      {/* TODO - Add navbar */}

      <div className="title-area">
        <div className="content">
          <h3>Schedule</h3>
        </div>
      </div>
      <div className="cal-area">
        <iframe
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

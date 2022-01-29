import React, { useEffect, useState } from "react";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import moment, { Moment } from "moment";
import { pagnateText } from "../../utils";
import "./MiniUpcomingEvents.scss";
import { Link } from "react-router-dom";

const calId = "cc2844kp81lfo1oti18hh92h9s@group.calendar.google.com";
const requestConfigGetEvents: AxiosRequestConfig = {
  method: "GET",
  url: `https://www.googleapis.com/calendar/v3/calendars/${calId}/events?key=AIzaSyDCA41xVkZjtJU9RptL30mxtIgmPT2npaI`,
  headers: {
    Accept: "application/json",
  },
  params: {
    singleEvents: true,
    maxResults: 3,
    orderBy: "startTime",
    timeMin: new Date().toISOString(),
  },
};

const MiniUpcomingEvents: React.FC<any> = () => {
  const [nextEvents, setNextEvents] = useState<gapi.client.calendar.Event[]>([]); // prettier-ignore
  const [error, setError] = useState<undefined | AxiosError>(undefined);

  useEffect(() => {
    fetchEvents();
  }, []);

  function fetchEvents() {
    axios(requestConfigGetEvents)
      .then((res: AxiosResponse) => {
        // NOTE -- Types from gapi are not enforced within the Axios request.
        //         These are just to provide convenience within the code editor.

        const listEntries: gapi.client.calendar.Event[] = res.data.items;
        setNextEvents(listEntries);
      })
      .catch((err: AxiosError) => {
        setError(err);
        console.error(err.message);
      });
  }

  function ContentBlock() {
    const content = nextEvents.map((event: gapi.client.calendar.Event) => {
      const eventDate: Moment = moment(event.start.dateTime);

      return (
        <div className="event">
          <div className="calendar-date">
            <p className="month">
              {eventDate.format("MMM").toLocaleUpperCase()}
            </p>
            <p className="day-num">{eventDate.format("D")}</p>
            <p className="day-week">{eventDate.format("dddd")}</p>
          </div>

          <div className="calendar-info">
            {/* prettier-ignore */}
            <a href={event.htmlLink}><h4>{event.summary}</h4></a>
            <p>
              <b>
                {eventDate.format("h:mma[,]") ?? ""}{" "}
                {event.location ? event.location + ". " : ""}
              </b>
              {pagnateText(event.description, 175)}
            </p>
          </div>
        </div>
      );
    });

    return <div className="">{content}</div>;
  }

  function ErrorBlock() {
    return (
      <div className="alert alert-danger" role="alert">
        <p>
          <b>Uh-oh!</b> Something went wrong. I was unable to fetch the upcoming
          events. Try refreshing the page, or reaching out.
        </p>
        <code>
          [{error?.name}] {error?.message}
        </code>
      </div>
    );
  }

  function Content() {
    if (error) {
      return <ErrorBlock />;
    } else {
      return <ContentBlock />;
    }
  }

  return (
    <div className="MiniUpcomingEvents">
      <h3>Upcoming Events</h3>
      <Content />
      <div className="text-lg-right text-sm-center">
        <Link to="/schedule">
          <i className="fas fa-external-link-alt" /> View calendar
        </Link>
      </div>
    </div>
  );
};

export default MiniUpcomingEvents;

import React, { useState, useEffect } from "react";
import dateFormat from "dateformat";
import { pagnateText } from "../../utils";
import "./NewsTile.scss";

interface INewsTileProps {
  title: string;
  body: string;
  url: string;
  date: Date | string;
}

const NewsTile: React.FC<INewsTileProps> = (props: INewsTileProps) => {
  const [date, setDate] = useState<Date>(new Date(props.date));

  useEffect(() => {
    if (typeof props.date === "string") setDate(new Date(props.date));
  }, [props.date]);

  return (
    <div className="NewsTile">
      <div className="top">
        <p className="title">{pagnateText(props.title, 30)}</p>
      </div>
      <p className="body">{pagnateText(props.body, 180)}</p>
      <div className="bottom">
        <p className="date">{dateFormat(date, "mmm d, yyyy")}</p>
        <i className="fas fa-external-link-alt"></i>
      </div>
    </div>
  );
};

export default NewsTile;

import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { pagnateText } from "../../utils";
import { NewsItem } from "../../data/news/news";

interface NewsLineItemProps {}

const NewsLineItem: React.FC<NewsItem> = (props: NewsItem) => {
  const publishedDate: string = moment(props.publishedDate).format(
    "MMMM Do YYYY"
  );
  const titleTextPaginated: string = pagnateText(props.title, 40);
  const bodyTextPaginated: string = pagnateText(props.body, 250);
  const author: string = props.author ? `By ${props.author}` : "";

  return (
    <div className="NewsLineItem">
      <hr />
      <h4 className="mb-0">
        <Link to={`news/${props.id}`}>{titleTextPaginated}</Link>
      </h4>
      <small>{publishedDate}</small>
      <p className="mb-0">{bodyTextPaginated}</p>
      <small>{author}</small>
    </div>
  );
};

export default NewsLineItem;

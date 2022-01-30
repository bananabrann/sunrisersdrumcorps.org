import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { pagnateText } from "../../utils";
import { NewsItem } from "../../data/news/news";

interface NewsLineItemProps {
  urlPrefix: string;
  newsItem: NewsItem;
}

const NewsLineItem: React.FC<NewsLineItemProps> = (
  props: NewsLineItemProps
) => {
  const publishedDate: string = moment(props.newsItem.publishedDate).format(
    "MMMM Do YYYY"
  );
  const titleTextPaginated: string = pagnateText(props.newsItem.title, 40);
  const bodyTextPaginated: string = pagnateText(props.newsItem.body, 250);
  const author: string = props.newsItem.author
    ? `By ${props.newsItem.author}`
    : "";

  return (
    <div className="NewsLineItem">
      <hr />
      <h4 className="mb-0">
        <Link to={`${props.urlPrefix}${props.newsItem.id}`}>
          {titleTextPaginated}
        </Link>
      </h4>
      <small>{publishedDate}</small>
      <p className="mb-0">{bodyTextPaginated}</p>
      <small>{author}</small>
    </div>
  );
};

export default NewsLineItem;

import moment, { Moment } from "moment";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { newsData, NewsItem } from "../../data/news/news";
import { pagnateText } from "../../utils";
import "./MiniNews.scss";

interface INewsProps {
  singleId?: number;
}

const MiniNews: React.FC<INewsProps> = (props: INewsProps) => {
  function NewsContentBlock() {
    const content = newsData.map((article: NewsItem) => {
      const publishedDate: Moment = moment(article.publishedDate);
      const titleTextPaginated: string = pagnateText(article.title, 40);
      const bodyTextPaginated: string = pagnateText(article.body, 250);

      return (
        <div className="article">
          <h4>
            <Link to={`news/${article.id}`}>{titleTextPaginated}</Link>
          </h4>
          <p>{bodyTextPaginated}</p>
        </div>
      );
    });

    return <div className="">{content}</div>;
  }

  function Content() {
    if (false) {
      // return <ErrorBlock />;
    } else {
      return <NewsContentBlock />;
    }
  }

  return (
    <div className="MiniNews">
      <Content />
    </div>
  );
};

export default MiniNews;

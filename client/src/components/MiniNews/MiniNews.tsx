import moment, { Moment } from "moment";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { newsData, NewsItem } from "../../data/news/news";
import { pagnateText } from "../../utils";
import NewsLineItem from "../NewsLineItem/NewsLineItem"
import "./MiniNews.scss";

interface INewsProps {
  singleId?: number;
}

const MiniNews: React.FC<INewsProps> = (props: INewsProps) => {
  function NewsContentBlock() {
    const content = newsData.map((article: NewsItem) => {
      return (
        <div className="article">
          <NewsLineItem urlPrefix="news/" newsItem={{...article}} />
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
      <h3 className="mb-0">Latest News</h3>
      <div className="text-lg-left">
        <Link to="/news">
          <i className="fas fa-external-link-alt" /> See all news
        </Link>
      </div>
      <Content />      
    </div>
  );
};

export default MiniNews;

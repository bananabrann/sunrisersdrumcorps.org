import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import NewsLineItem from "../NewsLineItem/NewsLineItem";
import { newsData, NewsItem } from "../../data/news/news";

interface NewsProps {}

const News: React.FC<NewsProps> = (props: NewsProps) => {
  function NewsContentList() {
    const content = newsData.map((article: NewsItem) => {
      return (
        <div className="article">
          <NewsLineItem urlPrefix="" newsItem={{ ...article }} />
        </div>
      );
    });
    return (<div>{content}</div>); // prettier-ignore
  }

  return (
    <div className="News">
      <Navbar />

      <div className="container">
        <h2>News</h2>

        <NewsContentList />
      </div>

      <Footer />
    </div>
  );
};

export default News;

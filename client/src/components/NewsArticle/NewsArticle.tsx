import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { newsData, NewsItem } from "../../data/news/news";
import "./NewsArticle.scss";

type NewsArticleParams = {
  // NOTE -- Numbers (at maybe more) are always strings.
  newsArticleId: string;
};

const NewsArticle: React.FC<any> = () => {
  const params = useParams<NewsArticleParams>();
  const [article, setArticle] = useState<NewsItem>();

  useEffect(() => {
    setArticle(newsData.find((e: NewsItem) => e.id === params.newsArticleId));
  }, []);

  useEffect(() => {
    console.log(article);
  }, [article]);

  return (
    <div className="NewsArticle">
      <Navbar />

      <div className="container">
        <div
          className="alert alert-danger alert-dismissible fade show col-12"
          role="alert"
        >
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <h6 className="alert-heading">In Development</h6>
          <p>
            This page is in development, and is a placeholder for the
            functionality.
          </p>
        </div>
      </div>

      <code>Params as: {params.newsArticleId}</code>
      <h3>{article?.title ?? "Uh-oh, I didn't find that article :("}</h3>
      <p>{article?.body}</p>
    </div>
  );
};

export default NewsArticle;

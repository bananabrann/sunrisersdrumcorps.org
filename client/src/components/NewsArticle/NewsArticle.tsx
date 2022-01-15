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

      <code>Params as: {params.newsArticleId}</code>
      <h3>{article?.title ?? "Uh-oh, I didn't find that article :("}</h3>
      <p>{article?.body}</p>
    </div>
  );
};

export default NewsArticle;

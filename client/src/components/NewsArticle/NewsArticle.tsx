import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import Footer from "../Footer/Footer";
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
  const [publishedDateFormatted, setPublishedDateFormatted] =
    useState<string>();

  useEffect(() => {
    setArticle(newsData.find((e: NewsItem) => e.id === params.newsArticleId));
  }, []);

  useEffect(() => {
    const x = moment(article?.publishedDate).format("MMMM Do, YYYY");
    setPublishedDateFormatted(x ? `Published on ${x}` : "No time published");
  }, [article]);

  return (
    <div className="NewsArticle">
      <Navbar />

      <div className="container">
        <div
          className="alert alert-secondary alert-dismissible fade show col-12"
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
          <h6 className="alert-heading">Hey, you!</h6>
          <p>For the latest updates, follow us on social media!</p>
        </div>
      </div>

      <div className="container news-content">
        <h2>{article?.title ?? "Uh-oh, I didn't find that article :("}</h2>
        <p>{article?.author ? `By ${article.author}` : ""}</p>
        <p>{publishedDateFormatted}</p>
        <hr />
        <p>{article?.body}</p>
      </div>
      <Footer />
    </div>
  );
};

export default NewsArticle;

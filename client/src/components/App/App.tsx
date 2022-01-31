import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import News from "../News/News";
import NewsArticle from "../NewsArticle/NewsArticle";
import PageNotFound from "../PageNotFound/PageNotFound";
import Schedule from "../Schedule/Schedule";
import Staff from "../Staff/Staff";
import StaffSinglePage from "../StaffSinglePage/StaffSinglePage";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/*
            NOTE -- With v6, it's possible to nest these for added benefits, though it potentially
            may invole significant refactoring.
            https://reactrouterdotcom.fly.dev/docs/en/v6/api
          */}
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="news" element={<News />} />
          <Route path="/news/:newsArticleId" element={<NewsArticle />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/staff/:id" element={<StaffSinglePage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

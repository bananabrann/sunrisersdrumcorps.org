const express = require("express");
const router = express.Router();
const NewsController = require("../controllers/news.ts");

router.get("/", NewsController.getAllNews);
// router.get("/:slug", NewsController.getSingleNewsBySlug);

module.exports = router;

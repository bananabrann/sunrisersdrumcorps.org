import express from "express";
const newsRoute = require("./routes/news.ts");

const app: express.Application = express();

app.get("/", (req, res) => {
  res.status(200).send("API is ready.");
});

app.use("/api/news", newsRoute);

const PORT: string | number = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});

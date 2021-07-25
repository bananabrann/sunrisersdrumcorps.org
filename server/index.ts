import express from "express";
const newsRoute = require("./routes/news.ts");

const app: express.Application = express();

app.get("/", (req, res) => {
  res.status(200).send("API is ready.");
});
app.use("/api/news", newsRoute);

app.get("*", (req: express.Request, res: express.Response): void => {
  res.status(404).send({ message: "Huh, we couldn't find that page..." });
});

const PORT: string | number = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});

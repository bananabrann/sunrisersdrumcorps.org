import express from "express";
import tedious, { Connection, ConnectionConfig, ConnectionOptions } from "tedious"
require("dotenv").config();

const app: express.Application = express();
// const { Connection, Request } = require("tedious");
const newsRoute = require("./routes/news.ts");

const config: ConnectionConfig = {
  authentication: {
    options: {
      userName: process.env.DB_USER,
      password: process.env.DB_PASS
    },
    type: "default"
  },
  server: process.env.DB_HOST,
  options: {
    database: "dev",
    encrypt: true
  },
  
};
const connection: Connection = new Connection(config);

connection.on("connect", err => {
  if (err) {
    console.error(err.message);
  } else {
    console.log(`Successfully connected to ${config.server} on ${config.options?.database}`)
    // queryDatabase();
  }
});

connection.connect();









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

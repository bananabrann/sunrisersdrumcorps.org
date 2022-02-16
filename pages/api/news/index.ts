import { IResult } from "mssql";
import { NextApiRequest, NextApiResponse } from "next";
import { News, query } from "../../../lib/db";
import { isAuthorized } from "../../../lib/utils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const results: IResult<News> = await query(
        `
        SELECT * FROM News
        ORDER BY id DESC
        `
      );

      return res.status(200).json({ results });
    } catch (error) {
      res.status(500).json({ message: error.message, error: error });
    }
  } else if (req.method === "POST") {
    const { slug, title, published, draft, content } = req.body;

    if (isAuthorized(req)) {
      if (!slug || !title || !published || !content || draft === undefined) {
        return res
          .status(400)
          .json({ message: "Request body was not received as expected." });
      }
      try {
        const results: IResult<News> = await query(
          `
          INSERT INTO [dbo].[News] (slug, title, published, draft, content)
          VALUES ('${slug}', '${title}', GETDATE(), '${draft}', '${content}')
          `
        );

        return res.status(200).json({ results });
      } catch (error) {
        res.status(500).json({ message: error.message, error: error });
      }
    } else {
      console.log(
        `[401] Client ${req.headers["user-agent"]} blocked to POST /api/news`
      );

      return res.status(401).json({ message: "Not authorized." });
    }

    return res.status(200).json({ message: "Hi!" });
  } else {
    res.status(405).json({ message: "Method not allowed." });
  }
}

import { NextApiRequest, NextApiResponse } from "next";
import { News, query } from "../../../lib/db";
import { IResult } from "mssql";
import { isAuthorized } from "../../../lib/utils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const slug: string = req.query.slug as string;

  if (req.method === "GET") {
    try {
      const results: IResult<News> = await query(
        `
        SELECT * FROM [dbo].News
        WHERE slug = '${slug}'
        `
      );

      if (results.recordset.length === 0) {
        return res.status(404).json({ message: "News article not found." });
      }

      return res.status(200).json({ results });
    } catch (error) {
      res.status(500).json({ message: error.message, error: error });
    }
  } else if (req.method === "DELETE") {
    if (isAuthorized(req)) {
      const results: IResult<News> = await query(
        `
        DELETE FROM [dbo].News
        WHERE slug = '${slug}'
        `
      );

      return res.status(200).json({ results });
    }

    return res.status(401).json({ message: "Bad password." });
  } else {
    res.status(405).json({ message: "Method not allowed." });
  }
}

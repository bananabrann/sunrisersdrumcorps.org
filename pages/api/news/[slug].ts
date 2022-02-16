import { NextApiRequest, NextApiResponse } from "next";
import { News, query } from "../../../lib/db";
import { IResult } from "mssql";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const slug: string = req.query.slug as string;

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
  } else {
    res.status(405).json({ message: "Method not allowed." });
  }
}

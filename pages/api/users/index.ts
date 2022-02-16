import { IResult } from "mssql";
import { NextApiRequest, NextApiResponse } from "next";
import { query, User } from "../../../lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const results: IResult<User> = await query(
        `
        SELECT * FROM Users
        ORDER BY id DESC
        `
      );

      return res.status(200).json({ results });
    } catch (error) {
      res.status(500).json({ message: error.message, error: error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed." });

    // TODO -- Add POST method
  }
}

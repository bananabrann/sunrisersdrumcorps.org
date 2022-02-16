import { NextApiRequest, NextApiResponse } from "next";
import { query, User } from "../../../lib/db";
import { IResult } from "mssql";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const id: number = Number(req.query.id);

    if (isNaN(id)) return res.status(400).json({ message: "id expects a number." });

    try {
      const results: IResult<User> = await query(
        `
        SELECT * FROM Users
        WHERE id = ${id}
        `
      );

      if (results.recordset.length === 0) {
        return res.status(404).json({ message: "User not found." });
      }

      return res.status(200).json({ results });
    } catch (error) {
      res.status(500).json({ message: error.message, error: error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed." });
  }
}

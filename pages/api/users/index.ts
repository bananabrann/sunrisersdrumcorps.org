import { IResult } from "mssql";
import { NextApiRequest, NextApiResponse } from "next";
import { query, User } from "../../../lib/db";

export default async function getUsers(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.status(405).json({ message: "Method not allowed." });
  } else {
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
  }
}

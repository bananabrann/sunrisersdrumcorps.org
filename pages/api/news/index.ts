import { NextApiRequest, NextApiResponse } from "next";

export default function getAllNews(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") res.status(405).json({ message: "Method not allowed." })

  res.status(200)
} 
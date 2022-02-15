import { NextApiRequest, NextApiResponse } from "next";

export default function getPeople(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") res.status(405).json({ message: "Method not allowed." })

  res.status(200).json([{ message: `The request worked.` }])
} 

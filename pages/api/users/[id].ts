import { NextApiRequest, NextApiResponse } from "next";

export default function getUserById(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: `Got id ${req.query.id}` })
} 

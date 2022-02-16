import { NextApiRequest, NextApiResponse } from "next";

export default function getNewsById(req: NextApiRequest, res: NextApiResponse) {
  res.json({ byId: req.query.id, message: "okay, I found it" });
}

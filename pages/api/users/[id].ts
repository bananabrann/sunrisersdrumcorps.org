import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const id: number = Number(req.query.id);

    try {
      const user = await prisma.user.findUnique({
        where: {
          id: id,
        },
      });
      if (!user) {
        return res.status(404);
      }

      return res.status(200).json({ user });
    } catch (error) {
      res.status(error.status).json({ message: error.message, error: error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed." });
  }
}

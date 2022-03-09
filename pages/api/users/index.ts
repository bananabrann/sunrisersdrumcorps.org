import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const users = await prisma.user.findMany();
      return res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: error.message, error: error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed." });

    // TODO -- Add POST method
  }
}

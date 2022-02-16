// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { query } from "../../lib/db";

// export default function handler(req, res) {
//   res.status(200).json({ name: "John Doe" });
// }

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  // const {username, password, superpowers} = req.body;

  try {
    const results = await query(
      /*
      `
      INSERT INTO [dbo].Users (username, password, superpowers)
      VALUES (?, ?, ?)
      `,
      [username, password, superpowers]
      */
      `
    INSERT INTO [dbo].Users (username, password, superpowers)
    VALUE (?, ?, ?)
     `,
      ["bobbyjoe123", "totallysecurepassword", 0]
    );
    res.json({ results });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default handler;

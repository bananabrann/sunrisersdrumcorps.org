import { Request, Response } from "express";

module.exports.getAllNews = async (
  req: Request,
  res: Response
): Promise<void> => {
  console.log("Yo!");
  res.status(200).send({message: "Hey, we're working!"});
};

import { getAllOrderIn } from "./Database/Database";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      let order = await getAllOrderIn();
      res.status(200).json(order);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Error Server" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}

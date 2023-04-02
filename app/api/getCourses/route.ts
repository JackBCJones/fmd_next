import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";

// type Data = {
//   title: string
// }

export default async function GET(
  req: NextApiRequest,
  res: NextApiResponse
  ) {
  try {
    const data = await prisma.course.findMany({
      
    })
    return res.status(200).json(data)
  } catch (error) {
    return res.status(500).json(error)
  }
}

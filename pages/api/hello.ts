// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import sanityClient from "@sanity/client";
import { IApiHello } from "../../typings";

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_API_TOKEN,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2021-08-31",
};
const client = sanityClient(config);

type Data = IApiHello | string;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const query = `
  {
    "projects": *[_type=='projects']{
      _createdAt,
      _id,
      title,
      slug,
      startDate,
      endDate,
      image,
      role
    } | order( startDate desc),
    "experience": *[_type=="experience"] {
      _id,
      title,
      image
    },
    "references": *[_type=="messages" && approved == true]{
      _id,
      name,
      email,
      message
    }
  }
  `;
  try {
    const data = await client.fetch(query);
    res.status(200).json(data);
  } catch (e) {
    return res.status(200).send("Error");
  }
}

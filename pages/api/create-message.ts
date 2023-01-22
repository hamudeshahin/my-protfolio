import type { NextApiRequest, NextApiResponse } from "next";
import sanityClient from "@sanity/client";
const nodeMailer = require("nodemailer");

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_API_TOKEN,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2021-08-31",
};
const client = sanityClient(config);

// email settings
const PASSWORD = process.env.PASSWORD;
const EMAIL = process.env.EMAIL;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email, message } = JSON.parse(req.body);
  try {
    await client.create({
      _type: "messages",
      name,
      email,
      message,
    });
  } catch (err) {
    console.error("err");
    console.error(err);
    return res.status(500).json({
      message: "Couldn't submit comment",
      err,
    });
  }

  /// send email first

  const transporter = nodeMailer.createTransport({
    port: 465,
    host: "smtp.zoho.com",
    auth: {
      user: EMAIL,
      pass: PASSWORD,
    },
    secure: true,
  });
  const mailData = {
    from: EMAIL,
    to: "hamedsahin2018@icloud.com", // our mail
    subject: `Protfolio Website: You recieved a message from ${email}`,
    text: message,
    // html: <div>{message}</div>,
  };

  return transporter.sendMail(mailData, (err: any, info: any) => {
    if (err) {
      return res.status(400).send(err);
    } else {
      return res.status(200).send("OK");
    }
  });
}

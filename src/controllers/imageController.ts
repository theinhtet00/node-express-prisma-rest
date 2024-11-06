import dotenv from "dotenv";
import AWS from "aws-sdk";
import { Request, Response } from "express";

dotenv.config();

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
  region: process.env.AWS_REGION as string,
});

export const uploadImage = async (
  req: Request,
  res: Response
): Promise<any> => {
  if (!req.file) return res.status(400).send("No file uploaded.");

  const params = {
    Bucket: process.env.AWS_S3_BUCKET_NAME as string,
    Key: `images/${Date.now()}_${req.file.originalname}`,
    Body: req.file.buffer,
    ContentType: req.file.mimetype,
    ACL: "public-read",
  };

  try {
    const uploadResult = await s3.upload(params).promise();
    return res.json({ imageUrl: uploadResult.Location });
  } catch (error) {
    console.error("Error uploading to S3:", error);
    return res.status(500).send("Error uploading file.");
  }
};

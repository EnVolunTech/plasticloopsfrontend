import { NextApiRequest, NextApiResponse } from "next";
import { v2 as cloudinary } from "cloudinary";
import { v4 as uuid } from "uuid";

const signedUploadHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const timestamp = Math.round(new Date().getTime() / 1000);
  const public_id = uuid() + "-" + req.query.file;

  // https://cloudinary.com/documentation/upload_images#generating_authentication_signatures
  const signature = cloudinary.utils.api_sign_request(
    {
      timestamp,
      public_id,
    },
    process.env.CLOUDINARY_API_SECRET
  );

  return res.status(200).json({
    timestamp,
    signature,
    public_id,
  });
};

export default signedUploadHandler;

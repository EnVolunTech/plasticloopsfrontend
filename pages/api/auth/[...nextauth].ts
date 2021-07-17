import NextAuth from "next-auth";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import Providers from "next-auth/providers";
import { FirebaseAdapter } from "@next-auth/firebase-adapter";

import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

const options = {
  providers: [
    Providers.Email({
      server:
        "smtp://apikey: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@smtp.sendgrid.net:587",
      from: "vaughn_dalde@icloud.com",
    }),
  ],
  adapter: FirebaseAdapter(firestore),

  debug: process.env.NODE_ENV === "development" ? true : false,
};

const authHandler: NextApiHandler = (
  req: NextApiRequest,
  res: NextApiResponse
) => NextAuth(req, res, options);

export default authHandler;
